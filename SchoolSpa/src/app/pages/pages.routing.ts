import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'About', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule{
  
}
