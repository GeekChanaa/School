import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SideNav',
  templateUrl: './SideNav.component.html',
  styleUrls: ['./SideNav.component.sass']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit() {
  }

}
