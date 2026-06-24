import { Component } from '@angular/core';
import { Trend } from '../models/trend.model';
import { TrendsService } from '../services/trends.service';


@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.scss'],
})
export class TrendsPageComponent {
  constructor(public trendsService: TrendsService) {}

  trackById(_: number, trend: Trend) { return trend.id; }
}