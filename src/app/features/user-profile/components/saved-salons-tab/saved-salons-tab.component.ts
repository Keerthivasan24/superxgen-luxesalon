import { Component } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-salons-tab',
  templateUrl: './saved-salons-tab.component.html',
  styleUrls:  ['./saved-salons-tab.component.scss'],
})
export class SavedSalonsTabComponent {
  constructor(public svc: UserProfileService, private router: Router) {}

  visit(id: number): void { this.router.navigate(['/salon', id]); }
  book(id:  number): void { this.router.navigate(['/book'], { queryParams: { salonId: id } }); }
  get priceStr() { return (l: number) => '₹'.repeat(l); }
}