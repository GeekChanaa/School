import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { DocumentRequestService } from 'src/app/_services/documentRequest.service';
import { TrainingService } from 'src/app/_services/training.service';

@Component({
  selector: 'app-Requests',
  templateUrl: './Requests.component.html',
  styleUrls: ['./Requests.component.sass']
})
export class RequestsComponent implements OnInit {

  model : any = {};
  trainings : any ; 
  constructor(private _documentRequestService: DocumentRequestService, private _trainingService : TrainingService,private _authService : AuthService) { }

  // Getting trainings
  InitTrainings(){
    this._trainingService.getTrainings().subscribe((data) => {
      this.trainings = data;
    });
  }

  // Creating Request
  createRequest(){
    this.model.studentId = this._authService.decodedToken.nameid;
    this._documentRequestService.createDocumentRequest(this.model).subscribe(() => console.log("created document request"));
  }

  ngOnInit() {
    this.InitTrainings();
  }

}
