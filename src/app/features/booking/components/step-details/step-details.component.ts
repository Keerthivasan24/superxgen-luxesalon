import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-step-details',
  templateUrl: './step-details.component.html',
  styleUrls:  ['./step-details.component.scss'],
})
export class StepDetailsComponent {
  promoApplied = false;
  promoError   = false;

  constructor(public svc: BookingService) {}

  get f() { return this.svc.detailsForm.controls; }

  applyPromo(): void {
    const code = this.f['promo'].value?.trim().toUpperCase();
    this.promoApplied = code === 'LUXE10';
    this.promoError   = !this.promoApplied;
  }

  submit(): void {
    this.svc.detailsForm.markAllAsTouched();
    if (this.svc.detailsForm.valid) this.svc.next();
  }
}