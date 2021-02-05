import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbsenceComponent } from './Absence/Absence.component';
import { AssignmentsComponent } from './Assignments/Assignments.component';
import { CourseCardComponent } from './CourseCard/CourseCard.component';
import { HomeComponent } from './Home/Home.component';
import { SubjectComponent } from './Subject/Subject.component';

const routes: Routes = [
  { path : 'assignments', component : AssignmentsComponent},
  { path : 'courseCard', component : CourseCardComponent},
  { path : 'absence' , component : AbsenceComponent},
  { path : '', component : HomeComponent},
  { path : 'subject/:SubjectId' , component : SubjectComponent},

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule{
  
}
