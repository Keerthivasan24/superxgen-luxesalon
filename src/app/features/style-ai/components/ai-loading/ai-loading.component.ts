import { Component } from '@angular/core';
import { StyleAiService } from '../../services/style-ai.service';

@Component({
  selector: 'app-ai-loading',
  templateUrl: './ai-loading.component.html',
  styleUrls:  ['./ai-loading.component.scss'],
})
export class AiLoadingComponent {
  constructor(public svc: StyleAiService) {}
}