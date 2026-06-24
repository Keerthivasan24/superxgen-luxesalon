import { Component } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-preferences-tab',
  templateUrl: './preferences-tab.component.html',
  styleUrls:  ['./preferences-tab.component.scss'],
})
export class PreferencesTabComponent {
  saved = false;
  constructor(public svc: UserProfileService) {}

  save(): void {
    this.saved = true;
    setTimeout(() => this.saved = false, 2000);
  }

  get selectedCount(): number {
    return (this.svc.prefs$ as any).value?.filter((p: any) => p.selected).length ?? 0;
  }
}