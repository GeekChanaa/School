import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPrivilegeService {

  baseUrl = 'https://localhost:5001/api/userprivilege/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  

  getUserPrivileges(): Observable<UserPrivilege[]>{
    return this.http.get<UserPrivilege[]>(this.baseUrl);
  }

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  deleteUserPrivilegeById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createUserPrivilege(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getUserPrivilege(id:number){
    return this.http.get<UserPrivilege>(this.baseUrl+id);
  }

  editUserPrivilege(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface UserPrivilege{
  id: number;
  userId : number;
  privilegeId : number;
}
