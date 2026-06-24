import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


import { AuthVisualComponent }  from './components/auth-visual/auth-visual.component';
import { AuthFormComponent }    from './components/auth-form/auth-form.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    AuthVisualComponent,
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthPageComponent }]),
  ],
})
export class AuthModule {}