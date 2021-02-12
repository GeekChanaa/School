import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  baseUrl = 'https://localhost:5001/api/grade/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getGrades(): Observable<Grade[]>{
    return this.http.get<Grade[]>(this.baseUrl);
  }

  getGradesByStudent(userid:number):Observable<Grade[]>{
    return this.http.get<Grade[]>(this.baseUrl+"?userid="+userid);
  }

  deleteGradeById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createGrade(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getGrade(id:number){
    return this.http.get<Grade>(this.baseUrl+id);
  }

  getGradeBySubjectUserId(userId:number, subjectId:number){
    return this.http.get<Grade>(this.baseUrl+"?userid="+userId+"&subjectid"+subjectId)
  }

  editGrade(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface Grade{
  id: number;
  value: number;
  subjectId: number;
  studentId: number;
}
