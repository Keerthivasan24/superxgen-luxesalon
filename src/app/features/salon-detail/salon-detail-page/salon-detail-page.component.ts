import {
  Component, OnInit, OnDestroy,
  HostListener, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonDetailService } from '../services/salon-detail.service';


@Component({
  selector: 'app-salon-detail-page',
  templateUrl: './salon-detail-page.component.html',
  styleUrls:  ['./salon-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalonDetailPageComponent implements OnInit, OnDestroy {


  showBookingFooter = false;

  constructor(
    private route:  ActivatedRoute,
    public  svc:    SalonDetailService,
      private cdr:   ChangeDetectorRef,
  ) {}


ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    if (id) this.svc.loadSalon(id);
    this.cdr.markForCheck(); 
  });
}

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    this.showBookingFooter = scrollY > 420;
     this.cdr.markForCheck(); 
  }

  ngOnDestroy(): void {
    this.svc.clearBooking();
  }
}