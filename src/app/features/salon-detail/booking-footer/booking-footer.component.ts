import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SalonDetailService } from '../services/salon-detail.service';


@Component({
  selector: 'app-booking-footer',
  templateUrl: './booking-footer.component.html',
  styleUrls:  ['./booking-footer.component.scss'],
})
export class BookingFooterComponent {
  @Input() visible = false;

  constructor(
    public svc:    SalonDetailService,
    private router: Router,
  ) {}

  confirm(): void {
    if (!this.svc.isBookingReady) return;
    this.router.navigate(['/book'], {
      queryParams: {
        salonId:   this.svc.salon?.id,
        serviceId: this.svc.booking.service?.id,
        stylistId: this.svc.booking.stylist?.id,
        date:      this.svc.booking.date,
        time:      this.svc.booking.time,
      }
    });
  }
}