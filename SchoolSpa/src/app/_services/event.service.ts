import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = 'https://localhost:5001/api/event/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.baseUrl);
  }

  deleteEventById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createEvent(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Event{
  id: number;
  title: string;
}
