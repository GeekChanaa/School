import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-Upload',
  templateUrl: './Upload.component.html',
  styleUrls: ['./Upload.component.scss']
})
export class UploadComponent implements OnInit {
  public message : string; 
  public progress : number;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  public uploadFile = (files) => {
    if(files.length === 0)
    return;

    let fileToUpload =  <File>files[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.http.post('https://localhost:5001/api/upload',formData, {reportProgress : true , observe : "events"}).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100* event.loaded / event.total);
      }
      else if( event.type === HttpEventType.Response){
        this.message = "upload Success";
        this.onUploadFinished.emit(event.body);
      }
    })
  }

}
