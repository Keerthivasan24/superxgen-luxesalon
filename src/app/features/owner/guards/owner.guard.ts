import { Injectable }       from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }      from '../../auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class OwnerGuard implements CanActivate {

  constructor(
    private auth:   AuthService,
    private router: Router,
  ) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedIn && this.auth.isOwner) return true;

    // Not logged in → go to auth with owner mode preset
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/auth'], {
        queryParams: { redirect: state.url, mode: 'login', role: 'owner' }
      });
      return false;
    }

    // Logged in as customer → redirect home
    this.router.navigate(['/']);
    return false;
  }
}