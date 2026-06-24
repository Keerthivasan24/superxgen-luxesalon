import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore.service';


@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent {
  viewMode: 'grid' | 'list' | 'map' = 'grid';
  sidebarOpen = false;

  constructor(public exploreService: ExploreService) {}

  get filterCount() {
    return this.exploreService.activeFilterCount$(this.exploreService.filters);
  }

  toggleView() {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  toggleMap() {
    this.viewMode = this.viewMode === 'map' ? 'grid' : 'map';
  }
}