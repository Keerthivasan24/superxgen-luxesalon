import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalonRegistrationForm, EMPTY_REGISTRATION } from '../../models/owner.model';
import { SalonDataService } from '../../../../shared/services/salon-data.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-register-salon',
  templateUrl: './register-salon.component.html',
  styleUrls: ['./register-salon.component.scss'],
})
export class RegisterSalonComponent {
  currentStep = 0;
  steps = ['Basic Info', 'Services', 'Photos', 'Hours', 'Review & Submit'];

  form: SalonRegistrationForm = { ...EMPTY_REGISTRATION };

  constructor(
    private salonData: SalonDataService,
    private auth:      AuthService,
    private router:    Router,
  ) {}

  next(): void { this.currentStep = Math.min(this.currentStep + 1, this.steps.length - 1); }
  back(): void { this.currentStep = Math.max(this.currentStep - 1, 0); }

  submit(): void {
    const newSalon: any = {
      id:        this.salonData.getNextId(),
      name:      this.form.salonName,
      area:      this.form.area,
      address:   this.form.address,
      rating:    0, reviews: 0,
      priceLevel: this.form.priceLevel,
      tags:      this.form.services.slice(0, 3).map(s => s.category),
      services:  this.form.services.map(s => s.name),
      openNow:   false,
      image:     '',
      lat:       12.9716, lng: 77.5946,
      distance:  0,
      isFeatured: false,
    };

    this.salonData.addSalon(newSalon);
    this.router.navigate(['/owner/dashboard']);
  }
}