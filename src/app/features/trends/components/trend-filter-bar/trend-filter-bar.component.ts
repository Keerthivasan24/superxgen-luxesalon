import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TrendsService } from '../../services/trends.service';
import { TrendCategory, TREND_CATEGORIES } from '../../models/trend.model';

@Component({
  selector: 'app-trend-filter-bar',
  templateUrl: './trend-filter-bar.component.html',
  styleUrls: ['./trend-filter-bar.component.scss'],
})
export class TrendFilterBarComponent {
  categories = TREND_CATEGORIES;
  searchCtrl = new FormControl('');

  constructor(public trendsService: TrendsService) {
    this.searchCtrl.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe(v => this.trendsService.setSearch(v || ''));
  }

  setCategory(cat: TrendCategory) {
    this.trendsService.setCategory(cat);
  }

  isActive(cat: TrendCategory) {
    return this.trendsService.filters.category === cat;
  }
}