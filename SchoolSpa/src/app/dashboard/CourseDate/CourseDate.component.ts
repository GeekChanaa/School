import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { SubjectService } from 'src/app/_services/subject.service';
import { TrainingService } from 'src/app/_services/training.service';
import { UserService } from 'src/app/_services/user.service';
import { CourseDateService } from '../../_services/courseDate.service';

@Component({
  selector: 'app-CourseDate',
  templateUrl: './CourseDate.component.html',
  styleUrls: ['./CourseDate.component.sass']
})
export class CourseDateComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Prof','Salle','Start Date','End Date'];
  dataSource :any;
  courseDates: any;
  makes: any[] = [];
  
  constructor(private _userService : UserService ,private _courseDateService: CourseDateService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateCourseDateDialog);
  }

  openEditDialog(id:number){
    this.dialog.open(EditCourseDateDialog, {
      data: id,
    });
  }

  ngAfterViewInit() {
    console.log('this is the view init');
    this._courseDateService.getCourseDates()
      .subscribe(data => {
        this.courseDates = data;
        this.dataSource = new MatTableDataSource<CourseDate>(this.courseDates);
        this.dataSource.paginator = this.paginator;
        console.log(this.courseDates);
      });

    
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a CourseDate
  delete(id: any){
    this._courseDateService.deleteCourseDateById(id)
      .subscribe(() => console.log("courseDate deleted"));
  }

  
}


export interface CourseDate{
  id: number;
  title: string;
  prof: string;
  salle: string;
  trainingID : number;
  moduleID : number;
  subjectID : number;
  description: string;
  startDate : string;
  endDate : string;
  startTime : string;
  endTime : string;
}

@Component({
  selector: 'create-course-date-dialog',
  templateUrl: 'create-course-date-dialog.html',
  styleUrls: ['./CourseDate.component.sass']
})
export class CreateCourseDateDialog {
  model:any ={};
  trainings : any;
  modules : any;
  subjects : any;
  teachers : any;
  /**
   *
   */
  constructor(private _userService : UserService,private _courseDateService: CourseDateService, private _moduleService : ModuleService, private _trainingService: TrainingService, private _subjectService: SubjectService) {
    
  }

  ngOnInit(){
    this.initModules();
    this.initSubjects();
    this.initTrainings();
    this._userService.getTeachers().subscribe((data)=> {
      this.teachers = data;
    });
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

  // Creating a courseDate
  create(){
    console.log(this.model);
    this._courseDateService.createCourseDate(this.model).subscribe(() => {
      console.log("created courseDate");
    });
  }
}




@Component({
  selector: 'edit-course-date-dialog',
  templateUrl: 'edit-course-date-dialog.html',
  styleUrls: ['./CourseDate.component.sass']
})
export class EditCourseDateDialog {
  model:any ={};
  local_data:any = {};
  courseDate:any = {};
  /**
   *
   */
  constructor(private _courseDateService: CourseDateService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._courseDateService.getCourseDate(data).subscribe((data) => {
      console.log("got courseDate");
      this.courseDate = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a courseDate
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._courseDateService.editCourseDate(this.local_data,this.model).subscribe(() => {
      console.log("Edited courseDate");
    });
  }
}