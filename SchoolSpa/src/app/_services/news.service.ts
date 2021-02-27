import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'https://localhost:5001/api/new/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getNewss(): Observable<News[]>{
    return this.http.get<News[]>(this.baseUrl);
  }

  deleteNewsById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createNews(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getNews(id:number){
    return this.http.get<News>(this.baseUrl+id);
  }

  editNews(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface News{
  id: number;
}
