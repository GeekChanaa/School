import {Routes} from '@angular/router';
import { AssignmentsComponent } from './Assignments/Assignments.component';
import { AttendancesComponent } from './Attendances/Attendances.component';
import { EventsComponent } from './Events/Events.component';
import { FacultiesComponent } from './Faculties/Faculties.component';
import { GradesComponent } from './Grades/Grades.component';
import { GroupMembershipsComponent } from './GroupMemberships/GroupMemberships.component';
import { GroupPostsComponent } from './GroupPosts/GroupPosts.component';
import { GroupsComponent } from './Groups/Groups.component';
import { HomeComponent } from './Home/Home.component';
import { ModulesComponent } from './Modules/Modules.component';
import { PrivilegesComponent } from './Privileges/Privileges.component';
import { SubjectsComponent } from './Subjects/Subjects.component';
import { UsersComponent } from './Users/Users.component';

export const appRoutes: Routes = [
    { path : 'home', component: HomeComponent},
    { path : 'users', component : UsersComponent},
    { path : 'assignments', component : AssignmentsComponent},
    { path : 'attendances', component : AttendancesComponent},
    { path : 'events', component : EventsComponent},
    { path : 'faculties', component : FacultiesComponent},
    { path : 'grades', component : GradesComponent},
    { path : 'groupMemberships', component : GroupMembershipsComponent},
    { path : 'groupPosts', component : GroupPostsComponent},
    { path : 'groups', component : GroupsComponent},
    { path : 'modules', component : ModulesComponent},
    { path : 'privileges', component : PrivilegesComponent},
    { path : 'subjects', component : SubjectsComponent},

];