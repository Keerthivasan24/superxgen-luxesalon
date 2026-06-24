import { Component, Input } from '@angular/core';
import { BookingStep } from '../../models/booking.model';

@Component({
  selector: 'app-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls:  ['./step-indicator.component.scss'],
})
export class StepIndicatorComponent {
  @Input() currentStep: BookingStep = 1;

  steps = [
    { num: 1, label: 'Review'      },
    { num: 2, label: 'Your details' },
    { num: 3, label: 'Confirm'     },
  ];

  isComplete(num: number): boolean { return this.currentStep > num; }
  isActive(num:   number): boolean { return this.currentStep === num; }
}