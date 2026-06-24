import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar *ngIf="!isOwnerRoute"></app-navbar>

<main>
  <router-outlet></router-outlet>
</main>

<!-- Footer — hidden on owner routes too -->
<app-footer *ngIf="!isOwnerRoute"></app-footer>
  `,
  styles: [`main { display: block; }`]
})
export class AppComponent implements OnInit {
  isOwnerRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.isOwnerRoute = e.urlAfterRedirects.startsWith('/owner');
      });
  }
}