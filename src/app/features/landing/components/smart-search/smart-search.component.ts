import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-smart-search',
  templateUrl: './smart-search.component.html',
  styleUrls: ['./smart-search.component.scss'],
})
export class SmartSearchComponent {
  serviceCtrl = new FormControl('');
  areaCtrl    = new FormControl('');

  services = ['Hair Cut', 'Hair Colour', 'Keratin Treatment', 'Bridal Makeup',
              'Facial', 'Manicure & Pedicure', 'Waxing', 'Head Massage',
              'Balayage', 'Smoothening', 'Eyebrow Threading'];

  areas = ['Koramangala', 'Indiranagar', 'Whitefield', 'MG Road',
           'Jayanagar', 'HSR Layout', 'Marathahalli', 'Bannerghatta Road',
           'Electronic City', 'Yelahanka', 'Hebbal', 'Malleshwaram'];

  filteredServices!: Observable<string[]>;
  filteredAreas!:    Observable<string[]>;

  constructor(private router: Router) {
    this.filteredServices = this.serviceCtrl.valueChanges.pipe(
      startWith(''),
      map(v => this.filter(v || '', this.services))
    );
    this.filteredAreas = this.areaCtrl.valueChanges.pipe(
      startWith(''),
      map(v => this.filter(v || '', this.areas))
    );
  }

  private filter(value: string, list: string[]) {
    const q = value.toLowerCase();
    return list.filter(s => s.toLowerCase().includes(q));
  }

  search() {
    this.router.navigate(['/explore'], {
      queryParams: {
        service: this.serviceCtrl.value || '',
        area: this.areaCtrl.value || '',
      }
    });
  }
}