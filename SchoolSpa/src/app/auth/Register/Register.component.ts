import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.sass']
})
export class RegisterComponent implements OnInit {
  
  model:any ={};
  validationError = false;
  errors : string = "";

  constructor(private _userService: AuthService) { }

  ngOnInit() {
  }

  create(){
    console.log(this.model);
    this._userService.register(this.model).subscribe((next) => {
      console.log("created user");
    }, error => {
      console.log(error);
      this.validationError = true;
      this.errors = error;
    });
  }

}
