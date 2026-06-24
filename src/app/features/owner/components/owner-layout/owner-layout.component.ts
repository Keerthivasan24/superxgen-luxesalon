import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService }      from '../../../auth/services/auth.service';
import { OwnerDataService } from '../../services/owner-data.service';

const TITLE_MAP: Record<string, string> = {
  '/owner/dashboard':  'Dashboard',
  '/owner/profile':    'Manage Profile',
  '/owner/services':   'Services Manager',
  '/owner/bookings':   'Bookings Manager',
  '/owner/stylists':   'Stylists Manager',
  '/owner/analytics':  'Analytics',
  '/owner/register':   'Register Your Salon',
};

@Component({
  selector: 'app-owner-layout',
  templateUrl: './owner-layout.component.html',
  styleUrls: ['./owner-layout.component.scss'],
})
export class OwnerLayoutComponent {
  sidebarCollapsed = false;
  pageTitle        = 'Dashboard';

  constructor(
    public auth:      AuthService,
    public ownerData: OwnerDataService,
    private router:   Router,
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.pageTitle = TITLE_MAP[e.urlAfterRedirects] ?? 'Owner Portal';
      });
  }

  logout(): void { this.auth.logout(); }
}