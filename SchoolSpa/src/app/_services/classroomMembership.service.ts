import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassroomMembershipService {

  baseUrl = 'https://localhost:5001/api/classroomMembership/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getClassroomMemberships(): Observable<ClassroomMembership[]>{
    return this.http.get<ClassroomMembership[]>(this.baseUrl);
  }

  deleteClassroomMembershipById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createClassroomMembership(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getClassroomMembership(id:number){
    return this.http.get<ClassroomMembership>(this.baseUrl+id);
  }

  editClassroomMembership(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface ClassroomMembership{
  id: number;
  studentID : number;
  professorID : number;
  student : any;
  professor : any;
}
