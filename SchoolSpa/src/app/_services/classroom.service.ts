import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  baseUrl = 'https://localhost:5001/api/classroom/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getClassrooms(): Observable<Classroom[]>{
    return this.http.get<Classroom[]>(this.baseUrl);
  }

  deleteClassroomById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createClassroom(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getClassroom(id:number){
    return this.http.get<Classroom>(this.baseUrl+id);
  }

  editClassroom(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  
}

export interface Classroom{
  id: number;
  title: string;
  professorID : number;
  Professor : any;
}
