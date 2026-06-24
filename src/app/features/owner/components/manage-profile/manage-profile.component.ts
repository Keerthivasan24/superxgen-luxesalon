// manage-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { OwnerDataService }  from '../../services/owner-data.service';
import { OwnerSalon }        from '../../models/owner.model';
import { AREAS }             from '../../../../features/explore/models/salon.model';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss'],
})
export class ManageProfileComponent implements OnInit {
  areas  = AREAS;
  saving = false;
  draft: Partial<OwnerSalon> = {};

  constructor(public ownerData: OwnerDataService) {}

  ngOnInit(): void {
    const salon = this.ownerData.salon;
    if (salon) this.draft = { ...salon };
  }

  save(): void {
    this.saving = true;
    setTimeout(() => {
      this.ownerData.updateSalonProfile(this.draft);
      this.saving = false;
    }, 600);
  }
}