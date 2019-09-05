import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  menuItems(){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  }

  closeNav(){
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.display = "block";
  }

  logout(){
    this.cookieService.delete('token');
    this.router.navigateByUrl('/signIn');
  }
}
