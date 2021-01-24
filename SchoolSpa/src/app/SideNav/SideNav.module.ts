import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './SideNav.component';
import { MatNavList } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [					  
    SideNavComponent,					
   ],
  imports: [
    MatNavList,
    MatSidenav,
  ],
})
export class SideNavModule { }
