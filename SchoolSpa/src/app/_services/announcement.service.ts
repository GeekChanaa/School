import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  baseUrl = 'https://localhost:5001/api/announcement/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getAnnouncements(): Observable<Announcement[]>{
    return this.http.get<Announcement[]>(this.baseUrl);
  }

  deleteAnnouncementById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createAnnouncement(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getAnnouncement(id:number){
    return this.http.get<Announcement>(this.baseUrl+id);
  }

  editAnnouncement(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  
}

export interface Announcement{
  id: number;
  
}
