import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseUrl = 'https://localhost:5001/api/trainings/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getTrainings(): Observable<Training[]>{
    return this.http.get<Training[]>(this.baseUrl);
  }

  deleteTrainingById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createTraining(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

}


export interface Training{
  id: number;
  title: string;
}