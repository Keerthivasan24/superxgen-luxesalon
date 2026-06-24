// analytics.component.ts
import { Component } from '@angular/core';
import { OwnerDataService } from '../../services/owner-data.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
  periods      = ['7 days', '30 days', '3 months', 'Year'];
  activePeriod = '7 days';

  constructor(public ownerData: OwnerDataService) {}

  kpis = [
    { icon: '₹', label: 'Total revenue',    value: '₹1,24,500', change: '+18% vs last month', up: true  },
    { icon: '◷', label: 'Total bookings',   value: '142',        change: '+12% vs last month', up: true  },
    { icon: '★', label: 'Avg rating',       value: '4.9',        change: '+0.1 vs last month', up: true  },
    { icon: '◉', label: 'Repeat clients',   value: '68%',        change: '-2% vs last month',  up: false },
  ];

  revenueData = [
    { day: 'Mon', rev: 18000 },
    { day: 'Tue', rev: 24500 },
    { day: 'Wed', rev: 15000 },
    { day: 'Thu', rev: 31000 },
    { day: 'Fri', rev: 42000 },
    { day: 'Sat', rev: 38500 },
    { day: 'Sun', rev: 22000 },
  ];

  get maxRev(): number { return Math.max(...this.revenueData.map(d => d.rev)); }

  topServices = [
    { name: 'Full Head Balayage',  count: 38 },
    { name: 'Bridal Package',      count: 24 },
    { name: 'Keratin Treatment',   count: 21 },
    { name: 'Luxury Facial',       count: 19 },
    { name: 'Signature Cut',       count: 17 },
  ];

  ratingBars = [
    { stars: 5, pct: 82 },
    { stars: 4, pct: 12 },
    { stars: 3, pct: 4  },
    { stars: 2, pct: 1  },
    { stars: 1, pct: 1  },
  ];
}