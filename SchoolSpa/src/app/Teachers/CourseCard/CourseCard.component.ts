import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-CourseCard',
  templateUrl: './CourseCard.component.html',
  styleUrls: ['./CourseCard.component.sass']
})
export class CourseCardComponent implements OnInit {

  constructor(private _userService : UserService) { }

  ngOnInit() {
    console.log("this is the on init method");
    this._userService.loggedInUser()?.subscribe(data => {
      console.log(data);
    });
  }

}
