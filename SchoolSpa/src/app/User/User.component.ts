import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.sass']
})
export class UserComponent implements OnInit {

    // Attribute users
    users :any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/values').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

}
