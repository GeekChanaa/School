import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModuleService } from 'src/app/_services/module.service';
import { UserService } from 'src/app/_services/user.service';
import { ClassroomService } from '../../_services/classroom.service';

@Component({
  selector: 'app-Classrooms',
  templateUrl: './Classrooms.component.html',
  styleUrls: ['./Classrooms.component.sass']
})
export class ClassroomsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  classrooms: any;
  makes: any[] = [];
  
  constructor(private _classroomService: ClassroomService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateClassroomDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._classroomService.getClassrooms()
      .subscribe(data => {
        this.classrooms = data;
        this.dataSource = new MatTableDataSource<Group>(this.classrooms);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Group
  delete(id: any){
    this._classroomService.deleteClassroomById(id)
      .subscribe(() => console.log("classroom deleted"));
  }

  // Creating a classroom
  create(){
    this._classroomService.createClassroom(this.model).subscribe(() => {
      console.log("created classroom");
    });
  }

  
}


export interface Group {
  ID: string;
  Title: string;
  moduleId: string;
}


@Component({
  selector: 'create-classroom-dialog',
  templateUrl: 'create-classroom-dialog.html',
})
export class CreateClassroomDialog {
  model:any ={};
  modules:any;
  teachers:any;

  /**
   *
   */
  constructor(private _classroomService: ClassroomService, private _userService: UserService) {
    
  }

  /**
   *
   */
  ngAfterViewInit() {
    this._userService.getTeachers()
      .subscribe((data) => {
        console.log(data);
        this.teachers = data;
      })
  }

  // Creating a classroom
  create(){
    console.log(this.model);
    this._classroomService.createClassroom(this.model).subscribe(() => {
      console.log("created classroom");
    });
  }
}


@Component({
  selector: 'edit-classroom-dialog',
  templateUrl: 'edit-classroom-dialog.html',
  styleUrls: ['./Classrooms.component.sass']
})
export class EditClassroomDialog {
  model:any ={};
  local_data:any = {};
  classroom:any = {};
  /**
   *
   */
  constructor(private _classroomService: ClassroomService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._classroomService.getClassroom(data).subscribe((data) => {
      console.log("got classroom");
      this.classroom = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a classroom
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._classroomService.editClassroom(this.local_data,this.model).subscribe(() => {
      console.log("Edited classroom");
    });
  }
}