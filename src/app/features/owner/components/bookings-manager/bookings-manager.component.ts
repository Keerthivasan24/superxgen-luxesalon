// bookings-manager.component.ts
import { Component } from '@angular/core';
import { OwnerDataService } from '../../services/owner-data.service';
import { OwnerBooking }     from '../../models/owner.model';

@Component({
  selector: 'app-bookings-manager',
  templateUrl: './bookings-manager.component.html',
  styleUrls: ['./bookings-manager.component.scss'],
})
export class BookingsManagerComponent {
  filters      = ['all', 'upcoming', 'completed', 'cancelled'] as const;
  activeFilter: string = 'all';

  constructor(public ownerData: OwnerDataService) {}

  getFiltered(bookings: OwnerBooking[]): OwnerBooking[] {
    if (this.activeFilter === 'all') return bookings;
    return bookings.filter(b => b.status === this.activeFilter);
  }
}