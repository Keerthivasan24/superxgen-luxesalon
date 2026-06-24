import { Component } from '@angular/core';
import { StyleAiService } from '../../services/style-ai.service';

@Component({
  selector: 'app-ai-hero',
  templateUrl: './ai-hero.component.html',
  styleUrls:  ['./ai-hero.component.scss'],
})
export class AiHeroComponent {
  constructor(public svc: StyleAiService) {}
}