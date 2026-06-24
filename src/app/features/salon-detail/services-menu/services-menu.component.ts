import { Component, Input } from '@angular/core';
import { SalonDetail, ServiceItem } from '../models/salon-detail.model';
import { SalonDetailService } from '../services/salon-detail.service';

@Component({
  selector: 'app-services-menu',
  templateUrl: './services-menu.component.html',
  styleUrls:  ['./services-menu.component.scss'],
})
export class ServicesMenuComponent {
  @Input() salon!: SalonDetail;
  activeTab = 'hair';

  constructor(public svc: SalonDetailService) {}

  get activeServices(): ServiceItem[] {
    return this.salon.serviceCategories
      .find(c => c.id === this.activeTab)?.services ?? [];
  }

  select(service: ServiceItem): void {
    const current = this.svc.booking.service;
    this.svc.selectService(current?.id === service.id ? null : service);
  }

  isSelected(service: ServiceItem): boolean {
    return this.svc.booking.service?.id === service.id;
  }

  formatDuration(mins: number): string {
    return mins >= 60
      ? `${Math.floor(mins / 60)}h ${mins % 60 ? (mins % 60) + 'm' : ''}`.trim()
      : `${mins}m`;
  }
}