import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDateService {

  baseUrl = 'https://localhost:5001/api/courseDate/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getCourseDates(): Observable<CourseDate[]>{
    return this.http.get<CourseDate[]>(this.baseUrl);
  }

  deleteCourseDateById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createCourseDate(model:any){
    model.startDate = model.startDate +" "+ model.startTime ;
    model.endDate = model.endDate + " " + model.endTime;
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getCourseDate(id:number){
    return this.http.get<CourseDate>(this.baseUrl+id);
  }

  editCourseDate(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface CourseDate{
  id: number;
  title: string;
  prof: string;
  salle: string;
  trainingID : number;
  moduleID : number;
  subjectID : number;
  description: string;
  startDate : string;
  endDate : string;
}
