import { Component, OnInit } from '@angular/core';
import { SalonDetailService } from '../services/salon-detail.service';


@Component({
  selector: 'app-slot-picker',
  templateUrl: './slot-picker.component.html',
  styleUrls:  ['./slot-picker.component.scss'],
})
export class SlotPickerComponent implements OnInit {

  dateStrip: { label: string; sublabel: string; offset: number }[] = [];
  selectedDateOffset = 0;

  constructor(public svc: SalonDetailService) {}

  ngOnInit(): void {
    this.dateStrip = this.svc.getDateStrip();
    this.svc.selectDate(this.dateStrip[0].label);
  }

  selectDate(offset: number, label: string): void {
    this.selectedDateOffset = offset;
    this.svc.loadSlots(offset);
    this.svc.selectDate(label);
    this.svc.selectTime(null!);
  }

  selectTime(time: string, available: boolean): void {
    if (!available) return;
    const current = this.svc.booking.time;
    this.svc.selectTime(current === time ? null! : time);
  }

  isTimeSelected(time: string): boolean {
    return this.svc.booking.time === time;
  }
}