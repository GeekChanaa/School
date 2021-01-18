import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupMembershipService {

  baseUrl = 'https://localhost:5001/api/groupMembership/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getGroupMemberships(): Observable<GroupMembership[]>{
    return this.http.get<GroupMembership[]>(this.baseUrl);
  }

  deleteGroupMembershipById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createGroupMembership(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getGroupMembership(id:number){
    return this.http.get<GroupMembership>(this.baseUrl+id);
  }

  editGroupMembership(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface GroupMembership{
  id: number;
  userId: number;
  groupId: number;
  rank : string;
}
