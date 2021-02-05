import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.sass']
})
export class LoginComponent implements OnInit {
  model:any ={};

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this._authService.login(this.model).subscribe((data) => {
      console.log("this is getting here");
      console.log(data); 
      if(data == "Admin") this.router.navigate(['/dashboard']);
      else if( data == "Teacher") this.router.navigate(['/teachers']);
      else if( data == "Student") this.router.navigate(['/students']);
      else this.router.navigate(['/']);
    });
  }

}
