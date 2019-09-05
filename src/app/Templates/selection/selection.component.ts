import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
  }

  clickSelection(selection: string): void {
    this.cookieService.set('selection',selection,365);
    this.router.navigateByUrl('/signIn');
  }
}
