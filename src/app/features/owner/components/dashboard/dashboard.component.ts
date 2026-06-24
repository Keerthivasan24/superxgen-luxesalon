import { Component } from '@angular/core';
import { OwnerDataService } from '../../services/owner-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public ownerData: OwnerDataService) {}

  get todayBookings() {
    return this.ownerData['_bookings$'].value.filter((b: any) => b.date === 'Today');
  }
}