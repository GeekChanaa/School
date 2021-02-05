import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { AuthService } from 'src/app/_services/auth.service';
import { CourseDateService } from 'src/app/_services/courseDate.service';

@Component({
  selector: 'app-Calendar',
  templateUrl: './Calendar.component.html',
  styleUrls: ['./Calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  condition = true;
  courseDates : any;
  events : any[];
  authTraining : any ;
  

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    slotDuration : "01:30:00",
    slotMinTime : "08:00:00",
    slotMaxTime: "17:00:00",
  };

  getCourseDates(){
    this.authTraining = this._authService.decodedToken.role[1];
    console.log(this.authTraining);
    // Getting Training Courses
    this._courseDateService.getCourseDates().subscribe((data) => {
      this.courseDates = data;
      var tempArr: any[] = [];
      this.courseDates.forEach((obj: { title: any; dateStart: string;}) => {
        var event = {title : obj.title , date : obj.dateStart };
        tempArr.push(event);
      });
      this.events = tempArr;
      this.calendarOptions.events = this.events;
    })
  }

  

  constructor(public _authService : AuthService, private _courseDateService : CourseDateService) {
      
  }

  ngOnInit() {
    this.getCourseDates();
    
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'))
      }, 1);
  }

}
