import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.sass']
})
export class LoginComponent implements OnInit {
  model:any ={};

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log("this is not working properly");
    this._authService.login(this.model).subscribe(() => {
      console.log('logged in !!!');
    });
  }

}
