import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <app-hero-three></app-hero-three>
    <app-stats-bar></app-stats-bar>
    <app-smart-search></app-smart-search>
    <app-featured-salons></app-featured-salons>
    <app-area-browse></app-area-browse>
    <app-style-ai-banner></app-style-ai-banner>
    <app-trending-looks></app-trending-looks>
    <app-testimonials></app-testimonials>
  `,
  styles: [`
    :host { display: block; background: var(--obsidian); }
  `]
})
export class LandingPageComponent {}