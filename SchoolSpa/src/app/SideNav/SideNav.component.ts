import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-SideNav',
  templateUrl: './SideNav.component.html',
  styleUrls: ['./SideNav.component.sass']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  // Logging out 
  logout(){
    this._authService.logout();
  }

}
