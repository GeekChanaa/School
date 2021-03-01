import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  loggedIn : boolean = false;
  student : boolean = false;
  teacher : boolean = false;
  admin : boolean = false;
  constructor(private _authService : AuthService) { 
     // If the user is logged in
     if(this._authService.loggedIn()){
      this.loggedIn = true;
      console.log("this is the user");
      // if the user is just a visitor
      if(this._authService.decodedToken.role[0]){
        if(this._authService.decodedToken.role[0] == "Student"){
          this.student = true;
        }
        if(this._authService.decodedToken.role[0] == "Teacher"){
          this.teacher = true;
        }
        if(this._authService.decodedToken.role[0] == "Admin"){
          this.admin = true;
        }
      }

    }
    else{
      this.loggedIn = false;
    }
  }

  ngOnInit() {
   

  }

}
