import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl = 'https://localhost:5001/api/subject/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.baseUrl);
  }

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  deleteSubjectById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createSubject(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getSubject(id:number){
    return this.http.get<Subject>(this.baseUrl+id);
  }

  editSubject(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  // Get Subjects By Teacher
  getSubjectsByTeacher(userid:number){
    return this.http.get(this.baseUrl+"?userid="+userid);
  }

  
}

export interface Subject{
  id: number;
  title: string;
  moduleId: string;
}
