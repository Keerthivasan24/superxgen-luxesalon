import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ExploreService } from '../../services/explore.service';
import { SortOption } from '../../models/salon.model';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent {
  @Output() toggleFilters = new EventEmitter<void>();
  @Output() toggleView    = new EventEmitter<void>();
  @Input()  viewMode: 'grid' | 'map' = 'grid';
  @Input()  filterCount = 0;

  searchCtrl = new FormControl('');

  sortOptions: { value: SortOption; label: string }[] = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'rating',      label: 'Top Rated' },
    { value: 'distance',    label: 'Nearest First' },
    { value: 'price_low',   label: 'Price: Low to High' },
    { value: 'price_high',  label: 'Price: High to Low' },
    { value: 'newest',      label: 'Newest' },
  ];

  constructor(public exploreService: ExploreService) {
    this.searchCtrl.valueChanges.pipe(
      debounceTime(280),
      distinctUntilChanged()
    ).subscribe(v => this.exploreService.patchFilter({ search: v || '' }));
  }

  setSort(val: SortOption) { this.exploreService.setSort(val); }
}

import { Input } from '@angular/core';