import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
}


@Component({
  selector: 'create-subject-dialog',
  templateUrl: 'create-subject-dialog.html',
})
export class CreateSubjectDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _subjectService: SubjectService) {
    
  }
  // Creating a group
  create(){
    this._subjectService.createSubject(this.model).subscribe(() => {
      console.log("created subject");
    });
  }
}