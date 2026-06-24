import { Component, Input } from '@angular/core';
import { ReviewModel, SalonDetail } from '../models/salon-detail.model';


@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls:  ['./reviews-section.component.scss'],
})
export class ReviewsSectionComponent {
  @Input() salon!: SalonDetail;

  activeFilter = 0;
  visibleCount = 4;

  get filtered(): ReviewModel[] {
    const list = this.activeFilter === 0
      ? this.salon.reviewList
      : this.salon.reviewList.filter(r => r.rating === this.activeFilter);
    return list.slice(0, this.visibleCount);
  }

  get ratingBreakdown(): { stars: number; count: number; pct: number }[] {
    return [5, 4, 3, 2, 1].map(stars => {
      const count = this.salon.reviewList.filter(r => r.rating === stars).length;
      const pct   = Math.round((count / this.salon.reviewList.length) * 100);
      return { stars, count, pct };
    });
  }

  stars(n: number): string { return '★'.repeat(n) + '☆'.repeat(5 - n); }
}