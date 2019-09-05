import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private cookieService: CookieService) {
    if(this.cookieService.get('token') !== '') {
      this.router.navigateByUrl('/notification');
    } else if(this.cookieService.get('selection') !== '') {
      this.router.navigateByUrl('/signIn');
    } else {
      this.router.navigateByUrl('/');
    }
   }

  ngOnInit() {
  }

}
