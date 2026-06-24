import { Component, Input, OnInit } from '@angular/core';
import { BookingPayload } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-confirm',
  templateUrl: './step-confirm.component.html',
  styleUrls:  ['./step-confirm.component.scss'],
})
export class StepConfirmComponent implements OnInit {
  @Input() payload!: Partial<BookingPayload>;

  confirmed = false;

  constructor(public svc: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.svc.confirm$.subscribe(c => {
      if (c) this.confirmed = true;
    });
  }

  confirm(): void { this.svc.submit(); }

  goHome():    void { this.router.navigate(['/']); }
  goExplore(): void { this.router.navigate(['/explore']); }
}