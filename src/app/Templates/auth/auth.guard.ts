import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
            private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     // return this.authService.isLoggedIn();
      if(this.authService.isLoggedIn()){ console.log('yes', this.authService.isLoggedIn())
        return true;
      }else{ console.log('no')
        this.router.navigateByUrl('/signIn');
        return false;
      }
  

  }
}