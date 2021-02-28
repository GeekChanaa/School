import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { DocumentRequestService } from 'src/app/_services/documentRequest.service';
import { ModuleService } from 'src/app/_services/module.service';
import { PrivilegeService } from 'src/app/_services/privilege.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { TrainingService } from 'src/app/_services/training.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.sass']
})
export class HomeComponent implements OnInit {

  numDocumentRequests : number = 0;
  numUsers : number = 0;
  numTrainings : number = 0;
  numModules : number = 0;
  numSubjects : number = 0;
  numPrivileges : number = 0;
  public user : any;

  constructor(private _authService : AuthService, private _userService : UserService,private _moduleService : ModuleService, private _trainingService: TrainingService, private _subjectService: SubjectService, private _privilegeService: PrivilegeService, private _documentRequestService : DocumentRequestService) { }

  ngOnInit() {
    this._userService.count().subscribe((data) => this.numUsers = data);
    this._documentRequestService.count().subscribe((data) => this.numDocumentRequests = data);
    this._moduleService.count().subscribe((data) => this.numModules = data);
    this._trainingService.count().subscribe((data) => this.numTrainings = data);
    this._subjectService.count().subscribe((data) => this.numSubjects = data);
    this._privilegeService.count().subscribe((data) => this.numPrivileges = data);
    this._userService.loggedInUser()?.subscribe(data => {
      this.user = data;
    });
  }

}
