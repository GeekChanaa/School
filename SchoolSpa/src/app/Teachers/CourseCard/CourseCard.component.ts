
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-CourseCard',
  templateUrl: './CourseCard.component.html',
  styleUrls: ['./CourseCard.component.sass']
})
export class CourseCardComponent implements OnInit {
  @Input() title: string;
  constructor() {
    
  }

  ngOnInit() {
    
  }

}
