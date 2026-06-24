import { Component } from '@angular/core';
import { OwnerDataService } from '../../services/owner-data.service';
import { OwnerService }     from '../../models/owner.model';

@Component({
  selector: 'app-services-manager',
  templateUrl: './services-manager.component.html',
  styleUrls: ['./services-manager.component.scss'],
})
export class ServicesManagerComponent {

  showForm = false;
  editing  = false;
  editId   = 0;

  categories = ['Hair', 'Skin', 'Nails', 'Bridal', "Men's", 'Wellness', 'Spa'];

  draft: Partial<OwnerService> = this.emptyDraft();

  constructor(public ownerData: OwnerDataService) {}

  private emptyDraft(): Partial<OwnerService> {
    return { name: '', category: '', duration: 60, price: 0, description: '', available: true };
  }

  getCategories(services: OwnerService[]): string[] {
    return [...new Set(services.map(s => s.category))];
  }

  getByCategory(services: OwnerService[], cat: string): OwnerService[] {
    return services.filter(s => s.category === cat);
  }

  editService(svc: OwnerService): void {
    this.draft   = { ...svc };
    this.editing = true;
    this.editId  = svc.id;
    this.showForm = true;
  }

  saveService(): void {
    if (!this.draft.name || !this.draft.category || !this.draft.price) return;

    if (this.editing) {
      this.ownerData.updateService(this.editId, this.draft as OwnerService);
    } else {
      this.ownerData.addService(this.draft as OwnerService);
    }
    this.cancelForm();
  }

  deleteService(id: number): void {
    if (confirm('Remove this service?')) {
      this.ownerData.deleteService(id);
    }
  }

  cancelForm(): void {
    this.showForm = false;
    this.editing  = false;
    this.editId   = 0;
    this.draft    = this.emptyDraft();
  }
}