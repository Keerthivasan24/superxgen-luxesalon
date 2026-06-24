import { Component, Input } from '@angular/core';
import { SalonDetail, StylistModel } from '../models/salon-detail.model';
import { SalonDetailService } from '../services/salon-detail.service';


@Component({
  selector: 'app-stylists-roster',
  templateUrl: './stylists-roster.component.html',
  styleUrls:  ['./stylists-roster.component.scss'],
})
export class StylistsRosterComponent {
  @Input() salon!: SalonDetail;

  avatarColors = ['#1a1206','#0d1a2e','#1a0d2e','#0d1a0d','#1a1a0d'];

  constructor(public svc: SalonDetailService) {}

  select(stylist: StylistModel): void {
    const current = this.svc.booking.stylist;
    this.svc.selectStylist(current?.id === stylist.id ? null : stylist);
  }

  isSelected(stylist: StylistModel): boolean {
    return this.svc.booking.stylist?.id === stylist.id;
  }

  getColor(i: number): string {
    return this.avatarColors[i % this.avatarColors.length];
  }
}