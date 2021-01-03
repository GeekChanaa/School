import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-Calendar',
  templateUrl: './Calendar.component.html',
  styleUrls: ['./Calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor() { }

  ngOnInit() {
  }

}
