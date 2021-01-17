import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './Teachers.component';
import { RouterModule } from '@angular/router';
import { TeachersRoutingModule } from './Teachers.routing';
import { SideNavComponent } from '../SideNav/SideNav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    TeachersComponent,
  ]
})

export class TeachersModule { }
