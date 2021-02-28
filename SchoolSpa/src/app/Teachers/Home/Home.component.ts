import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _userService:UserService, private _authService: AuthService) { }
  subjects : any;
  user: any;
  ngOnInit() {
    var userid = this._authService.decodedToken.nameid;
    this._userService
    this._userService.loggedInUser()?.subscribe(data => {
      this.subjects = data.subjects;
      this.user = data
    });
  }

  

  

}
