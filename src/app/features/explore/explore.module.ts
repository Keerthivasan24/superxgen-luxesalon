import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { ActiveFiltersComponent } from './components/active-filters/active-filters.component';
import { SalonCardComponent } from './components/salon-card/salon-card.component';
import { SalonGridComponent } from './components/salon-grid/salon-grid.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@Component({ selector:'app-explore', template:`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;color:#C9A84C;font-size:24px;background:#0A0A0F;">Explore Page — Coming Next</div>` })
export class ExploreComponent {}

@NgModule({
  declarations:[ExploreComponent,ExplorePageComponent, SearchHeaderComponent, ActiveFiltersComponent, SalonCardComponent, SalonGridComponent, MapViewComponent, FilterSidebarComponent],
  imports:[
      CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ExplorePageComponent }]),
  ]
})
export class ExploreModule {}