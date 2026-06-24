// step-hours.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SalonRegistrationForm } from '../../models/owner.model';


@Component({
  selector: 'app-step-hours',
  template: `
  <div class="step-card">
    <div>
      <h2 class="step-title">Opening Hours</h2>
      <p class="step-sub">Set your daily opening and closing times</p>
    </div>

    <div class="hours-list">
      <div class="hour-row" *ngFor="let h of form.hours">
        <div class="day-name">{{ h.day }}</div>
        <label class="closed-toggle">
          <input type="checkbox" [(ngModel)]="h.closed">
          <span>Closed</span>
        </label>
        <ng-container *ngIf="!h.closed">
          <input class="field-input time-input" type="time" [(ngModel)]="h.open">
          <span class="to-label">to</span>
          <input class="field-input time-input" type="time" [(ngModel)]="h.close">
        </ng-container>
        <span class="closed-tag" *ngIf="h.closed">Closed all day</span>
      </div>
    </div>

    <div class="step-actions">
      <button class="btn-back" (click)="back.emit()">← Back</button>
      <button class="btn-next" (click)="next.emit()">Next: Review →</button>
    </div>
  </div>
  `,
  styles: [`
    .hours-list { display: flex; flex-direction: column; gap: 10px; }
    .hour-row {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 16px; background: rgba(255,255,255,.02);
      border: 1px solid rgba(201,168,76,.08); border-radius: 8px;
    }
    .day-name { font-size: 13px; color: var(--cream); min-width: 100px; }
    .closed-toggle {
      display: flex; align-items: center; gap: 6px;
      font-size: 12px; color: var(--text-muted); cursor: pointer;
      input { accent-color: var(--gold); }
    }
    .time-input { width: 120px; padding: 6px 10px; }
    .to-label { font-size: 12px; color: var(--text-muted); }
    .closed-tag { font-size: 11px; color: #e74c7c; letter-spacing: .04em; }
  `],
})
export class StepHoursComponent {
  @Input()  form!: SalonRegistrationForm;
  @Output() next  = new EventEmitter<void>();
  @Output() back  = new EventEmitter<void>();
}