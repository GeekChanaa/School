import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { CourseDateService } from 'src/app/_services/courseDate.service';

@Component({
  selector: 'app-Calendar',
  templateUrl: './Calendar.component.html',
  styleUrls: ['./Calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  courseDates : any;
  events : any[];
  

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    slotDuration : "01:30:00",
    slotMinTime : "08:00:00",
    slotMaxTime: "17:00:00",
  };

  constructor(private _courseDateService: CourseDateService) { }

  // getting course dates (séances)
  getCourseDates(){
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

  getEvents(){
    this.calendarOptions = this.events;
  }

  ngOnInit() {
    this.getCourseDates();
    
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'))
      }, 1);
  }

}
