import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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