import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  baseUrl = 'https://localhost:5001/api/group/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.baseUrl);
  }

  deleteGroupById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createGroup(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Group{
  id: number;
  title: string;
}
