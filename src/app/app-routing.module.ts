import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { SelectionComponent } from './Templates/selection/selection.component';
import { LoginComponent } from './Templates/auth/login/login.component';
import { SignUpComponent } from './Templates/sign-up/sign-up.component';
import { SignInComponent } from './Templates/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './Templates/forgot-password/forgot-password.component';
import { NotificationComponent } from './Templates/notification/notification.component';
import { EmergencyComponent } from './Templates/emergency/emergency.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'selection',
    component: SelectionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'notification',
    component:NotificationComponent
  },
  {
    path: 'emergency',
    component:EmergencyComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }