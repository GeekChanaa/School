import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../_guards/admin.guard';
import { AuthGuard } from '../_guards/auth.guard';
import { CalendarComponent } from './Calendar/Calendar.component';
import { ClassroomsComponent } from './Classrooms/Classrooms.component';
import { CourseDateComponent } from './CourseDate/CourseDate.component';
import { DocumentRequestsComponent } from './DocumentRequests/DocumentRequests.component';
import { EventsComponent } from './Events/Events.component';
import { FacultiesComponent } from './Faculties/Faculties.component';
import { GradesComponent } from './Grades/Grades.component';
import { GroupsComponent } from './Groups/Groups.component';
import { HomeComponent } from './Home/Home.component';
import { ModulesComponent } from './Modules/Modules.component';
import { PrivilegesComponent } from './Privileges/Privileges.component';
import { StudentTrainingsComponent } from './StudentTrainings/StudentTrainings.component';
import { SubjectsComponent } from './Subjects/Subjects.component';
import { TrainingModulesComponent } from './TrainingModules/TrainingModules.component';
import { TrainingsComponent } from './Trainings/Trainings.component';
import { UserPrivilegeComponent } from './UserPrivileges/UserPrivileges.component';
import { UsersComponent } from './Users/Users.component';

const routes: Routes = [
    { path : '' , component : HomeComponent, canActivate : [AdminGuard]},
    { path : 'users', component : UsersComponent},
    { path : 'events', component : EventsComponent},
    { path : 'faculties', component : FacultiesComponent},
    { path : 'grades', component : GradesComponent},
    { path : 'groups', component : GroupsComponent},
    { path : 'modules', component : ModulesComponent},
    { path : 'privileges', component : PrivilegesComponent},
    { path : 'subjects', component : SubjectsComponent},
    { path : 'calendar', component : CalendarComponent},
    { path : 'training', component : TrainingsComponent},
    { path : 'trainingModules', component : TrainingModulesComponent},
    { path : 'userPrivileges', component : UserPrivilegeComponent},
    { path : 'courseDates', component : CourseDateComponent},
    { path : 'documentRequests', component : DocumentRequestsComponent},
    { path : 'studentTrainings', component : StudentTrainingsComponent},
    { path : 'classrooms', component : ClassroomsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule{
  
}
