import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/_services/module.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { TrainingService } from 'src/app/_services/training.service';

@Component({
  selector: 'app-Absence',
  templateUrl: './Absence.component.html',
  styleUrls: ['./Absence.component.sass']
})
export class AbsenceComponent implements OnInit {

  trainings : any;
  modules : any;
  subjects : any;
  model : any = {};

  constructor(private _trainingService : TrainingService, private _moduleService: ModuleService, private _subjectService : SubjectService) { }

  ngOnInit(){
    this.initModules();
    this.initSubjects();
    this.initTrainings();
  }

  // init Trainings property 
  initTrainings(){
    this._trainingService.getTrainings().subscribe((data) => { this.trainings = data;});
  }

  // init Modules property
  initModules(){
    this._moduleService.getModules().subscribe((data) => { this.modules = data;});
  }

  // init Subjects property
  initSubjects(){
    this._subjectService.getSubjects().subscribe((data) => { this.subjects = data});
  }

}
