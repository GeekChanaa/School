import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  baseUrl = 'https://localhost:5001/api/faculty/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getFaculties(): Observable<Faculty[]>{
    return this.http.get<Faculty[]>(this.baseUrl);
  }

  deleteFacultyById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createFaculty(model:any){
    console.log(model);
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Faculty{
  id: number;
  title: string;
  chefId: number;
}
