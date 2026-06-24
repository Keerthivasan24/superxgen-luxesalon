import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TrendCardComponent } from './components/trend-card/trend-card.component';
import { TrendFilterBarComponent } from './components/trend-filter-bar/trend-filter-bar.component';
import { TrendHeroComponent } from './components/trend-hero/trend-hero.component';
import { TrendsPageComponent } from './trends-page/trends-page.component';


@NgModule({
  declarations: [
    TrendsPageComponent,
    TrendHeroComponent,
    TrendCardComponent,
     TrendFilterBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TrendsPageComponent }
    ]),
  ],
})
export class TrendsModule {}