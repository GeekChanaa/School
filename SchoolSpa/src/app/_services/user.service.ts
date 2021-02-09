import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:5001/api/user/';

  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

  deleteUserById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createUser(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  editUser(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  getUser(id:number){
    return this.http.get<User>(this.baseUrl+id);
  }

  // Getting students 
  getStudents(){
    return this.http.get<User[]>(this.baseUrl+"?Rank=Student");
  }

  // Getting Teachers
  getTeachers(){
    return this.http.get<User[]>(this.baseUrl+"?Rank=Teacher")
  }

 

  loggedInUser(){
    const token = localStorage.getItem("token");
    if(token){
      const decodedToken = this.jwtHelper.decodeToken(token);
      var user = this.getUser(decodedToken.nameid);
      return user;
    }
    console.log('no user is logged in');
    return null;
  }

  
}

export interface User{
  id: number;
  cin: string;
  cne: string;
  firstName: string;
  lastName: string;
  email: string;
  codeAppoge: string;
  date_birth: string;
  password: string;
  subjects: any;
}
