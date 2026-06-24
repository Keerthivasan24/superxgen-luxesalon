import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  OwnerSalon, OwnerBooking, OwnerStylist, OwnerService,
  MOCK_OWNER_BOOKINGS, MOCK_OWNER_STYLISTS, MOCK_OWNER_SERVICES,
} from '../models/owner.model';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class OwnerDataService {

  private _salon$    = new BehaviorSubject<OwnerSalon | null>(null);
  private _bookings$ = new BehaviorSubject<OwnerBooking[]>(MOCK_OWNER_BOOKINGS);
  private _stylists$ = new BehaviorSubject<OwnerStylist[]>(MOCK_OWNER_STYLISTS);
  private _services$ = new BehaviorSubject<OwnerService[]>(MOCK_OWNER_SERVICES);

  salon$    = this._salon$.asObservable();
  bookings$ = this._bookings$.asObservable();
  stylists$ = this._stylists$.asObservable();
  services$ = this._services$.asObservable();

  constructor(private auth: AuthService) {
    // Load mock salon for logged-in owner
    if (auth.isOwner) this.loadMockSalon();
  }

  private loadMockSalon(): void {
    this._salon$.next({
      id: 1, name: 'Toni & Guy', area: 'Koramangala',
      address: '5th Block, 80 Feet Road', phone: '+91 98765 43210',
      email: 'koramangala@toniandguy.in',
      description: 'Bangalore\'s flagship luxury hair studio.',
      priceLevel: 4, lat: 12.9352, lng: 77.6245,
      parking: true, wifi: true, status: 'live',
      ownerId: this.auth.user?.id ?? 1,
      createdAt: '2024-01-15',
    });
  }

  get salon(): OwnerSalon | null { return this._salon$.value; }

  // ── Dashboard stats ──────────────────────────────────
  get todayBookings():    number { return this._bookings$.value.filter(b => b.date === 'Today').length; }
  get todayRevenue():     number { return this._bookings$.value.filter(b => b.date === 'Today' && b.status === 'upcoming').reduce((s, b) => s + b.amount, 0); }
  get monthRevenue():     number { return this._bookings$.value.filter(b => b.status === 'completed').reduce((s, b) => s + b.amount, 0) + this.todayRevenue; }
  get avgRating():        number { return 4.9; }

  // ── Bookings ─────────────────────────────────────────
  updateBookingStatus(id: string, status: OwnerBooking['status']): void {
    this._bookings$.next(
      this._bookings$.value.map(b => b.id === id ? { ...b, status } : b)
    );
  }

  // ── Stylists ─────────────────────────────────────────
  addStylist(s: OwnerStylist): void {
    this._stylists$.next([...this._stylists$.value, { ...s, id: Date.now() }]);
  }

  updateStylist(id: number, patch: Partial<OwnerStylist>): void {
    this._stylists$.next(this._stylists$.value.map(s => s.id === id ? { ...s, ...patch } : s));
  }

  deleteStylist(id: number): void {
    this._stylists$.next(this._stylists$.value.filter(s => s.id !== id));
  }

  // ── Services ─────────────────────────────────────────
  addService(svc: OwnerService): void {
    this._services$.next([...this._services$.value, { ...svc, id: Date.now() }]);
  }

  updateService(id: number, patch: Partial<OwnerService>): void {
    this._services$.next(this._services$.value.map(s => s.id === id ? { ...s, ...patch } : s));
  }

  deleteService(id: number): void {
    this._services$.next(this._services$.value.filter(s => s.id !== id));
  }

  toggleServiceAvailability(id: number): void {
    this._services$.next(
      this._services$.value.map(s => s.id === id ? { ...s, available: !s.available } : s)
    );
  }

  // ── Profile update ────────────────────────────────────
  updateSalonProfile(patch: Partial<OwnerSalon>): void {
    if (!this._salon$.value) return;
    this._salon$.next({ ...this._salon$.value, ...patch });
  }
}