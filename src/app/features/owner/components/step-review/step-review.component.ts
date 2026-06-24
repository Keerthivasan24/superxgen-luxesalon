// step-review.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SalonRegistrationForm } from '../../models/owner.model';

@Component({
  selector: 'app-step-review',
  template: `
  <div class="step-card">
    <div>
      <h2 class="step-title">Review & Submit</h2>
      <p class="step-sub">Confirm your salon details before publishing</p>
    </div>

    <!-- ── Section 1: Basic Info ── -->
    <div class="review-section">
      <div class="review-section-header">
        <span class="section-num">1</span>
        <span class="section-title">Basic Information</span>
      </div>
      <div class="review-grid">
        <div class="review-field">
          <span class="rf-label">Salon Name</span>
          <span class="rf-value">{{ form.salonName || '—' }}</span>
        </div>
        <div class="review-field">
          <span class="rf-label">Area</span>
          <span class="rf-value">{{ form.area || '—' }}</span>
        </div>
        <div class="review-field">
          <span class="rf-label">Price Range</span>
          <span class="rf-value gold">{{ priceLabel }}</span>
        </div>
        <div class="review-field">
          <span class="rf-label">Phone</span>
          <span class="rf-value">{{ form.phone || '—' }}</span>
        </div>
        <div class="review-field span-2">
          <span class="rf-label">Address</span>
          <span class="rf-value">{{ form.address || '—' }}</span>
        </div>
        <div class="review-field span-2">
          <span class="rf-label">Email</span>
          <span class="rf-value">{{ form.email || '—' }}</span>
        </div>
        <div class="review-field span-2">
          <span class="rf-label">Description</span>
          <span class="rf-value muted">{{ form.description || '—' }}</span>
        </div>
      </div>
    </div>

    <!-- ── Section 2: Services ── -->
    <div class="review-section">
      <div class="review-section-header">
        <span class="section-num">2</span>
        <span class="section-title">Services
          <span class="section-badge">{{ form.services.length }}</span>
        </span>
      </div>
      <div class="svc-review-list">
        <div class="svc-review-row" *ngFor="let s of form.services">
          <div class="svc-dot"></div>
          <div class="svc-review-info">
            <span class="svc-review-name">{{ s.name }}</span>
            <span class="svc-review-meta">{{ s.category }} · {{ s.duration }} min · ₹{{ s.price }}</span>
          </div>
        </div>
        <p class="rf-value muted" *ngIf="form.services.length === 0">No services added.</p>
      </div>
    </div>

    <!-- ── Section 3: Photos ── -->
    <div class="review-section">
      <div class="review-section-header">
        <span class="section-num">3</span>
        <span class="section-title">Photos
          <span class="section-badge">{{ form.photos.length }}</span>
        </span>
      </div>
      <p class="rf-value muted" style="padding: 0 0 4px 0">
        {{ form.photos.length > 0 ? form.photos.length + ' photo(s) uploaded' : 'No photos added (you can add later).' }}
      </p>
    </div>

    <!-- ── Section 4: Hours ── -->
    <div class="review-section">
      <div class="review-section-header">
        <span class="section-num">4</span>
        <span class="section-title">Opening Hours
          <span class="section-badge">{{ openDays }} days open</span>
        </span>
      </div>
      <div class="hours-review-list">
        <div class="hour-review-row" *ngFor="let h of form.hours">
          <span class="hday">{{ h.day }}</span>
          <span class="htime closed" *ngIf="h.closed">Closed</span>
          <span class="htime" *ngIf="!h.closed">{{ h.open }} – {{ h.close }}</span>
        </div>
      </div>
    </div>

    <!-- ── Publish note ── -->
    <div class="review-note">
      <span class="note-icon">◈</span>
      After submission, your salon will be reviewed within 24 hours and published on LuxeSalon.
    </div>

    <div class="step-actions">
      <button class="btn-back" (click)="back.emit()">← Back</button>
      <button class="btn-submit" (click)="submit.emit()">Submit & Publish →</button>
    </div>
  </div>
  `,
  styles: [`
    .review-section {
      border: 1px solid rgba(201,168,76,.1);
      border-radius: 10px;
      overflow: hidden;
    }
    .review-section-header {
      display: flex; align-items: center; gap: 10px;
      padding: 12px 16px;
      background: rgba(201,168,76,.04);
      border-bottom: 1px solid rgba(201,168,76,.08);
    }
    .section-num {
      width: 22px; height: 22px; border-radius: 50%;
      background: rgba(201,168,76,.15); border: 1px solid rgba(201,168,76,.35);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; color: var(--gold); flex-shrink: 0;
    }
    .section-title {
      font-size: 13px; font-weight: 500; color: var(--cream);
      display: flex; align-items: center; gap: 8px;
    }
    .section-badge {
      font-size: 10px; color: var(--gold);
      background: rgba(201,168,76,.12); border: 1px solid rgba(201,168,76,.2);
      padding: 1px 8px; border-radius: 20px; letter-spacing: .04em;
    }
    .review-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 0; padding: 4px 0;
    }
    .review-field {
      display: flex; flex-direction: column; gap: 3px;
      padding: 12px 16px;
      border-bottom: 1px solid rgba(201,168,76,.05);
    }
    .review-field.span-2 { grid-column: span 2; }
    .rf-label {
      font-size: 10px; text-transform: uppercase; letter-spacing: .08em;
      color: var(--text-muted);
    }
    .rf-value { font-size: 13px; color: var(--cream); line-height: 1.5; }
    .rf-value.gold { color: var(--gold); }
    .rf-value.muted { color: var(--text-secondary); }

    /* Services */
    .svc-review-list { display: flex; flex-direction: column; padding: 8px 16px 12px; gap: 8px; }
    .svc-review-row { display: flex; align-items: flex-start; gap: 10px; }
    .svc-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--gold); opacity: .5; margin-top: 5px; flex-shrink: 0;
    }
    .svc-review-name { font-size: 13px; color: var(--cream); display: block; }
    .svc-review-meta { font-size: 11px; color: var(--text-muted); }

    /* Hours */
    .hours-review-list {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 0; padding: 4px 0;
    }
    .hour-review-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 9px 16px;
      border-bottom: 1px solid rgba(201,168,76,.04);
    }
    .hday { font-size: 12px; color: var(--cream); min-width: 90px; }
    .htime { font-size: 12px; color: var(--text-secondary); }
    .htime.closed { color: #e74c7c; font-size: 11px; }

    /* Note */
    .review-note {
      display: flex; align-items: flex-start; gap: 10px; padding: 14px 16px;
      background: rgba(16,185,129,.06); border: 1px solid rgba(16,185,129,.2);
      border-radius: 8px; font-size: 12px; color: var(--text-secondary); line-height: 1.5;
    }
    .note-icon { color: #10b981; flex-shrink: 0; }
  `],
})
export class StepReviewComponent {
  @Input()  form!: SalonRegistrationForm;
  @Output() submit = new EventEmitter<void>();
  @Output() back   = new EventEmitter<void>();

  get openDays(): number {
    return this.form.hours.filter(h => !h.closed).length;
  }

  get priceLabel(): string {
    const map: Record<number, string> = {
      1: '₹ Budget', 2: '₹₹ Moderate', 3: '₹₹₹ Premium', 4: '₹₹₹₹ Luxury'
    };
    return map[this.form.priceLevel] ?? '—';
  }
}