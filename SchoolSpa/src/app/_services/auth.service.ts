import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:5001/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  rank : any;

  constructor(private http: HttpClient, private _userService : UserService, private router : Router) {}

  login(model:any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response:any) => {
        const user = response;
        console.log(response);
        if(user) {
          localStorage.setItem('token', user.token);
          var decode = this.jwtHelper.decodeToken(user.token);
          return user.rank;
        }
      })
    );
  }

  register(model:any){
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    if(token)
    return !this.jwtHelper.isTokenExpired(token);
    else
    return false
  }

  loggedInUserRank(){
      var user : any;
      this._userService.getUser(this.decodedToken.nameid).subscribe(data =>{
        user = data;
        console.log(user);
        this.rank = user.userPrivilege.privilege.title;
      });
  }

  isAdmin() {
    if(this.rank == "Admin")
    return true;
    return false;
  }

  isTeacher(){
    if(this.rank == "Teacher")
    return true;
    return false;
  }

  isStudent(){
    if(this.rank == "Student")
    return true;
    return false;
  }

  logout(){
    localStorage.removeItem("token");
  }

}
