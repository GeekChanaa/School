import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  jwtHelper = new JwtHelperService();
  
  constructor(private _authService: AuthService, private _userService : UserService){
    
  }

  ngOnInit(){
    const token = localStorage.getItem("token");
    if(token){
      this._authService.decodedToken = this.jwtHelper.decodeToken(token);
      this._authService.rank = this._authService.decodedToken.role;
    }
  }

  title = 'Application';
}
