import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SalonRegistrationForm, OwnerService } from '../../models/owner.model';


@Component({
  selector: 'app-step-services',
  templateUrl: './step-services.component.html',
  styles: [`
    .services-list { display: flex; flex-direction: column; gap: 8px; }
    .service-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 14px; background: rgba(255,255,255,.02);
      border: 1px solid rgba(201,168,76,.1); border-radius: 8px;
    }
    .svc-name { font-size: 13px; color: var(--cream); display: block; }
    .svc-meta { font-size: 11px; color: var(--text-muted); }
    .svc-delete {
      background: none; border: none; color: #e74c7c; cursor: pointer;
      font-size: 14px; padding: 4px 8px;
    }
    .empty-svc { font-size: 13px; color: var(--text-muted); padding: 20px; text-align: center;
      border: 1px dashed rgba(201,168,76,.2); border-radius: 8px; }
    .add-service-block {
      border: 1px solid rgba(201,168,76,.12); border-radius: 10px; padding: 20px;
      display: flex; flex-direction: column; gap: 14px;
    }
    .add-title { font-size: 13px; color: var(--cream); font-weight: 500; }
    .btn-add-svc {
      background: rgba(201,168,76,.1); border: 1px solid rgba(201,168,76,.3);
      color: var(--gold); padding: 9px 18px; border-radius: 8px;
      font-size: 12px; font-family: var(--font-body); cursor: pointer;
      align-self: flex-start; transition: all .15s;
      &:hover { background: rgba(201,168,76,.18); }
    }
    .no-svc-alert {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px;
  background: rgba(231,76,124,.06);
  border: 1px solid rgba(231,76,124,.25);
  border-radius: 10px;
  animation: fadeIn .2s ease;
}
.alert-icon {
  width: 32px; height: 32px; flex-shrink: 0;
  border-radius: 50%;
  background: rgba(231,76,124,.15);
  border: 1px solid rgba(231,76,124,.4);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; color: #e74c7c;
}
.alert-text { font-size: 12px; color: #e74c7c; line-height: 1.5; }
.alert-text strong { display: block; font-size: 13px; margin-bottom: 2px; }
@keyframes fadeIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }
  `],
})
export class StepServicesComponent {
  @Input()  form!: SalonRegistrationForm;
  @Output() next  = new EventEmitter<void>();
  @Output() back  = new EventEmitter<void>();

  categories = ['Hair', 'Skin', 'Nails', 'Bridal', "Men's", 'Wellness', 'Spa'];

  newSvc: Partial<OwnerService> = { name: '', category: '', duration: 60, price:  null as any, description: '', available: true };
  showAlert = false;

addService(): void {
  if (!this.newSvc.name || !this.newSvc.category) return;
  if (this.newSvc.price === null || this.newSvc.price === undefined) return;
  this.form.services = [...this.form.services, { ...this.newSvc, id: Date.now() } as OwnerService];
  this.newSvc = { name: '', category: '', duration: 60, price: null as any, description: '', available: true };
  this.showAlert = false;
}

  removeService(i: number): void {
    this.form.services = this.form.services.filter((_, idx) => idx !== i);
  }

 onNext(): void {
  if (this.form.services.length === 0) { this.showAlert = true; return; }
  this.showAlert = false;
  this.next.emit();
}
}