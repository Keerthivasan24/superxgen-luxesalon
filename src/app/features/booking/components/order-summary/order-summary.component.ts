import { Component, Input } from '@angular/core';
import { BookingPayload } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls:  ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  @Input() payload!: Partial<BookingPayload>;

  constructor(public svc: BookingService) {}
}