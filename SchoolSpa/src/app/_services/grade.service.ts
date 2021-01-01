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

  deleteGradeById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createGrade(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Grade{
  id: number;
  title: string;
}