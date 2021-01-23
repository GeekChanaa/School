import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './Assignments/Assignments.component';
import { CourseCardComponent } from './CourseCard/CourseCard.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  { path : 'Assignments', component : AssignmentsComponent},
  { path : 'CourseCard', component : CourseCardComponent},
  { path : '', component : HomeComponent},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule{
  
}
