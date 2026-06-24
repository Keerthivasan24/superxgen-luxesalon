import { Component, OnDestroy } from '@angular/core';
import { StyleAiService } from '../../services/style-ai.service';


@Component({
  selector: 'app-style-ai-page',
  templateUrl: './style-ai-page.component.html',
  styleUrls:  ['./style-ai-page.component.scss'],
})
export class StyleAiPageComponent implements OnDestroy {
  constructor(public svc: StyleAiService) {}
  ngOnDestroy(): void { this.svc.reset(); }
}