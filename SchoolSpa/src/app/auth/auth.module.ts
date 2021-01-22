import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { PagesModule } from '../pages/pages.module';
import { NavbarComponent } from '../pages/Navbar/Navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule
  ],
  declarations: [
    AuthComponent,
  ]
})
export class AuthModule { }
