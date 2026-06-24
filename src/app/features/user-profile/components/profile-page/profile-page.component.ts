import { Component } from '@angular/core';
import { ProfileTab } from '../../models/user-profile.model';
import { UserProfileService } from '../../services/user-profile.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls:  ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  constructor(public svc: UserProfileService) {}

  setTab(tab: ProfileTab): void { this.svc.setTab(tab); }
}