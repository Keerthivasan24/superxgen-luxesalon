import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingQueryParams } from '../../models/booking.model';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls:  ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnInit, OnDestroy {

  constructor(
    public  svc:   BookingService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const p = this.route.snapshot.queryParams as BookingQueryParams;
    this.svc.hydrateFromParams(p);
  }

  ngOnDestroy(): void {
    this.svc.reset();
  }
}