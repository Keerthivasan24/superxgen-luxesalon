import { Component, Input } from '@angular/core';
import { SalonDetail } from '../models/salon-detail.model';


@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls:  ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  @Input() salon!: SalonDetail;
  expanded = false;
}