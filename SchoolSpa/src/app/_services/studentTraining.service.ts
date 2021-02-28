import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentTrainingService {

  baseUrl = 'https://localhost:5001/api/studentTraining/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };

  getStudentTrainings(): Observable<StudentTraining[]>{
    return this.http.get<StudentTraining[]>(this.baseUrl);
  }

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  deleteStudentTrainingById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createStudentTraining(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getStudentTraining(id:number){
    return this.http.get<StudentTraining>(this.baseUrl+id);
  }

  editStudentTraining(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }
}

export interface StudentTraining{
  id: number;
  studentID: number;
  trainingID : number ; 
  student: any;
  training: any;
  studentTraining : any;
}
