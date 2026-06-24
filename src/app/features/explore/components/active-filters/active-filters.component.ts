import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore.service';

@Component({
  selector: 'app-active-filters',
  template: `
    <div class="active-filters" *ngIf="(exploreService.resultCount$ | async) !== null">
      <ng-container *ngIf="hasAny">
        <span class="result-count">{{ exploreService.resultCount$ | async }} salons</span>
        <div class="pills">
          <button class="pill" *ngFor="let a of exploreService.filters.areas"
                  (click)="exploreService.removeArea(a)">
            {{ a }} <span>✕</span>
          </button>
          <button class="pill" *ngFor="let s of exploreService.filters.services"
                  (click)="exploreService.removeService(s)">
            {{ s }} <span>✕</span>
          </button>
          <button class="pill" *ngFor="let p of exploreService.filters.priceLevel"
                  (click)="exploreService.removePrice(p)">
            {{ priceLbl(p) }} <span>✕</span>
          </button>
          <button class="pill" *ngIf="exploreService.filters.minRating > 0"
                  (click)="exploreService.patchFilter({minRating:0})">
            {{ exploreService.filters.minRating }}★+ <span>✕</span>
          </button>
          <button class="pill" *ngIf="exploreService.filters.openNow"
                  (click)="exploreService.patchFilter({openNow:false})">
            Open Now <span>✕</span>
          </button>
        </div>
      </ng-container>
      <ng-container *ngIf="!hasAny">
        <span class="result-count">{{ exploreService.resultCount$ | async }} salons in Bangalore</span>
      </ng-container>
    </div>
  `,
  styles: [`
    .active-filters {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0 12px;
      flex-wrap: wrap;
      min-height: 40px;
    }
    .result-count {
      font-size: 11px;
      color: var(--text-muted);
      letter-spacing: .06em;
      flex-shrink: 0;
    }
    .pills { display: flex; gap: 6px; flex-wrap: wrap; }
    .pill {
      display: flex; align-items: center; gap: 5px;
      background: rgba(201,168,76,.1);
      border: 1px solid rgba(201,168,76,.3);
      color: var(--gold);
      font-size: 11px;
      padding: 3px 10px;
      border-radius: 20px;
      cursor: pointer;
      font-family: var(--font-body);
      transition: background .15s;
      &:hover { background: rgba(201,168,76,.2); }
      span { font-size: 9px; opacity: .7; }
    }
  `]
})
export class ActiveFiltersComponent {
  constructor(public exploreService: ExploreService) {}

  get hasAny() {
    const f = this.exploreService.filters;
    return f.areas.length || f.services.length || f.priceLevel.length || f.minRating > 0 || f.openNow;
  }

  priceLbl(level: number) {
    return ['₹','₹₹','₹₹₹','₹₹₹₹'][level - 1] || '₹';
  }
}