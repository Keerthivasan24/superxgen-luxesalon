import { Component, Output, EventEmitter } from '@angular/core';
import { ExploreService } from '../../services/explore.service';
import { AREAS, SERVICES } from '../../models/salon.model';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
})
export class FilterSidebarComponent {
  @Output() close = new EventEmitter<void>();

  areas    = AREAS;
  services = SERVICES;
  priceLevels = [
    { level: 1, label: '₹', desc: 'Budget' },
    { level: 2, label: '₹₹', desc: 'Moderate' },
    { level: 3, label: '₹₹₹', desc: 'Premium' },
    { level: 4, label: '₹₹₹₹', desc: 'Luxury' },
  ];
  ratings = [4.5, 4.0, 3.5];

  expandedSections: Record<string,boolean> = {
    area: true, service: true, price: true, rating: true, availability: true
  };
Math = Math;

  constructor(public exploreService: ExploreService) {}

  toggle(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  isAreaActive(area: string)     { return this.exploreService.filters.areas.includes(area); }
  isServiceActive(svc: string)   { return this.exploreService.filters.services.includes(svc); }
  isPriceActive(level: number)   { return this.exploreService.filters.priceLevel.includes(level); }
  isRatingActive(r: number)      { return this.exploreService.filters.minRating === r; }

  setRating(r: number) {
    const current = this.exploreService.filters.minRating;
    this.exploreService.patchFilter({ minRating: current === r ? 0 : r });
  }

  get activeCount() {
    return this.exploreService.activeFilterCount$(this.exploreService.filters);
  }
}