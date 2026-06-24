import { NgModule }             from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { OwnerLayoutComponent }  from './components/owner-layout/owner-layout.component';
import { DashboardComponent }    from './components/dashboard/dashboard.component';
import { RegisterSalonComponent } from './components/register-salon/register-salon.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { ServicesManagerComponent } from './components/services-manager/services-manager.component';
import { BookingsManagerComponent } from './components/bookings-manager/bookings-manager.component';
import { StylistsManagerComponent } from './components/stylists-manager/stylists-manager.component';
import { AnalyticsComponent }    from './components/analytics/analytics.component';
import { OwnerGuard }            from './guards/owner.guard';

const routes: Routes = [
  // Register route — no layout shell, no guard (owner just signed up)
  {
    path: 'register',
    component: RegisterSalonComponent,
  },
  // All other owner routes — inside layout shell, guarded
  {
    path: '',
    component: OwnerLayoutComponent,
    canActivate: [OwnerGuard],
    children: [
      { path: '',           redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'profile',    component: ManageProfileComponent },
      { path: 'services',   component: ServicesManagerComponent },
      { path: 'bookings',   component: BookingsManagerComponent },
      { path: 'stylists',   component: StylistsManagerComponent },
      { path: 'analytics',  component: AnalyticsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}