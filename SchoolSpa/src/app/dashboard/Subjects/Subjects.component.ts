import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { UserService } from 'src/app/_services/user.service';
import { SubjectService } from '../../_services/subject.service';

@Component({
  selector: 'app-Subjects',
  templateUrl: './Subjects.component.html',
  styleUrls: ['./Subjects.component.sass']
})
export class SubjectsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  subjects: any;
  makes: any[] = [];
  
  constructor(private _subjectService: SubjectService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateSubjectDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._subjectService.getSubjects()
      .subscribe(data => {
        this.subjects = data;
        this.dataSource = new MatTableDataSource<Group>(this.subjects);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Group
  delete(id: any){
    this._subjectService.deleteSubjectById(id)
      .subscribe(() => console.log("subject deleted"));
  }

  // Creating a subject
  create(){
    this._subjectService.createSubject(this.model).subscribe(() => {
      console.log("created subject");
    });
  }

  
}


export interface Group {
  ID: string;
  Title: string;
  moduleId: string;
}


@Component({
  selector: 'create-subject-dialog',
  templateUrl: 'create-subject-dialog.html',
})
export class CreateSubjectDialog {
  model:any ={};
  modules:any;
  teachers:any;

  /**
   *
   */
  constructor(private _moduleService: ModuleService, private _subjectService: SubjectService, private _userService: UserService) {
    
  }

  /**
   *
   */
  ngAfterViewInit() {
    console.log('this is the view init');
    this._moduleService.getModules()
      .subscribe(data => {
        this.modules = data;
      });
    this._userService.getUsers()
      .subscribe((data) => {
        this.teachers = data;
      })
    
  }

  // Creating a subject
  create(){
    console.log(this.model);
    this._subjectService.createSubject(this.model).subscribe(() => {
      console.log("created subject");
    });
  }
}


@Component({
  selector: 'edit-subject-dialog',
  templateUrl: 'edit-subject-dialog.html',
  styleUrls: ['./Subjects.component.sass']
})
export class EditSubjectDialog {
  model:any ={};
  local_data:any = {};
  subject:any = {};
  /**
   *
   */
  constructor(private _subjectService: SubjectService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._subjectService.getSubject(data).subscribe((data) => {
      console.log("got subject");
      this.subject = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a subject
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._subjectService.editSubject(this.local_data,this.model).subscribe(() => {
      console.log("Edited subject");
    });
  }
}