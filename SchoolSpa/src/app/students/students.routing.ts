import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './Calendar/Calendar.component';
import { CoursesComponent } from './Courses/Courses.component';
import { HomeComponent } from './Home/Home.component';
import { MarksComponent } from './Marks/Marks.component';
import { RequestsComponent } from './Requests/Requests.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "courses" , component : CoursesComponent},
  {path : "calendar" , component : CalendarComponent},
  {path : "marks" , component : MarksComponent},
  {path : "requests", component : RequestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule{

}
