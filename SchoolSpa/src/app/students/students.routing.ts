import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './Calendar/Calendar.component';
import { CoursesComponent } from './Courses/Courses.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "courses" , component : CoursesComponent},
  {path : "calendar" , component : CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule{

}
