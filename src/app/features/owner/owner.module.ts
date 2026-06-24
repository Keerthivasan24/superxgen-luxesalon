import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { SharedModule }      from '../../shared/shared.module';
import { OwnerRoutingModule } from './owner-routing.module';

// Layout
import { OwnerLayoutComponent }     from './components/owner-layout/owner-layout.component';

// Pages
import { DashboardComponent }       from './components/dashboard/dashboard.component';
import { RegisterSalonComponent }   from './components/register-salon/register-salon.component';
import { ManageProfileComponent }   from './components/manage-profile/manage-profile.component';
import { ServicesManagerComponent } from './components/services-manager/services-manager.component';
import { BookingsManagerComponent } from './components/bookings-manager/bookings-manager.component';
import { StylistsManagerComponent } from './components/stylists-manager/stylists-manager.component';
import { AnalyticsComponent }       from './components/analytics/analytics.component';
import { StepBasicInfoComponent } from './components/step-basic-info/step-basic-info.component';
import { StepHoursComponent } from './components/step-hours/step-hours.component';
import { StepPhotosComponent } from './components/step-photos/step-photos.component';
import { StepReviewComponent } from './components/step-review/step-review.component';
import { StepServicesComponent } from './components/step-services/step-services.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

// Wizard steps


@NgModule({
  declarations: [
    // Layout
    OwnerLayoutComponent,
    // Pages
    DashboardComponent,
    RegisterSalonComponent,
    ManageProfileComponent,
    ServicesManagerComponent,
    BookingsManagerComponent,
    StylistsManagerComponent,
    AnalyticsComponent,
    // Wizard steps
    StepBasicInfoComponent,
    StepServicesComponent,
    StepPhotosComponent,
    StepHoursComponent,
    StepReviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    OwnerRoutingModule,
    MatSelectModule,
    MatOptionModule,
  ],
})
export class OwnerModule {}