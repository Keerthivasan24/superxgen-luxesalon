import { Component } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { BookingStatus } from '../../models/user-profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings-tab',
  templateUrl: './bookings-tab.component.html',
  styleUrls:  ['./bookings-tab.component.scss'],
})
export class BookingsTabComponent {

  filters: { label: string; value: BookingStatus | 'all' }[] = [
    { label: 'All',       value: 'all'       },
    { label: 'Upcoming',  value: 'upcoming'  },
    { label: 'Completed', value: 'completed' },
    { label: 'Cancelled', value: 'cancelled' },
  ];

  constructor(public svc: UserProfileService, private router: Router) {}

  rebook(salonId: number): void {
    this.router.navigate(['/salon', salonId]);
  }

  starArray(n: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
}