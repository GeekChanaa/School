import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AssignmentService } from '../../_services/assignment.service';

@Component({
  selector: 'app-Assignments',
  templateUrl: './Assignments.component.html',
  styleUrls: ['./Assignments.component.sass']
})
export class AssignmentsComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  assignments: any;
  makes: any[] = [];
  
  constructor(private _assignmentService: AssignmentService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateAssignmentDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._assignmentService.getAssignments()
      .subscribe(data => {
        this.assignments = data;
        this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Assignment
  delete(id: any){
    this._assignmentService.deleteAssignmentById(id)
      .subscribe(() => console.log("assignment deleted"));
  }

  // Creating a assignment
  create(){
    this._assignmentService.createAssignment(this.model).subscribe(() => {
      console.log("created assignment");
    });
  }

  
}


export interface Assignment {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-assignment-dialog',
  templateUrl: 'create-assignment-dialog.html',
})
export class CreateAssignmentDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _assignmentService: AssignmentService) {
    
  }
  // Creating a assignment
  create(){
    this._assignmentService.createAssignment(this.model).subscribe(() => {
      console.log("created assignment");
    });
  }
}