import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.sass']
})
export class RegisterComponent implements OnInit {
  
  model:any ={};

  constructor(private _userService: AuthService) { }

  ngOnInit() {
  }

  create(){
    this._userService.register(this.model).subscribe(() => {
      console.log("created user");
    });
  }

}
