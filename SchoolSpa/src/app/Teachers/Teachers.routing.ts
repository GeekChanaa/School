import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './Assignments/Assignments.component';
import { AttendanceComponent } from './Attendance/Attendance.component';
import { CalendarComponent } from './Calendar/Calendar.component';
import { CourseCardComponent } from './CourseCard/CourseCard.component';
import { GradesTComponent } from './GradesT/GradesT.component';
import { HomeComponent } from './Home/Home.component';
import { SubjectComponent } from './Subject/Subject.component';

const routes: Routes = [
  { path : 'assignments', component : AssignmentsComponent},
  { path : 'courseCard', component : CourseCardComponent},
  { path : 'attendance' , component : AttendanceComponent},
  { path : 'calendar' , component : CalendarComponent},
  { path : 'subject/:SubjectId' , component : SubjectComponent},
  { path : 'grades' , component : GradesTComponent},
  { path : '', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule{
  
}
