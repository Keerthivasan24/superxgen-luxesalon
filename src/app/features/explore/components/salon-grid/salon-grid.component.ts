import { Component, Input } from '@angular/core';
import { ExploreService } from '../../services/explore.service';

@Component({
  selector: 'app-salon-grid',
  templateUrl: './salon-grid.component.html',
  styleUrls: ['./salon-grid.component.scss'],
})
export class SalonGridComponent {
  @Input() viewMode: 'grid' | 'list' = 'grid';
  loading = false;

  constructor(public exploreService: ExploreService) {}

  trackById(_: number, salon: any) { return salon.id; }
}