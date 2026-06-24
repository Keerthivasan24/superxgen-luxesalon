import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  SalonDetail, ServiceItem, StylistModel,
  TimeSlot, MOCK_SALON_DETAILS, generateSlots
} from '../models/salon-detail.model';

export interface BookingState {
  service:  ServiceItem  | null;
  stylist:  StylistModel | null;
  date:     string | null;
  time:     string | null;
  salonId:  number | null;
}

@Injectable({ providedIn: 'root' })
export class SalonDetailService {

  private _salon$   = new BehaviorSubject<SalonDetail | null>(null);
  private _booking$ = new BehaviorSubject<BookingState>({
    service: null, stylist: null, date: null, time: null, salonId: null
  });
  private _slots$   = new BehaviorSubject<TimeSlot[]>([]);
  private _savedIds = new Set<number>();

  salon$   = this._salon$.asObservable();
  booking$ = this._booking$.asObservable();
  slots$   = this._slots$.asObservable();

  // ── Load ────────────────────────────────────────────
// ✅ Fixed — looks up by id, falls back gracefully
loadSalon(id: number): void {
  const salon = MOCK_SALON_DETAILS[id] ?? MOCK_SALON_DETAILS[1];
  this._salon$.next(salon);
  this.loadSlots(0);
}

  get salon(): SalonDetail | null { return this._salon$.value; }
  get booking(): BookingState     { return this._booking$.value; }

  // ── Slots ───────────────────────────────────────────
  loadSlots(dateOffset: number): void {
    this._slots$.next(generateSlots(dateOffset));
  }

  // ── Booking state ────────────────────────────────────
  selectService(service: ServiceItem | null): void {
    this._booking$.next({ ...this._booking$.value, service });
  }

  selectStylist(stylist: StylistModel | null): void {
    this._booking$.next({ ...this._booking$.value, stylist });
  }

  selectDate(date: string): void {
    this._booking$.next({ ...this._booking$.value, date, time: null });
  }

  selectTime(time: string): void {
    this._booking$.next({ ...this._booking$.value, time });
  }

  clearBooking(): void {
    this._booking$.next({
      service: null, stylist: null, date: null, time: null, salonId: null
    });
  }

  get isBookingReady(): boolean {
    const b = this._booking$.value;
    return !!(b.service && b.time && b.date);
  }

  get totalPrice(): number {
    return this._booking$.value.service?.price ?? 0;
  }

  // ── Save / unsave ────────────────────────────────────
  toggleSave(id: number): void {
    this._savedIds.has(id) ? this._savedIds.delete(id) : this._savedIds.add(id);
  }

  isSaved(id: number): boolean {
    return this._savedIds.has(id);
  }

  // ── Helpers ──────────────────────────────────────────
  getPriceStr(level: number): string {
    return '₹'.repeat(level);
  }

  getTodayLabel(): string {
    return new Date().toLocaleDateString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'short'
    });
  }

  getDateStrip(): { label: string; sublabel: string; offset: number }[] {
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return {
        label:    i === 0 ? 'Today' : days[d.getDay()],
        sublabel: d.getDate().toString(),
        offset:   i,
      };
    });
  }
}