import { Component } from '@angular/core';
import { TrendsService } from '../../services/trends.service';

@Component({
  selector: 'app-trend-hero',
  templateUrl: './trend-hero.component.html',
  styleUrls: ['./trend-hero.component.scss'],
})
export class TrendHeroComponent {
  particles = Array.from({ length: 18 }, (_, i) => ({
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100),
    delay: `${(i * 0.4).toFixed(1)}s`,
  }));

  constructor(public trendsService: TrendsService) {}
}