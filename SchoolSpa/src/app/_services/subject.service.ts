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

  deleteSubjectById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createSubject(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Subject{
  id: number;
  title: string;
  moduleId: string;
}
