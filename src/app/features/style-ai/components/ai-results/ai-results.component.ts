import { Component, Input } from '@angular/core';
import { AiAnalysisResult } from '../../models/style-ai.model';
import { StyleAiService } from '../../services/style-ai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ai-results',
  templateUrl: './ai-results.component.html',
  styleUrls:  ['./ai-results.component.scss'],
})
export class AiResultsComponent {
  @Input() result!: AiAnalysisResult;

  constructor(public svc: StyleAiService, private router: Router) {}

  bookSalon(salonId: number, serviceHint: string): void {
    this.router.navigate(['/salon', salonId]);
  }
}