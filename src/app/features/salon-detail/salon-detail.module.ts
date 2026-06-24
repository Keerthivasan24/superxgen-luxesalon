import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { MatTabsModule }    from '@angular/material/tabs';
import { MatRippleModule }  from '@angular/material/core';
import { MatIconModule }    from '@angular/material/icon';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BookingFooterComponent } from './booking-footer/booking-footer.component';
import { GalleryHeroComponent } from './gallery-hero/gallery-hero.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { SalonDetailPageComponent } from './salon-detail-page/salon-detail-page.component';
import { ServicesMenuComponent } from './services-menu/services-menu.component';
import { SlotPickerComponent } from './slot-picker/slot-picker.component';
import { StylistsRosterComponent } from './stylists-roster/stylists-roster.component';




const routes = [{ path: '', component: SalonDetailPageComponent }];

@NgModule({
  declarations: [
    SalonDetailPageComponent,
    GalleryHeroComponent,
    AboutSectionComponent,
    ServicesMenuComponent,
    StylistsRosterComponent,
    SlotPickerComponent,
    ReviewsSectionComponent,
    LocationInfoComponent,
    BookingFooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatRippleModule,
    MatIconModule,
  ],
})
export class SalonDetailModule {}