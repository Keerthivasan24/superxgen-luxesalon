import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {
  AuthUser, LoginPayload, RegisterPayload,
  MOCK_USER, MOCK_OWNER,
} from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _user$    = new BehaviorSubject<AuthUser | null>(null);
  private _loading$ = new BehaviorSubject<boolean>(false);
  private _error$   = new BehaviorSubject<string | null>(null);

  user$    = this._user$.asObservable();
  loading$ = this._loading$.asObservable();
  error$   = this._error$.asObservable();

  constructor(private router: Router) {
    const saved = localStorage.getItem('luxe_user');
    if (saved) {
      try { this._user$.next(JSON.parse(saved)); }
      catch { localStorage.removeItem('luxe_user'); }
    }
  }

  get user(): AuthUser | null   { return this._user$.value; }
  get isLoggedIn(): boolean     { return !!this._user$.value; }
  get isOwner(): boolean        { return this._user$.value?.role === 'owner'; }
  get isUser(): boolean         { return this._user$.value?.role === 'user'; }

  // ── Login (role-aware) ────────────────────────────────
  login(payload: LoginPayload): void {
    this._loading$.next(true);
    this._error$.next(null);

    setTimeout(() => {
      if (payload.email && payload.password.length >= 6) {
        const base = payload.role === 'owner' ? MOCK_OWNER : MOCK_USER;
        const user: AuthUser = {
          ...base,
          email:  payload.email,
          name:   payload.email.split('@')[0]
                    .replace(/[._]/g, ' ')
                    .replace(/\b\w/g, c => c.toUpperCase()),
          avatar: payload.email[0].toUpperCase(),
          role:   payload.role,
        };
        this.setUser(user);
        // Route based on role
        this.router.navigateByUrl(payload.role === 'owner' ? '/owner/dashboard' : '/');
      } else {
        this._error$.next('Invalid email or password.');
      }
      this._loading$.next(false);
    }, 1200);
  }

  // ── Register (role-aware) ─────────────────────────────
  register(payload: RegisterPayload): void {
    this._loading$.next(true);
    this._error$.next(null);

    setTimeout(() => {
      if (payload.name && payload.email && payload.phone && payload.password.length >= 6) {
        const user: AuthUser = {
          id:           Date.now(),
          name:         payload.name,
          email:        payload.email,
          phone:        payload.phone,
          avatar:       payload.name[0].toUpperCase(),
          memberSince:  new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
          loyaltyTier:  'Bronze',
          loyaltyPoints: 0,
          totalBookings: 0,
          totalSpent:    0,
          role:         payload.role,
        };
        this.setUser(user);
        // Owners go register their salon first
        this.router.navigateByUrl(
          payload.role === 'owner' ? '/owner/register' : '/'
        );
      } else {
        this._error$.next('Please fill all fields correctly.');
      }
      this._loading$.next(false);
    }, 1400);
  }

  // ── Google OAuth (mock) ───────────────────────────────
  loginWithGoogle(role: 'user' | 'owner' = 'user'): void {
    this._loading$.next(true);
    setTimeout(() => {
      const base = role === 'owner' ? MOCK_OWNER : MOCK_USER;
      this.setUser({ ...base, role });
      this.router.navigateByUrl(role === 'owner' ? '/owner/dashboard' : '/');
      this._loading$.next(false);
    }, 1000);
  }

  // ── Logout ────────────────────────────────────────────
  logout(): void {
    this._user$.next(null);
    localStorage.removeItem('luxe_user');
    this.router.navigate(['/']);
  }

  // ── Helpers ───────────────────────────────────────────
  private setUser(user: AuthUser): void {
    this._user$.next(user);
    localStorage.setItem('luxe_user', JSON.stringify(user));
  }

  clearError(): void { this._error$.next(null); }

  updateProfile(patch: Partial<AuthUser>): void {
    if (!this._user$.value) return;
    this.setUser({ ...this._user$.value, ...patch });
  }
}