import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SideNavComponent } from '../SideNav/SideNav.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
