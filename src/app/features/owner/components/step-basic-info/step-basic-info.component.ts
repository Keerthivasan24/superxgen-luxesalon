import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AREAS } from '../../../explore/models/salon.model';
import { SalonRegistrationForm } from '../../models/owner.model';


@Component({
  selector: 'app-step-basic-info',
  templateUrl: './step-basic-info.component.html',
  styleUrls:  ['./step-basic-info.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})
export class StepBasicInfoComponent {
  @Input()  form!: SalonRegistrationForm;
  @Output() next  = new EventEmitter<void>();

  areas = AREAS;

  onNext(): void {
    if (!this.form.salonName || !this.form.area || !this.form.address) return;
    this.next.emit();
  }
}