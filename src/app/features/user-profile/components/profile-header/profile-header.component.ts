import { Component } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { LOYALTY_TIERS } from '../../models/user-profile.model';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls:  ['./profile-header.component.scss'],
})
// profile-header.component.ts
export class ProfileHeaderComponent {
  editing   = false;
  editName  = '';
  editEmail = '';
  editPhone = '';

  constructor(public svc: UserProfileService) {}

  startEdit(): void {
    const u      = this.svc.user;
    this.editName  = u?.name  ?? '';
    this.editEmail = u?.email ?? '';
    this.editPhone = u?.phone ?? '';
    this.editing   = true;
  }

  saveEdit(): void {
    this.svc.updateProfile({
      name:  this.editName,
      email: this.editEmail,
      phone: this.editPhone,
    });
    this.editing = false;
  }

  get tierColor(): string {
    return this.svc.tierConfig?.color ?? '#C9A84C';
  }
}