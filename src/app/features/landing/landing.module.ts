import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HeroThreeComponent }      from './components/hero-three/hero-three.component';
import { StatsBarComponent }       from './components/stats-bar/stats-bar.component';
import { SmartSearchComponent }    from './components/smart-search/smart-search.component';
import { FeaturedSalonsComponent } from './components/featured-salons/featured-salons.component';
import { AreaBrowseComponent }     from './components/area-browse/area-browse.component';
import { StyleAiBannerComponent }  from './components/style-ai-banner/style-ai-banner.component';
import { TrendingLooksComponent }  from './components/trending-looks/trending-looks.component';
import { TestimonialsComponent }   from './components/testimonials/testimonials.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [{ path: '', component: LandingPageComponent }];

@NgModule({
  declarations: [
    LandingPageComponent, HeroThreeComponent, StatsBarComponent,
    SmartSearchComponent, FeaturedSalonsComponent, AreaBrowseComponent,
    StyleAiBannerComponent, TrendingLooksComponent, TestimonialsComponent,
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    MatChipsModule, MatDatepickerModule, MatNativeDateModule,
  ],
})
export class LandingModule {}