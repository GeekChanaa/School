import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/_services/attendance.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseDateService } from 'src/app/_services/courseDate.service';

@Component({
  selector: 'app-Attendance',
  templateUrl: './Attendance.component.html',
  styleUrls: ['./Attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  courseDates : any[] = [];
  model:any = {};
  students : any[] = [];
  attended : any[] = [];
  cdid : number;
  constructor(private _authService: AuthService, private _courseDateService : CourseDateService, private _attendanceService : AttendanceService) { 
    this.InitCourseDates();
  }

  // Initialising necessary course dates for this teacher
  InitCourseDates(){
    this._courseDateService.getCourseDatesByTeacher(this._authService.decodedToken.nameid).subscribe((data) => {
        this.courseDates = data;
    });
  }

  change(event: { isUserInput: any; source: { value: number; }; })
  {
    if(event.isUserInput) {
      this._courseDateService.getCourseDate(event.source.value).subscribe((data)=> {
        this.cdid = data.id;
        this.students = data.training.studentTrainings;
        
        data.training.studentTrainings.forEach(item => {
          this.attended[item.student.id]=false;
        });
      });
    }
  }

  create(){
    console.log(this.attended.length);
    this.attended.forEach((item,index) => {
      this.model = {
        attended : item,
        userid : index,
        coursedateid : this.cdid, 
      }
      this._attendanceService.createAttendance(this.model).subscribe(() => console.log("created attendance"));
    });
  }

  ngOnInit() {
  }

}
