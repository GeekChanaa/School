import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingModuleService {

  baseUrl = 'https://localhost:5001/api/trainingmodules/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getTrainingModules(): Observable<TrainingModule[]>{
    return this.http.get<TrainingModule[]>(this.baseUrl);
  }

  deleteTrainingModuleById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createTrainingModule(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

}

export interface TrainingModule{
  id: number;
  ModuleId: number;
  TrainingId:number;
}
