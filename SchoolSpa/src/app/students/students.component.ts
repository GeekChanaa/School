import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  // Logout user
  logout(){
    this._authService.logout();
  }

}
