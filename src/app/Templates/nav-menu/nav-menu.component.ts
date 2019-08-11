import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

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

}
