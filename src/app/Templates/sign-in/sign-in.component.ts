
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../auth/user';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
  })
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  loginSuccessMsg: boolean;
  loginErrorMsg: boolean = false;

  constructor(private authService: AuthService,
     private router: Router,
      private formBuilder: FormBuilder,
      private cookieService: CookieService ) { 
        if(this.cookieService.get('token') !== '') {
          this.router.navigateByUrl('/notification');
        } else if(this.cookieService.get('selection') !== '') {
          this.router.navigateByUrl('/signIn');
        } else {
          this.router.navigateByUrl('/');
        }
      }

    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    }

    // convenience getter for easy access to form fields
    get formControls() { return this.loginForm.controls; }

    login(){
      this.isSubmitted = true;
      if(this.loginForm.invalid){
        return;
      }
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        if(res.status === 200) { 
          this.cookieService.set('token', res.token,365);
          this.loginSuccessMsg = true;
          this.loginErrorMsg = false;
          this.router.navigateByUrl('/notification');
        } else { 
          this.loginErrorMsg = true;
          this.loginSuccessMsg = false;
        }
      });
     // this.router.navigateByUrl('/admin');
    }
  
}
