import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl = 'https://localhost:5001/api/Attendance/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
  
  getAttendances(): Observable<Attendance[]>{
    return this.http.get<Attendance[]>(this.baseUrl);
  }

  deleteAttendanceById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createAttendance(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  
}

export interface Attendance{
  id: number;
  dateStart: string;
  dateEnd : string;
  userId : number;
  eventId : number;

}
