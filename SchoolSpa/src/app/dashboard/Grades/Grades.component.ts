import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { GradeService } from '../../_services/grade.service';

@Component({
  selector: 'app-Grades',
  templateUrl: './Grades.component.html',
  styleUrls: ['./Grades.component.sass']
})
export class GradesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  grades: any;
  makes: any[] = [];
  
  constructor(private _gradeService: GradeService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateGradeDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._gradeService.getGrades()
      .subscribe(data => {
        this.grades = data;
        this.dataSource = new MatTableDataSource<Grade>(this.grades);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Grade
  delete(id: any){
    this._gradeService.deleteGradeById(id)
      .subscribe(() => console.log("grade deleted"));
  }

  // Creating a grade
  create(){
    this._gradeService.createGrade(this.model).subscribe(() => {
      console.log("created grade");
    });
  }

  
}


export interface Grade {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-grade-dialog',
  templateUrl: 'create-grade-dialog.html',
})
export class CreateGradeDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _gradeService: GradeService) {
    
  }
  // Creating a grade
  create(){
    this._gradeService.createGrade(this.model).subscribe(() => {
      console.log("created grade");
    });
  }
}