import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Templates/auth/login/login.component';
import { HomeComponent } from './Templates/home/home.component';
import { SelectionComponent } from './Templates/selection/selection.component';
import { SignInComponent } from './Templates/sign-in/sign-in.component';
import { SignUpComponent } from './Templates/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Templates/forgot-password/forgot-password.component';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { AuthService } from './Templates/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './Templates/nav-menu/nav-menu.component';
import { NotificationComponent } from './Templates/notification/notification.component';
import { EmergencyComponent } from './Templates/emergency/emergency.component';
import { ProfilePasswordComponent } from './Templates/auth/profile-password/profile-password.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SelectionComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NavMenuComponent,
    NotificationComponent,
    EmergencyComponent,
    ProfilePasswordComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
