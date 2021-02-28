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

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  deleteTrainingModuleById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createTrainingModule(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getTrainingModule(id:number){
    return this.http.get<TrainingModule>(this.baseUrl+id);
  }

  editTrainingModule(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

}

export interface TrainingModule{
  id: number;
  ModuleId: number;
  TrainingId:number;
}
