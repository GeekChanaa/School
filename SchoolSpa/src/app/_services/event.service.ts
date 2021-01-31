import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    model.startDate = model.startDate +" "+ model.startTime ;
    model.endDate = model.endDate +" "+ model.endTime;
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getEvent(id:number){
    return this.http.get<Event>(this.baseUrl+id);
  }

  editEvent(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface Event{
  id: number;
  title: string;
  dateStart : string;
  dateEnd : string;
  type : string;
}
