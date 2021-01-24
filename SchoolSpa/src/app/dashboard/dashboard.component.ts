import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SideNavComponent } from '../SideNav/SideNav.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() {

   }

  loadCss(){
    const Styles = [
      "https://fonts.googleapis.com/icon?family=Material+Icons",
    ];

    for (let i = 0; i < Styles.length; i++) { 
      const node = document.createElement('link'); 
      node.href = Styles[i]; 
      node.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 



  }

  ngOnInit() {
    this.loadCss();
  }

}
