import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/_services/attendance.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseDateService } from 'src/app/_services/courseDate.service';

@Component({
  selector: 'app-Absence',
  templateUrl: './Absence.component.html',
  styleUrls: ['./Absence.component.scss']
})
export class AbsenceComponent implements OnInit {
  attendances : any[] =[];
  constructor(private _attendanceService : AttendanceService, private _authService : AuthService, private _courseDateService : CourseDateService) {
    this.InitAttendances();
  }

  // Getting Attendances of the user
  InitAttendances(){
    console.log(this._authService.decodedToken.nameid);
    this._attendanceService.getAttendancesByUser(this._authService.decodedToken.nameid).subscribe((data)=> {
      this.attendances = data;
    });
  }

  ngOnInit() {

  }

}
