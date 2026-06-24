import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent implements OnInit {
  stats = [
    { end: 340, suffix: '+', label: 'Luxury Salons', prefix: '' },
    { end: 4.9, suffix: '★', label: 'Average Rating', prefix: '' },
    { end: 60,  suffix: 's', label: 'Avg Booking Time', prefix: '' },
    { end: 18,  suffix: '',  label: 'Bangalore Areas', prefix: '' },
  ];

  displayed = this.stats.map(s => ({ value: '0', label: s.label }));
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.runCountUp();
          this.observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private runCountUp() {
    this.stats.forEach((stat, i) => {
      const duration = 1800;
      const steps = 60;
      const increment = stat.end / steps;
      let current = 0;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        current = Math.min(current + increment, stat.end);
        const val = Number.isInteger(stat.end) ? Math.round(current) : current.toFixed(1);
        this.displayed[i] = { value: `${stat.prefix}${val}${stat.suffix}`, label: stat.label };
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    });
  }
}