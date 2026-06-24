import { Component } from '@angular/core';
import { GALLERY_LOOKS, GalleryLook } from '../../models/style-ai.model';
import { StyleAiService } from '../../services/style-ai.service';

@Component({
  selector: 'app-style-gallery',
  templateUrl: './style-gallery.component.html',
  styleUrls:  ['./style-gallery.component.scss'],
})
export class StyleGalleryComponent {

  looks = GALLERY_LOOKS;

  faceShapes = ['All','Oval','Round','Square','Heart','Diamond'];
  occasions  = ['All','Everyday','Work','Party','Bridal'];

  activeFace     = 'All';
  activeOccasion = 'All';

  constructor(public svc: StyleAiService) {}

  get filtered(): GalleryLook[] {
    return this.looks.filter(l => {
      const faceOk = this.activeFace === 'All' || l.faceShape === this.activeFace;
      const occOk  = this.activeOccasion === 'All' || l.occasion === this.activeOccasion;
      return faceOk && occOk;
    });
  }

  gradients = [
    'linear-gradient(135deg,#1a1206,#0d0d14)',
    'linear-gradient(135deg,#0d1a2e,#0a0a0f)',
    'linear-gradient(135deg,#1a0d2e,#0a0a0f)',
    'linear-gradient(135deg,#0d1a0d,#0a0a0f)',
    'linear-gradient(135deg,#1a1a0d,#0a0a0f)',
    'linear-gradient(135deg,#1a0d0d,#0a0a0f)',
    'linear-gradient(135deg,#0d1a1a,#0a0a0f)',
    'linear-gradient(135deg,#1a0d1a,#0a0a0f)',
  ];
}