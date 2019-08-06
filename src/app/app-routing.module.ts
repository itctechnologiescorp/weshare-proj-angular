import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { SelectionComponent } from './Templates/selection/selection.component';
import { LoginComponent } from './Templates/auth/login/login.component';
import { SignUpComponent } from './Templates/sign-up/sign-up.component';
import { SignInComponent } from './Templates/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './Templates/forgot-password/forgot-password.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }