import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/_services/attendance.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseDateService } from 'src/app/_services/courseDate.service';
import { SubjectService } from 'src/app/_services/subject.service';

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
  subjects : any;
  constructor(private _authService: AuthService, private _courseDateService : CourseDateService, private _attendanceService : AttendanceService, private _subjectService : SubjectService) { 
    this.InitCourseDates();
    this.InitSubjects();
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
        
        data.training.studentTrainings.forEach((item: { student: { id: number; }; }) => {
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

  InitSubjects(){
    this._subjectService.getSubjectsByTeacher(this._authService.decodedToken.nameid).subscribe((data)=> {
      console.log(this._authService.decodedToken.nameid);
      console.log(data);
      this.subjects = data;
    });
  }

  ngOnInit() {
  }

}
