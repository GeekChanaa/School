import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.sass']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private _authService: AuthService, private _userService : UserService) {
    this._userService.getUser(this._authService.decodedToken.nameid).subscribe((data) =>{
      this.user = data;
      console.log(this.user);
    });
    
  }

  ngOnInit() {

  }

}
