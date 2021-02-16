import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './Teachers.component';
import { RouterModule } from '@angular/router';
import { TeachersRoutingModule } from './Teachers.routing';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarComponent } from '../Teachers/Calendar/Calendar.component';
import { HomeComponent } from '../Teachers/Home/Home.component';
import { NavbarTComponent } from './NavbarT/NavbarT.component';
import { SidebarTComponent } from './SidebarT/SidebarT.component';
import { CourseCardComponent } from './CourseCard/CourseCard.component';
import { SubjectComponent } from './Subject/Subject.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FullCalendarModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatOptionModule
  ],
  declarations: [	
    TeachersComponent,
    CalendarComponent,
    HomeComponent,
    NavbarTComponent,
    SidebarTComponent,
    CourseCardComponent,
    SubjectComponent,
    
   ]
})

export class TeachersModule { }
