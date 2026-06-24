import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from './features/auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.module')
        .then(m => m.LandingModule),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./features/explore/explore.module')
        .then(m => m.ExploreModule),
  },
  {
    path: 'salon/:id',
    loadChildren: () =>
      import('./features/salon-detail/salon-detail.module')
        .then(m => m.SalonDetailModule),
  },
  {
    path: 'book',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/booking/booking.module')
        .then(m => m.BookingModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/user-profile/user-profile.module')
        .then(m => m.ProfileModule),
  },
  {
    path: 'style-ai',
    loadChildren: () =>
      import('./features/style-ai/style-ai.module')
        .then(m => m.StyleAiModule),
  },
  {
    path: 'trends',
    loadChildren: () =>
      import('./features/trends/trends.module')
        .then(m => m.TrendsModule),
  },
  {
    path: 'auth',                           // ← THIS WAS MISSING
    loadChildren: () =>
      import('./features/auth/auth.module')
        .then(m => m.AuthModule),
  },
  {
    path: 'owner',                     // ← owner portal routes
    loadChildren: () =>
      import('./features/owner/owner.module').then(m => m.OwnerModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}