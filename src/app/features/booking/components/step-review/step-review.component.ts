import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookingPayload } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-step-review',
  templateUrl: './step-review.component.html',
  styleUrls:  ['./step-review.component.scss'],
})
export class StepReviewComponent {
  @Input() payload!: Partial<BookingPayload>;

  constructor(public svc: BookingService, private router: Router) {}

  editSalon():   void { this.router.navigate(['/explore']); }
  editService(): void { this.router.navigate(['/salon', this.payload.salonId]); }
  editStylist(): void { this.router.navigate(['/salon', this.payload.salonId]); }
  editSlot():    void { this.router.navigate(['/salon', this.payload.salonId]); }
}