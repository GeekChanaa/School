import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:5001/api/user/';

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
}
