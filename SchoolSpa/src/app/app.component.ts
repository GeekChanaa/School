import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt'
import { timeout } from 'rxjs/operators';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  jwtHelper = new JwtHelperService();
  
  constructor(private _authService: AuthService){
    
  }

  ngOnInit(){
    const token = localStorage.getItem("token");
    if(token){
      this._authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    
  }

  title = 'Application';
}
