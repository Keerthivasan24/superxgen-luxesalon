// stylists-manager.component.ts
import { Component } from '@angular/core';
import { OwnerDataService } from '../../services/owner-data.service';
import { OwnerStylist }     from '../../models/owner.model';

@Component({
  selector: 'app-stylists-manager',
  templateUrl: './stylists-manager.component.html',
  styleUrls: ['./stylists-manager.component.scss'],
})
export class StylistsManagerComponent {
  showForm = false;
  editing  = false;
  editId   = 0;

  draft: Partial<OwnerStylist> = this.emptyDraft();
  specialitiesStr = '';

  constructor(public ownerData: OwnerDataService) {}

  private emptyDraft(): Partial<OwnerStylist> {
    return { name: '', role: '', experience: 1, specialities: [], available: true, avatar: '' };
  }

  editStylist(s: OwnerStylist): void {
    this.draft          = { ...s };
    this.specialitiesStr = s.specialities.join(', ');
    this.editing        = true;
    this.editId         = s.id;
    this.showForm       = true;
  }

  saveStylist(): void {
    if (!this.draft.name || !this.draft.role) return;
    this.draft.specialities = this.specialitiesStr
      .split(',').map(s => s.trim()).filter(Boolean);
    this.draft.avatar = this.draft.name![0].toUpperCase();

    if (this.editing) {
      this.ownerData.updateStylist(this.editId, this.draft as OwnerStylist);
    } else {
      this.ownerData.addStylist(this.draft as OwnerStylist);
    }
    this.cancelForm();
  }

  deleteStylist(id: number): void {
    if (confirm('Remove this stylist?')) this.ownerData.deleteStylist(id);
  }

  cancelForm(): void {
    this.showForm       = false;
    this.editing        = false;
    this.editId         = 0;
    this.draft          = this.emptyDraft();
    this.specialitiesStr = '';
  }
}