import {
  Component, Input, OnInit, OnDestroy,
  ElementRef, ViewChild, AfterViewInit, NgZone
} from '@angular/core';

import { gsap } from 'gsap';
import { SalonDetail } from '../models/salon-detail.model';
import { SalonDetailService } from '../services/salon-detail.service';

@Component({
  selector: 'app-gallery-hero',
  templateUrl: './gallery-hero.component.html',
  styleUrls:  ['./gallery-hero.component.scss'],
})
export class GalleryHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() salon!: SalonDetail;
  @ViewChild('heroInner') heroInner!: ElementRef<HTMLDivElement>;

  activeThumb = 0;
  saved = false;

  // placeholder gradient palettes per image index
  gradients = [
    'linear-gradient(135deg,#1a1206 0%,#2a1a08 50%,#0a0a0f 100%)',
    'linear-gradient(135deg,#0d1a2e 0%,#1a2a3e 50%,#0a0a0f 100%)',
    'linear-gradient(135deg,#1a0d2e 0%,#2a1a3e 50%,#0a0a0f 100%)',
    'linear-gradient(135deg,#0d1a0d 0%,#1a2a1a 50%,#0a0a0f 100%)',
    'linear-gradient(135deg,#1a1a0d 0%,#2a2a1a 50%,#0a0a0f 100%)',
  ];

  letters = ['T','G','L','N','E'];

  private scrollHandler!: () => void;

  constructor(
    public  svc:    SalonDetailService,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.saved = this.svc.isSaved(this.salon.id);
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.scrollHandler = () => {
        const el = this.heroInner?.nativeElement;
        if (el) {
          const y = window.scrollY * 0.35;
          el.style.transform = `translateY(${y}px)`;
        }
      };
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
    });

    // entrance animation
    gsap.from('.hero-content-inner', {
      y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2
    });
  }

  selectThumb(i: number): void { this.activeThumb = i; }

  toggleSave(): void {
    this.svc.toggleSave(this.salon.id);
    this.saved = !this.saved;
  }

  get priceStr(): string { return '₹'.repeat(this.salon.priceLevel); }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}