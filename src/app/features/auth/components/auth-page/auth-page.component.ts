import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { AuthService }       from '../../services/auth.service';
import { AuthMode, UserRole } from '../../models/auth.model';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls:  ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  redirectUrl   = '/';
  initialMode:  AuthMode  = 'login';
  initialRole:  UserRole  = 'user';

  constructor(
    private route: ActivatedRoute,
    public  auth:  AuthService,
  ) {}

  ngOnInit(): void {
    // Redirect already-logged-in users
    if (this.auth.isLoggedIn) {
      const redirect = this.route.snapshot.queryParams['redirect'] ?? '/';
      window.location.href = redirect;
      return;
    }

    const params = this.route.snapshot.queryParams;

    if (params['redirect'])              this.redirectUrl  = params['redirect'];
    if (params['mode'] === 'register')   this.initialMode  = 'register';
    if (params['role']  === 'owner')     this.initialRole  = 'owner';
  }
}