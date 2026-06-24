import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  BookingStep, BookingPayload, BookingConfirmation,
  BookingQueryParams, TAX_RATE, MOCK_SALONS_MINI
} from '../models/booking.model';
import { MOCK_SALON_DETAIL } from '../../salon-detail/models/salon-detail.model';

@Injectable({ providedIn: 'root' })
export class BookingService {

  private _step$      = new BehaviorSubject<BookingStep>(1);
  private _payload$   = new BehaviorSubject<Partial<BookingPayload>>({});
  private _confirm$   = new BehaviorSubject<BookingConfirmation | null>(null);
  private _submitting = new BehaviorSubject<boolean>(false);

  step$      = this._step$.asObservable();
  payload$   = this._payload$.asObservable();
  confirm$   = this._confirm$.asObservable();
  submitting$ = this._submitting.asObservable();

  detailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      name:        ['', [Validators.required, Validators.minLength(2)]],
      phone:       ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email:       ['', [Validators.required, Validators.email]],
      notes:       [''],
      promo:       [''],
      agreePolicy: [false, Validators.requiredTrue],
      payAtSalon:  [true],
    });
  }

  // ── Step navigation ──────────────────────────────────
  get step(): BookingStep  { return this._step$.value; }
  get payload(): Partial<BookingPayload> { return this._payload$.value; }

  goTo(step: BookingStep): void { this._step$.next(step); }

  next(): void {
    const s = this._step$.value;
    if (s < 3) this._step$.next((s + 1) as BookingStep);
  }

  back(): void {
    const s = this._step$.value;
    if (s > 1) this._step$.next((s - 1) as BookingStep);
  }

  // ── Hydrate from query params ────────────────────────
  hydrateFromParams(params: BookingQueryParams): void {
    const salon     = MOCK_SALONS_MINI[Number(params.salonId) || 1];
    const detail    = MOCK_SALON_DETAIL;
    const allSvcs   = detail.serviceCategories.flatMap(c => c.services);
    const service   = allSvcs.find(s => s.id === Number(params.serviceId)) ?? allSvcs[0];
    const stylist   = detail.stylists.find(s => s.id === Number(params.stylistId)) ?? null;

    const tax   = Math.round(service.price * TAX_RATE);
    const total = service.price + tax;

    this._payload$.next({
      salonId:         Number(params.salonId) || 1,
      salonName:       salon?.name ?? 'Toni & Guy',
      serviceId:       service.id,
      serviceName:     service.name,
      servicePrice:    service.price,
      serviceDuration: service.duration,
      stylistId:       stylist?.id ?? null,
      stylistName:     stylist?.name ?? null,
      date:            params.date ?? 'Today',
      time:            params.time ?? '10:00',
      tax,
      total,
    });
  }

  // ── Submit ───────────────────────────────────────────
  submit(): void {
    if (!this.detailsForm.valid) return;
    this._submitting.next(true);

    setTimeout(() => {
      const p = this._payload$.value;
      const confirmation: BookingConfirmation = {
        bookingId:   'LXB' + Math.random().toString(36).slice(2,8).toUpperCase(),
        salonName:   p.salonName!,
        serviceName: p.serviceName!,
        date:        p.date!,
        time:        p.time!,
        stylist:     p.stylistName ?? null,
        total:       p.total!,
      };
      this._confirm$.next(confirmation);
      this._submitting.next(false);
      this._step$.next(3);
    }, 1600);
  }

  // ── Helpers ──────────────────────────────────────────
  formatDuration(mins: number): string {
    return mins >= 60
      ? `${Math.floor(mins / 60)}h ${mins % 60 ? (mins % 60) + 'm' : ''}`.trim()
      : `${mins}m`;
  }

  reset(): void {
    this._step$.next(1);
    this._payload$.next({});
    this._confirm$.next(null);
    this.detailsForm.reset({ payAtSalon: true, agreePolicy: false });
  }
}