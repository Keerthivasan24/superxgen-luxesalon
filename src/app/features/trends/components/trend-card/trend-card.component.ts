import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Trend } from '../../models/trend.model';

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss'],
})
export class TrendCardComponent {
  @Input() trend!: Trend;
  @Input() featured = false;
  @Output() exploreSalons = new EventEmitter<Trend>();

  constructor(private router: Router) {}

  onMouseMove(e: MouseEvent, el: HTMLElement) {
    const r = el.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${cx * 8}deg) rotateX(${-cy * 8}deg) translateZ(6px)`;
    const shine = el.querySelector('.trend-shine') as HTMLElement;
    if (shine) shine.style.background =
      `radial-gradient(circle at ${(cx+.5)*100}% ${(cy+.5)*100}%, rgba(201,168,76,.11) 0%, transparent 65%)`;
  }

  onMouseLeave(el: HTMLElement) {
    el.style.transform = '';
    const shine = el.querySelector('.trend-shine') as HTMLElement;
    if (shine) shine.style.background = '';
  }

  goToExplore() {
    this.router.navigate(['/explore'], {
      queryParams: { service: this.trend.tags[0]?.label }
    });
  }

  get badgeClass(): string {
    const map: Record<string, string> = {
      TRENDING: 'badge-trending',
      VIRAL: 'badge-viral',
      NEW: 'badge-new',
      SEASONAL: 'badge-seasonal',
    };
    return map[this.trend.badge || ''] || '';
  }
}