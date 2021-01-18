import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, Optional,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EventService } from 'src/app/_services/event.service';
import { UserService } from 'src/app/_services/user.service';
import { FacultyService } from '../../_services/faculty.service';

@Component({
  selector: 'app-Faculties',
  templateUrl: './Faculties.component.html',
  styleUrls: ['./Faculties.component.sass']
})
export class FacultiesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Chef ID','Title','Actions'];
  dataSource :any;
  faculties: any;
  makes: any[] = [];
  
  constructor(private _facultyService: FacultyService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateFacultyDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._facultyService.getFaculties()
      .subscribe(data => {
        this.faculties = data;
        this.dataSource = new MatTableDataSource<Factulty>(this.faculties);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Factulty
  delete(id: any){
    this._facultyService.deleteFacultyById(id)
      .subscribe(() => console.log("faculty deleted"));
  }

  // Creating a faculty
  create(){
    this._facultyService.createFaculty(this.model).subscribe(() => {
      console.log("created faculty");
    });
  }

  
}


export interface Factulty {
  ID: string;
  Title: string;
  ChefId: number;
}


@Component({
  selector: 'create-faculty-dialog',
  templateUrl: 'create-faculty-dialog.html',
})
export class CreateFacultyDialog implements AfterViewInit{
  model:any ={};
  users:any;
  /**
   *
   */
  constructor(private _facultyService: FacultyService, private _userService: UserService) {
    
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
    
  }
  // Creating a faculty
  create(){
    console.log(this.model);
    this._facultyService.createFaculty(this.model).subscribe(() => {
      console.log("created faculty");
    });
  }
}

@Component({
  selector: 'edit-faculty-dialog',
  templateUrl: 'edit-faculty-dialog.html',
  styleUrls: ['./Faculties.component.sass']
})
export class EditFacultyDialog {
  model:any ={};
  local_data:any = {};
  faculty:any = {};
  /**
   *
   */
  constructor(private _facultyService: FacultyService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.local_data = data;
    this._facultyService.getFaculty(data).subscribe((data) => {
      console.log("got faculty");
      this.faculty = data;
      this.model = data;
    })
    console.log("this is the local data : "+this.local_data)
  }
  // Editing a Faculty
  edit(){
    console.log("this is the model that we're putting for update");
    console.log(this.model);
    this._facultyService.editFaculty(this.local_data,this.model).subscribe(() => {
      console.log("Edited Faculty");
    });
  }
}