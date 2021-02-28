import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  baseUrl = 'https://localhost:5001/api/modules/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getModules(): Observable<Module[]>{
    return this.http.get<Module[]>(this.baseUrl);
  }

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  deleteModuleById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createModule(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getModule(id:number){
    return this.http.get<Module>(this.baseUrl+id);
  }

  editModule(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface Module{
  id: number;
  title: string;
}
