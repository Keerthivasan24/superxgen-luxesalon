import { Component } from '@angular/core';
import { ExploreService } from '../../services/explore.service';
import { Salon } from '../../models/salon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent {
  selectedSalon: Salon | null = null;

  constructor(public exploreService: ExploreService, private router: Router) {}

  getPinX(salon: Salon) {
    // Map lng 77.57 – 77.75 → 5% – 92%
    return ((salon.lng - 77.57) / (77.75 - 77.57)) * 87 + 5;
  }

  getPinY(salon: Salon) {
    // Map lat 12.89 – 13.04 → 90% – 8%
    return 90 - ((salon.lat - 12.89) / (13.04 - 12.89)) * 82;
  }

  select(salon: Salon) {
    this.selectedSalon = this.selectedSalon?.id === salon.id ? null : salon;
  }

  go() {
    if (this.selectedSalon) this.router.navigate(['/salon', this.selectedSalon.id]);
  }

  get priceStr() { return this.selectedSalon ? '₹'.repeat(this.selectedSalon.priceLevel) : ''; }
}