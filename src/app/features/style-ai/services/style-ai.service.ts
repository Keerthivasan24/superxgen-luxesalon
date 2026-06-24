import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {
  StyleAiView, AiAnalysisResult, QuizAnswer,
  MOCK_AI_RESULT
} from '../models/style-ai.model';

export interface LoadingStep {
  label:    string;
  done:     boolean;
  active:   boolean;
}

@Injectable({ providedIn: 'root' })
export class StyleAiService {

  private _view$    = new BehaviorSubject<StyleAiView>('hero');
  private _result$  = new BehaviorSubject<AiAnalysisResult | null>(null);
  private _loading$ = new BehaviorSubject<boolean>(false);
  private _steps$   = new BehaviorSubject<LoadingStep[]>([]);
  private _photo$   = new BehaviorSubject<string | null>(null);
  private _error$   = new BehaviorSubject<string | null>(null);

  view$    = this._view$.asObservable();
  result$  = this._result$.asObservable();
  loading$ = this._loading$.asObservable();
  steps$   = this._steps$.asObservable();
  photo$   = this._photo$.asObservable();
  error$   = this._error$.asObservable();

  constructor(private http: HttpClient) {}

  get view(): StyleAiView { return this._view$.value; }

  goTo(view: StyleAiView): void { this._view$.next(view); }

  setPhoto(dataUrl: string): void {
    this._photo$.next(dataUrl);
    this._view$.next('loading');
    this.runAnalysisWithPhoto(dataUrl);
  }

  submitQuiz(answers: QuizAnswer[]): void {
    this._view$.next('loading');
    this.runAnalysisWithQuiz(answers);
  }

  reset(): void {
    this._view$.next('hero');
    this._result$.next(null);
    this._photo$.next(null);
    this._error$.next(null);
    this._steps$.next([]);
  }

  // ── Loading steps animation ──────────────────────────
  private async animateSteps(labels: string[]): Promise<void> {
    const steps: LoadingStep[] = labels.map(l => ({ label:l, done:false, active:false }));
    this._steps$.next([...steps]);

    for (let i = 0; i < steps.length; i++) {
      steps[i].active = true;
      this._steps$.next([...steps]);
      await this.delay(900);
      steps[i].done   = true;
      steps[i].active = false;
      this._steps$.next([...steps]);
      await this.delay(200);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  // ── Photo analysis via Claude API ────────────────────
  private async runAnalysisWithPhoto(dataUrl: string): Promise<void> {
    this._loading$.next(true);
    this._error$.next(null);

    const stepLabels = [
      'Analysing facial structure…',
      'Detecting face shape…',
      'Matching hair texture…',
      'Curating style recommendations…',
      'Matching Bangalore salons…',
    ];

    this.animateSteps(stepLabels);

    try {
      const base64 = dataUrl.split(',')[1];
      const mediaType = dataUrl.split(';')[0].split(':')[1] as
        'image/jpeg' | 'image/png' | 'image/webp';

      const prompt = `You are LuxeSalon's expert AI stylist. Analyse this portrait photo.

Return ONLY a valid JSON object with this exact structure:
{
  "faceShape": "Oval|Round|Square|Heart|Oblong|Diamond",
  "hairType": "Straight|Wavy|Curly|Coily",
  "skinTone": "string (e.g. Warm medium, Cool fair)",
  "personalityNote": "2 sentences about their features",
  "topTip": "1 specific styling tip",
  "colourPalettes": [
    { "name": "string", "hex": "#xxxxxx", "label": "string" }
  ],
  "recommendations": [
    {
      "id": 1,
      "name": "style name",
      "description": "2 sentence description",
      "suitedFor": "face shape · hair type · vibe",
      "duration": "e.g. 1.5 hours",
      "priceRange": "₹x,xxx–x,xxx",
      "tags": ["tag1","tag2","tag3"],
      "matchedSalon": "salon name",
      "salonArea": "area name",
      "salonId": 1
    }
  ]
}

Provide 3 recommendations and 4 colour palettes. Return ONLY the JSON, no markdown, no preamble.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: [
              {
                type: 'image',
                source: { type: 'base64', media_type: mediaType, data: base64 },
              },
              { type: 'text', text: prompt },
            ],
          }],
        }),
      });

      const data = await response.json();
      const raw  = data.content?.[0]?.text ?? '';
      const clean = raw.replace(/```json|```/g, '').trim();
      const parsed: AiAnalysisResult = JSON.parse(clean);

      await this.delay(500);
      this._result$.next(parsed);
      this._view$.next('results');

    } catch (err) {
      console.warn('Claude API error — using mock result', err);
      await this.delay(4500);
      this._result$.next(MOCK_AI_RESULT);
      this._view$.next('results');
    } finally {
      this._loading$.next(false);
    }
  }

  // ── Quiz-based analysis ───────────────────────────────
  private async runAnalysisWithQuiz(answers: QuizAnswer[]): Promise<void> {
    this._loading$.next(true);
    this._error$.next(null);

    const stepLabels = [
      'Reading your style profile…',
      'Analysing your preferences…',
      'Curating personalised looks…',
      'Matching Bangalore salons…',
      'Finalising recommendations…',
    ];

    this.animateSteps(stepLabels);

    try {
      const answersText = answers
        .map(a => `${a.questionId}: ${a.answer}`)
        .join('\n');

      const prompt = `You are LuxeSalon's expert AI stylist based in Bangalore.

A user has completed a style quiz with these answers:
${answersText}

Return ONLY a valid JSON object:
{
  "faceShape": "infer from answers or use Oval as default",
  "hairType": "from answers",
  "skinTone": "Warm medium",
  "personalityNote": "2 sentences based on their quiz answers",
  "topTip": "1 specific tip based on their lifestyle and vibe",
  "colourPalettes": [
    { "name": "string", "hex": "#xxxxxx", "label": "string" }
  ],
  "recommendations": [
    {
      "id": 1,
      "name": "style name",
      "description": "2 sentence description",
      "suitedFor": "relevant criteria",
      "duration": "e.g. 1 hour",
      "priceRange": "₹x,xxx–x,xxx",
      "tags": ["tag1","tag2"],
      "matchedSalon": "salon in Bangalore",
      "salonArea": "area",
      "salonId": 1
    }
  ]
}

Provide 3 recommendations and 4 colour palettes suited to Bangalore. Return ONLY JSON.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data  = await response.json();
      const raw   = data.content?.[0]?.text ?? '';
      const clean = raw.replace(/```json|```/g, '').trim();
      const parsed: AiAnalysisResult = JSON.parse(clean);

      await this.delay(500);
      this._result$.next(parsed);
      this._view$.next('results');

    } catch (err) {
      console.warn('Claude API error — using mock result', err);
      await this.delay(4500);
      this._result$.next(MOCK_AI_RESULT);
      this._view$.next('results');
    } finally {
      this._loading$.next(false);
    }
  }
}