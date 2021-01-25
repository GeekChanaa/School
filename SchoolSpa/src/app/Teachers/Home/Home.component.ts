import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _userService:UserService) { }
  subjects : any;
  ngOnInit() {
    this._userService.loggedInUser()?.subscribe(data => {
      this.subjects = data.subjects;
      console.log("these are the subjects");
      console.log(data);
    });
  }

}
