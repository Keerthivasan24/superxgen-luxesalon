import { Component, Input } from '@angular/core';
import { SalonDetail } from '../models/salon-detail.model';


@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls:  ['./location-info.component.scss'],
})
export class LocationInfoComponent {
  @Input() salon!: SalonDetail;

  get todayDay(): string {
    return new Date().toLocaleDateString('en-IN', { weekday: 'long' });
  }

  get todayHours() {
    return this.salon.hours.find(h => h.day === this.todayDay);
  }

  openDirections(): void {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${this.salon.lat},${this.salon.lng}`;
    window.open(url, '_blank');
  }
}