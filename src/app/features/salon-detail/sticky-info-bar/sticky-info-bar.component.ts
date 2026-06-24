import { Component, Input } from '@angular/core';
import { SalonDetail } from '../models/salon-detail.model';
import { SalonDetailService } from '../services/salon-detail.service';

@Component({
  selector: 'app-sticky-info-bar',
  templateUrl: './sticky-info-bar.component.html',
  styleUrls:  ['./sticky-info-bar.component.scss'],
})
export class StickyInfoBarComponent {
  @Input() salon!: SalonDetail;
  @Input() visible = false;

  constructor(public svc: SalonDetailService) {}

  get priceStr(): string { return '₹'.repeat(this.salon.priceLevel); }

  scrollToSlots(): void {
    document.querySelector('app-slot-picker')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}