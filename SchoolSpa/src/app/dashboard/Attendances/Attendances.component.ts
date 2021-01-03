import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AttendanceService } from '../../_services/attendance.service';

@Component({
  selector: 'app-Attendances',
  templateUrl: './Attendances.component.html',
  styleUrls: ['./Attendances.component.sass']
})
export class AttendancesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID','Title','Actions'];
  dataSource :any;
  attendances: any;
  makes: any[] = [];
  
  constructor(private _attendanceService: AttendanceService,public dialog: MatDialog, private http : HttpClient, private cdr: ChangeDetectorRef) {
    
   }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   *
   */
  openDialog() {
    this.dialog.open(CreateAttendanceDialog);
  }
  ngAfterViewInit() {
    console.log('this is the view init');
    this._attendanceService.getAttendances()
      .subscribe(data => {
        this.attendances = data;
        this.dataSource = new MatTableDataSource<Attendance>(this.attendances);
        this.dataSource.paginator = this.paginator;
      });
    
    this.cdr.detectChanges();
  }

  model:any ={};


  // Deleting a Attendance
  delete(id: any){
    this._attendanceService.deleteAttendanceById(id)
      .subscribe(() => console.log("attendance deleted"));
  }

  // Creating a attendance
  create(){
    this._attendanceService.createAttendance(this.model).subscribe(() => {
      console.log("created attendance");
    });
  }

  
}


export interface Attendance {
  ID: string;
  Title: string;
}


@Component({
  selector: 'create-attendance-dialog',
  templateUrl: 'create-attendance-dialog.html',
})
export class CreateAttendanceDialog {
  model:any ={};
  /**
   *
   */
  constructor(private _attendanceService: AttendanceService) {
    
  }
  // Creating a attendance
  create(){
    this._attendanceService.createAttendance(this.model).subscribe(() => {
      console.log("created attendance");
    });
  }
}