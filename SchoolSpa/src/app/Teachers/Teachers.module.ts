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

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
  ],
  declarations: [
    TeachersComponent,
    CalendarComponent,
    HomeComponent,
    NavbarTComponent,
    SidebarTComponent
  ]
})

export class TeachersModule { }
