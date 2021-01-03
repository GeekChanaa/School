import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  baseUrl = 'https://localhost:5001/api/assignment/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getAssignments(): Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.baseUrl);
  }

  deleteAssignmentById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createAssignment(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Assignment{
  id: number;
  userId: number;
  eventId: number;
}
