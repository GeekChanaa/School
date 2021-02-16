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
  
  getCourseDates(training?:string): Observable<CourseDate[]>{
    if(training == null){
      console.log("no training specified");
      return this.http.get<CourseDate[]>(this.baseUrl);
    }
    else{
      console.log("training : "+ training);
      return this.http.get<CourseDate[]>(this.baseUrl + "?Training="+training);
      
    }
  }

  getCourseDatesByTeacher(teacherId:number):Observable<CourseDate[]>{
    return this.http.get<CourseDate[]>(this.baseUrl+"?professorid="+teacherId);
  }

  deleteCourseDateById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createCourseDate(model:any){
    model.startDate = model.startDate +" "+ model.startTime ;
    model.endDate = model.endDate + " " + model.endTime;
    console.log("this is the service method");
    console.log(model);
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
  professorId: number;
  salle: string;
  trainingID : number;
  moduleID : number;
  subjectID : number;
  description: string;
  startDate : string;
  endDate : string;
  professor: any;
  training : any;
}
