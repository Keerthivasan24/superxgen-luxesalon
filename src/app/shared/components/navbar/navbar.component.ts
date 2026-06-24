import {
  Component,
  HostListener,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled     = false;
  menuOpen     = false;
  showUserMenu = false;

  constructor(
    public  auth:   AuthService,
    public  router: Router,
    private cdr:    ChangeDetectorRef,
    private zone:   NgZone,
  ) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onProfileClick(): void {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/auth']);
      return;
    }
    // Run toggle OUTSIDE Angular zone to prevent
    // document:click from firing on the same tick
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.zone.run(() => {
          this.showUserMenu = !this.showUserMenu;
          this.cdr.detectChanges();
        });
      }, 0);
    });
  }

  closeUserMenu(): void {
    this.showUserMenu = false;
    this.cdr.detectChanges();
  }

  onBookNow(): void {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/book']);
    } else {
      this.router.navigate(['/auth'], {
        queryParams: { redirect: '/book' },
      });
    }
  }

  logout(): void {
    this.showUserMenu = false;
    this.auth.logout();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.showUserMenu) return;
    const target = e.target as HTMLElement;
    const inside = target.closest('.profile-wrapper');
    if (!inside) {
      this.showUserMenu = false;
      this.cdr.detectChanges();
    }
  }
}