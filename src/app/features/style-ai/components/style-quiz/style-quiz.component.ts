import { Component } from '@angular/core';
import { StyleAiService } from '../../services/style-ai.service';
import { QUIZ_QUESTIONS, QuizAnswer } from '../../models/style-ai.model';

@Component({
  selector: 'app-style-quiz',
  templateUrl: './style-quiz.component.html',
  styleUrls:  ['./style-quiz.component.scss'],
})
export class StyleQuizComponent {

  questions  = QUIZ_QUESTIONS;
  currentIdx = 0;
  answers:    QuizAnswer[] = [];
  selected:   string | null = null;

  constructor(public svc: StyleAiService) {}

  get current()  { return this.questions[this.currentIdx]; }
  get progress() { return ((this.currentIdx) / this.questions.length) * 100; }
  get isLast()   { return this.currentIdx === this.questions.length - 1; }

  pick(option: string): void { this.selected = option; }

  next(): void {
    if (!this.selected) return;
    this.answers.push({ questionId: this.current.id, answer: this.selected });
    if (this.isLast) {
      this.svc.submitQuiz(this.answers);
    } else {
      this.currentIdx++;
      this.selected = null;
    }
  }

  back(): void {
    if (this.currentIdx === 0) {
      this.svc.goTo('hero');
    } else {
      this.currentIdx--;
      this.answers.pop();
      this.selected = null;
    }
  }
}