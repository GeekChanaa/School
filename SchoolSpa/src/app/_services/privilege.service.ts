import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  baseUrl = 'https://localhost:5001/api/privilege/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getPrivileges(): Observable<Privilege[]>{
    return this.http.get<Privilege[]>(this.baseUrl);
  }

  deletePrivilegeById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createPrivilege(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Privilege{
  id: number;
  title: string;
}
