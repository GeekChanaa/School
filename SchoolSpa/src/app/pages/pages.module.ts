import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { SideNavComponent } from '../SideNav/SideNav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './Navbar/Navbar.component';
import { HomeComponent } from './Home/Home.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports : [
    NavbarComponent,
  ],
  declarations: [
    PagesComponent,
    NavbarComponent,
    HomeComponent
  ]
})

export class PagesModule { }
