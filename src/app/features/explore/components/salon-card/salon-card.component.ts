import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Salon } from '../../models/salon.model';
import { ExploreService } from '../../services/explore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salon-card',
  templateUrl: './salon-card.component.html',
  styleUrls: ['./salon-card.component.scss'],
})
export class SalonCardComponent {
  @Input() salon!: Salon;
  @Input() layout: 'grid' | 'list' = 'grid';

  avatarColors = ['#1a1206','#0d1a2e','#1a0d2e','#0d1a0d','#1a1a0d'];

  constructor(private exploreService: ExploreService, private router: Router) {}

  get priceStr() { return '₹'.repeat(this.salon.priceLevel); }
  get avatarColor() { return this.avatarColors[this.salon.id % this.avatarColors.length]; }

  onMouseMove(e: MouseEvent, el: HTMLElement) {
    if (this.layout === 'list') return;
    const r = el.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${cx * 10}deg) rotateX(${-cy * 10}deg) translateZ(8px)`;
    const shine = el.querySelector('.shine') as HTMLElement;
    if (shine) shine.style.background =
      `radial-gradient(circle at ${(cx+.5)*100}% ${(cy+.5)*100}%, rgba(201,168,76,.13) 0%, transparent 65%)`;
  }

  onMouseLeave(el: HTMLElement) {
    el.style.transform = '';
    const shine = el.querySelector('.shine') as HTMLElement;
    if (shine) shine.style.background = '';
  }

  toggleSave(e: Event) {
    e.stopPropagation();
    this.exploreService.toggleSave(this.salon.id);
  }

  goToSalon() {
    this.router.navigate(['/salon', this.salon.id]);
  }

  goToBook(e: Event) {
    e.stopPropagation();
    this.router.navigate(['/book'], { queryParams: { salonId: this.salon.id } });
  }
}