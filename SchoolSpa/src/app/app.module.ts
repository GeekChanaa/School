import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './Home/Home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SideNavComponent } from './SideNav/SideNav.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { CreateUserDialog, UsersComponent } from './dashboard/Users/Users.component';
import { AssignmentsComponent, CreateAssignmentDialog } from './dashboard/Assignments/Assignments.component';
import { AttendancesComponent, CreateAttendanceDialog } from './dashboard/Attendances/Attendances.component';
import { CreateEventDialog, EventsComponent } from './dashboard/Events/Events.component';
import { CreateFacultyDialog, FacultiesComponent } from './dashboard/Faculties/Faculties.component';
import { CreateGradeDialog, GradesComponent } from './dashboard/Grades/Grades.component';
import { CreateGroupDialog, GroupsComponent } from './dashboard/Groups/Groups.component';
import { CreateModuleDialog, ModulesComponent } from './dashboard/Modules/Modules.component';
import { CreatePrivilegeDialog, PrivilegesComponent } from './dashboard/Privileges/Privileges.component';
import { CreateSubjectDialog, SubjectsComponent } from './dashboard/Subjects/Subjects.component';
import { createUserPrivilegeDialog, UserPrivilegeComponent } from './dashboard/UserPrivileges/UserPrivileges.component';
import { LoginComponent } from './Login/Login.component';
import { LogoutComponent } from './Logout/Logout.component';
import { RegisterComponent } from './Register/Register.component';
import { RequestPasswordComponent } from './RequestPassword/RequestPassword.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
import { CalendarComponent } from './dashboard/Calendar/Calendar.component';
import { PagesComponent } from './pages/pages.component';
import { TeachersComponent } from './Teachers/Teachers.component';
import { CreateTrainingDialog, TrainingsComponent } from './dashboard/Trainings/Trainings.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [					
      CalendarComponent,																															
      AppComponent,
      UsersComponent,
      HomeComponent,
      SideNavComponent,
      UsersComponent,
      AssignmentsComponent,
      AttendancesComponent,
      TrainingsComponent,
      EventsComponent,
      EventsComponent,
      FacultiesComponent,
      GradesComponent,
      GroupsComponent,
      ModulesComponent,
      PrivilegesComponent,
      SubjectsComponent,
      UserPrivilegeComponent,
      CreateUserDialog,
      CreateAttendanceDialog,
      CreateAssignmentDialog,
      CreateEventDialog,
      CreateFacultyDialog,
      CreateGradeDialog,
      CreateGroupDialog,
      CreatePrivilegeDialog,
      CreateSubjectDialog,
      CreateModuleDialog,
      CreateTrainingDialog,
      createUserPrivilegeDialog,
      LoginComponent,
      LogoutComponent,
      RegisterComponent,
      RequestPasswordComponent,
      ResetPasswordComponent,
      PagesComponent,
      TeachersComponent
   ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
