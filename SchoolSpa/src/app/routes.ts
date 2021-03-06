import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { TeachersComponent } from './Teachers/Teachers.component';
import { AuthComponent } from './auth/auth.component';
import { StudentsComponent } from './students/students.component';
import { StudentGuard } from './_guards/student.guard';

export const appRoutes: Routes = [
    {
      path: 'dashboard',
      component : DashboardComponent,
      loadChildren: () => import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    },
    {
      path: '',
      component : PagesComponent,
      loadChildren: () => import('./pages/pages.module')
        .then(m => m.PagesModule),
    },
    {
      path: 'teachers',
      component : TeachersComponent,
      loadChildren: () => import('./Teachers/Teachers.module')
        .then(m => m.TeachersModule),
    },
    {
      path: 'auth',
      component : AuthComponent,
      loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule),
    },
    {
      path: 'students',
      component : StudentsComponent,
      loadChildren : () => import('./students/students.module')
        .then(m => m.StudentsModule),
    }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}