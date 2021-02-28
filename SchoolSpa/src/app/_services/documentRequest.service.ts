import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentRequestService {

  baseUrl = 'https://localhost:5001/api/documentRequest/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };

  getDocumentRequests(): Observable<DocumentRequest[]>{
    return this.http.get<DocumentRequest[]>(this.baseUrl);
  }

  count(){
    return this.http.get<number>(this.baseUrl+"count");
  }

  deleteDocumentRequestById(id: number) {
    return this.http.delete(this.baseUrl+id, this.httpOptions);
  }

  createDocumentRequest(model:any){
    return this.http.post(this.baseUrl,model,this.httpOptions);
  }

  getDocumentRequest(id:number){
    return this.http.get<DocumentRequest>(this.baseUrl+id);
  }

  editDocumentRequest(id:number,model:any){
    return this.http.put(this.baseUrl+id,model,this.httpOptions);
  }

  getDocumentRequestsByUser(userid:number){
    return this.http.get(this.baseUrl+"?userid="+userid);
  }
}

export interface DocumentRequest{

  id: number;
  studentID: number;
  type : string;
  training : string;
  student : any;
  status : string;

}
