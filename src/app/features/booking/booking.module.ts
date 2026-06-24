import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { StepConfirmComponent } from './components/step-confirm/step-confirm.component';
import { StepDetailsComponent } from './components/step-details/step-details.component';
import { StepIndicatorComponent } from './components/step-indicator/step-indicator.component';
import { StepReviewComponent } from './components/step-review/step-review.component';



@NgModule({
  declarations: [
    BookingPageComponent,
    StepIndicatorComponent,
    StepReviewComponent,
    StepDetailsComponent,
    StepConfirmComponent,
    OrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: BookingPageComponent }]),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
})
export class BookingModule {}