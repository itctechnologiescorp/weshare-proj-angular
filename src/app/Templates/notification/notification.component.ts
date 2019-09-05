import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
     const token = this.cookieService.get('token');
     const tokenInfo = this.getDecodedAccessToken(token);
     console.log('tokenInfo', tokenInfo)
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}
