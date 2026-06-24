// step-photos.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SalonRegistrationForm } from '../../models/owner.model';


@Component({
  selector: 'app-step-photos',
  template: `
  <div class="step-card">
    <div>
      <h2 class="step-title">Photos</h2>
      <p class="step-sub">Add photos to attract clients (optional, can add later)</p>
    </div>

    <div class="upload-zone" (click)="triggerUpload()" (dragover)="$event.preventDefault()" (drop)="onDrop($event)">
      <input #fileInput type="file" accept="image/*" multiple style="display:none" (change)="onFilePick($event)">
      <div class="upload-icon">◈</div>
      <p class="upload-text">Drop photos here or <span class="upload-link">browse</span></p>
      <p class="upload-sub">JPG, PNG up to 5MB each</p>
    </div>

    <div class="photo-grid" *ngIf="form.photos.length > 0">
      <div class="photo-thumb" *ngFor="let p of form.photos; let i = index">
        <div class="thumb-placeholder">{{ i + 1 }}</div>
        <button class="thumb-remove" (click)="removePhoto(i)">✕</button>
      </div>
    </div>

    <div class="step-actions">
      <button class="btn-back" (click)="back.emit()">← Back</button>
      <button class="btn-next" (click)="next.emit()">Next: Hours →</button>
    </div>
  </div>
  `,
  styles: [`
    .upload-zone {
      border: 2px dashed rgba(201,168,76,.25); border-radius: 12px;
      padding: 48px 24px; display: flex; flex-direction: column;
      align-items: center; gap: 10px; cursor: pointer; transition: all .2s;
      &:hover { border-color: var(--gold); background: rgba(201,168,76,.03); }
    }
    .upload-icon { font-size: 32px; color: var(--gold); opacity: .5; }
    .upload-text { font-size: 14px; color: var(--text-secondary); }
    .upload-link { color: var(--gold); }
    .upload-sub  { font-size: 11px; color: var(--text-muted); }
    .photo-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    .photo-thumb { position: relative; aspect-ratio: 1; }
    .thumb-placeholder {
      width: 100%; height: 100%; background: rgba(201,168,76,.08);
      border: 1px solid rgba(201,168,76,.2); border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; color: var(--gold); opacity: .5;
    }
    .thumb-remove {
      position: absolute; top: 4px; right: 4px; background: rgba(231,76,124,.8);
      border: none; color: #fff; width: 20px; height: 20px; border-radius: 50%;
      font-size: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center;
    }
  `],
})
export class StepPhotosComponent {
  @Input()  form!: SalonRegistrationForm;
  @Output() next  = new EventEmitter<void>();
  @Output() back  = new EventEmitter<void>();

  triggerUpload(): void { document.querySelector<HTMLInputElement>('input[type=file]')?.click(); }

  onFilePick(e: Event): void {
    const files = Array.from((e.target as HTMLInputElement).files ?? []);
    // In production: upload to storage, get URLs. Here just add placeholder names.
    this.form.photos = [...this.form.photos, ...files.map(f => f.name)];
  }

  onDrop(e: DragEvent): void {
    e.preventDefault();
    const files = Array.from(e.dataTransfer?.files ?? []);
    this.form.photos = [...this.form.photos, ...files.map(f => f.name)];
  }

  removePhoto(i: number): void {
    this.form.photos = this.form.photos.filter((_, idx) => idx !== i);
  }
}