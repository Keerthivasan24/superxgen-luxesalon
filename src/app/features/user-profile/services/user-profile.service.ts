import { Injectable }    from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService }    from '../../auth/services/auth.service';
import {
  PastBooking, SavedSalon, StylePreference,
  ProfileTab, BookingStatus,
  MOCK_BOOKINGS, MOCK_SAVED_SALONS, MOCK_PREFERENCES,
  LOYALTY_TIERS, LoyaltyTier,
} from '../models/user-profile.model';

@Injectable({ providedIn: 'root' })
export class UserProfileService {

  private _bookings$      = new BehaviorSubject<PastBooking[]>(MOCK_BOOKINGS);
  private _saved$         = new BehaviorSubject<SavedSalon[]>(MOCK_SAVED_SALONS);
  private _prefs$         = new BehaviorSubject<StylePreference[]>(MOCK_PREFERENCES);
  private _activeTab$     = new BehaviorSubject<ProfileTab>('bookings');
  private _bookingFilter$ = new BehaviorSubject<BookingStatus | 'all'>('all');

  saved$         = this._saved$.asObservable();
  prefs$         = this._prefs$.asObservable();
  activeTab$     = this._activeTab$.asObservable();
  bookingFilter$ = this._bookingFilter$.asObservable();

  constructor(private authService: AuthService) {}

  // ── Read user from AuthService (live, not mock) ───────
  get user() {
    return this.authService.user;
  }

  // user$ as observable — maps from auth
  get user$() {
    return this.authService.user$;
  }

  // ── Tab ───────────────────────────────────────────────
  setTab(tab: ProfileTab): void { this._activeTab$.next(tab); }
  get activeTab() { return this._activeTab$.value; }

  // ── Bookings ──────────────────────────────────────────
  get filteredBookings(): PastBooking[] {
    const f = this._bookingFilter$.value;
    return f === 'all'
      ? this._bookings$.value
      : this._bookings$.value.filter(b => b.status === f);
  }

  setBookingFilter(f: BookingStatus | 'all'): void {
    this._bookingFilter$.next(f);
  }

  get bookingFilter() { return this._bookingFilter$.value; }

  rateBooking(id: string, rating: number): void {
    this._bookings$.next(
      this._bookings$.value.map(b => b.id === id ? { ...b, rating } : b)
    );
  }

  // ── Saved salons ──────────────────────────────────────
  unsaveSalon(id: number): void {
    this._saved$.next(this._saved$.value.filter(s => s.id !== id));
  }

  // ── Preferences ───────────────────────────────────────
  togglePref(id: string): void {
    this._prefs$.next(
      this._prefs$.value.map(p =>
        p.id === id ? { ...p, selected: !p.selected } : p
      )
    );
  }

  // ── Loyalty ───────────────────────────────────────────
  get tierConfig() {
    const tier = (this.authService.user?.loyaltyTier ?? 'Bronze') as LoyaltyTier;
    return LOYALTY_TIERS[tier];
  }

  get loyaltyProgress(): number {
    const cfg    = this.tierConfig;
    const points = this.authService.user?.loyaltyPoints ?? 0;
    const range  = cfg.maxPoints - cfg.minPoints;
    const earned = points - cfg.minPoints;
    return Math.min(Math.round((earned / range) * 100), 100);
  }

  get nextTier(): string {
    const tiers = ['Bronze','Silver','Gold','Platinum'] as const;
    const tier  = (this.authService.user?.loyaltyTier ?? 'Bronze') as LoyaltyTier;
    const idx   = tiers.indexOf(tier);
    return idx < tiers.length - 1 ? tiers[idx + 1] : 'Platinum';
  }

  get pointsToNextTier(): number {
    return Math.max(
      0,
      this.tierConfig.maxPoints - (this.authService.user?.loyaltyPoints ?? 0)
    );
  }

  // ── Profile edit (writes back to AuthService) ─────────
  updateProfile(patch: Partial<any>): void {
    this.authService.updateProfile(patch);
  }
}