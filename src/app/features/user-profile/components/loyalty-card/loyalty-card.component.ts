import { Component } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-loyalty-card',
  templateUrl: './loyalty-card.component.html',
  styleUrls:  ['./loyalty-card.component.scss'],
})
export class LoyaltyCardComponent {
  constructor(public svc: UserProfileService) {}
}