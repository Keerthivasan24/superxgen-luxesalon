import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Trend, TrendCategory, TrendFilterState, MOCK_TRENDS } from '../models/trend.model';

@Injectable({ providedIn: 'root' })
export class TrendsService {

  private _trends$ = new BehaviorSubject<Trend[]>(MOCK_TRENDS);

  private _filters$ = new BehaviorSubject<TrendFilterState>({
    category: 'all',
    search: '',
    showHotOnly: false,
  });

  filters$ = this._filters$.asObservable();

  results$ = combineLatest([this._trends$, this._filters$]).pipe(
    map(([trends, f]) => this.applyFilters(trends, f))
  );

  resultCount$ = this.results$.pipe(map(r => r.length));

  featured$ = this._trends$.pipe(map(t => t.filter(tr => tr.isFeatured)));

  hotThisWeek$ = this._trends$.pipe(map(t => t.filter(tr => tr.isHot).slice(0, 4)));

  get filters() { return this._filters$.value; }

  setCategory(category: TrendCategory) {
    this._filters$.next({ ...this._filters$.value, category });
  }

  setSearch(search: string) {
    this._filters$.next({ ...this._filters$.value, search });
  }

  toggleHotOnly() {
    this._filters$.next({
      ...this._filters$.value,
      showHotOnly: !this._filters$.value.showHotOnly,
    });
  }

  clearFilters() {
    this._filters$.next({ category: 'all', search: '', showHotOnly: false });
  }

  private applyFilters(trends: Trend[], f: TrendFilterState): Trend[] {
    let result = [...trends];

    if (f.category !== 'all') {
      result = result.filter(t => t.category === f.category);
    }

    if (f.search.trim()) {
      const q = f.search.toLowerCase();
      result = result.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.label.toLowerCase().includes(q))
      );
    }

    if (f.showHotOnly) {
      result = result.filter(t => t.isHot);
    }

    // Sort: featured first, then by bookings
    result.sort((a, b) =>
      (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) ||
      b.bookingsThisWeek - a.bookingsThisWeek
    );

    return result;
  }
}