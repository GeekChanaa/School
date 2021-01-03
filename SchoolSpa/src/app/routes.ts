import {Routes} from '@angular/router';
import { AssignmentsComponent } from './dashboard/Assignments/Assignments.component';
import { AttendancesComponent } from './dashboard/Attendances/Attendances.component';
import { EventsComponent } from './dashboard/Events/Events.component';
import { FacultiesComponent } from './dashboard/Faculties/Faculties.component';
import { GradesComponent } from './dashboard/Grades/Grades.component';
import { GroupsComponent } from './dashboard/Groups/Groups.component';
import { HomeComponent } from './Home/Home.component';
import { ModulesComponent } from './dashboard/Modules/Modules.component';
import { PrivilegesComponent } from './dashboard/Privileges/Privileges.component';
import { SubjectsComponent } from './dashboard/Subjects/Subjects.component';
import { UsersComponent } from './dashboard/Users/Users.component';
import { RequestPasswordComponent } from './RequestPassword/RequestPassword.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
import { LogoutComponent } from './Logout/Logout.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { CalendarComponent } from './dashboard/Calendar/Calendar.component';
import { TrainingsComponent } from './dashboard/Trainings/Trainings.component';

export const appRoutes: Routes = [
    { path : 'home', component: HomeComponent},
    { path : 'users', component : UsersComponent},
    { path : 'assignments', component : AssignmentsComponent},
    { path : 'attendances', component : AttendancesComponent},
    { path : 'events', component : EventsComponent},
    { path : 'faculties', component : FacultiesComponent},
    { path : 'grades', component : GradesComponent},
    { path : 'groups', component : GroupsComponent},
    { path : 'modules', component : ModulesComponent},
    { path : 'privileges', component : PrivilegesComponent},
    { path : 'subjects', component : SubjectsComponent},
    { path : 'calendar', component : CalendarComponent},
    { path : 'training', component : TrainingsComponent},
    {
        path: 'auth',
        children: [
          {
            path: '',
            component: LoginComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'register',
            component: RegisterComponent,
          },
          {
            path: 'request-password',
            component: RequestPasswordComponent,
          },
          {
            path: 'reset-password',
            component: ResetPasswordComponent,
          },
        ],
      },

];