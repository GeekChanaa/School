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
  validationError = false;
  errors: string = "";


  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this._authService.login(this.model).subscribe(next => {
        // Redirecting the user based on his privileges
        var rank =this._authService.decodedToken.role[0];
        if(rank == "Admin") this.router.navigate(['/dashboard']);
        else if( rank == "Teacher") this.router.navigate(['/teachers']);
        else if( rank == "Student") this.router.navigate(['/students']);
        else this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.validationError = true;
      this.errors = error;
    });
  }

}
