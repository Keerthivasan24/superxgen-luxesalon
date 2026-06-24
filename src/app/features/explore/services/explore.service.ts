import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Salon, FilterState, SortOption } from '../models/salon.model';
import { SalonDataService } from '../../../shared/services/salon-data.service';
// ← add

@Injectable({ providedIn: 'root' })
export class ExploreService {

  private _filters$ = new BehaviorSubject<FilterState>({
    search: '', areas: [], services: [], priceLevel: [],
    minRating: 0, openNow: false, sortBy: 'recommended',
  });

  // ✅ remove private _salons$ entirely — use SalonDataService as the single source
  filters$ = this._filters$.asObservable();

  results$ = combineLatest([
    this.salonData.salons$,   // ← was this._salons$
    this._filters$
  ]).pipe(
    map(([salons, f]) => this.applyFilters(salons, f))
  );

  resultCount$ = this.results$.pipe(map(r => r.length));

  get filters() { return this._filters$.value; }

  constructor(private salonData: SalonDataService) {} // ← add

  // toggleSave now goes through SalonDataService too
  toggleSave(id: number) {
    this.salonData.updateSalon(id, {
      isSaved: !this.salonData.getSalonById(id)?.isSaved
    });
  }

  patchFilter(patch: Partial<FilterState>) {
    this._filters$.next({ ...this._filters$.value, ...patch });
  }

  toggleArea(area: string) {
    const areas = this.filters.areas;
    this.patchFilter({
      areas: areas.includes(area) ? areas.filter(a => a !== area) : [...areas, area]
    });
  }

  toggleService(svc: string) {
    const services = this.filters.services;
    this.patchFilter({
      services: services.includes(svc) ? services.filter(s => s !== svc) : [...services, svc]
    });
  }

  togglePrice(level: number) {
    const pl = this.filters.priceLevel;
    this.patchFilter({
      priceLevel: pl.includes(level) ? pl.filter(p => p !== level) : [...pl, level]
    });
  }

  setSort(sortBy: SortOption) { this.patchFilter({ sortBy }); }

  clearAll() {
    this._filters$.next({
      search:'', areas:[], services:[], priceLevel:[], minRating:0, openNow:false, sortBy:'recommended'
    });
  }

  removeArea(area: string)    { this.patchFilter({ areas:    this.filters.areas.filter(a => a !== area) }); }
  removeService(svc: string)  { this.patchFilter({ services: this.filters.services.filter(s => s !== svc) }); }
  removePrice(level: number)  { this.patchFilter({ priceLevel: this.filters.priceLevel.filter(p => p !== level) }); }

  activeFilterCount$(filters: FilterState): number {
    return filters.areas.length + filters.services.length + filters.priceLevel.length
      + (filters.minRating > 0 ? 1 : 0) + (filters.openNow ? 1 : 0);
  }

  private applyFilters(salons: Salon[], f: FilterState): Salon[] {
    let result = [...salons];

    if (f.search.trim()) {
      const q = f.search.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.area.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q)) ||
        s.services.some(sv => sv.toLowerCase().includes(q))
      );
    }

    if (f.areas.length)     result = result.filter(s => f.areas.includes(s.area));
    if (f.services.length)  result = result.filter(s => f.services.some(sv => s.services.includes(sv)));
    if (f.priceLevel.length)result = result.filter(s => f.priceLevel.includes(s.priceLevel));
    if (f.minRating > 0)    result = result.filter(s => s.rating >= f.minRating);
    if (f.openNow)          result = result.filter(s => s.openNow);

    switch (f.sortBy) {
      case 'rating':      result.sort((a,b) => b.rating - a.rating); break;
      case 'distance':    result.sort((a,b) => (a.distance||99) - (b.distance||99)); break;
      case 'price_low':   result.sort((a,b) => a.priceLevel - b.priceLevel); break;
      case 'price_high':  result.sort((a,b) => b.priceLevel - a.priceLevel); break;
      case 'newest':      result.sort((a,b) => (a.yearsOpen||0) - (b.yearsOpen||0)); break;
      default:
        result.sort((a,b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || b.rating - a.rating);
    }

    return result;
  }
}