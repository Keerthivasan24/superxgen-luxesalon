import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BookingsTabComponent } from './components/bookings-tab/bookings-tab.component';
import { LoyaltyCardComponent } from './components/loyalty-card/loyalty-card.component';
import { PreferencesTabComponent } from './components/preferences-tab/preferences-tab.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SavedSalonsTabComponent } from './components/saved-salons-tab/saved-salons-tab.component';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent,
    BookingsTabComponent,
    SavedSalonsTabComponent,
    PreferencesTabComponent,
    LoyaltyCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProfilePageComponent }]),
  ],
})
export class ProfileModule {}