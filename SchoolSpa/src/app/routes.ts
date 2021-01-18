import {RouterModule, Routes} from '@angular/router';
import { RequestPasswordComponent } from './auth/RequestPassword/RequestPassword.component';
import { ResetPasswordComponent } from './auth/ResetPassword/ResetPassword.component';
import { LogoutComponent } from './auth/Logout/Logout.component';
import { RegisterComponent } from './auth/Register/Register.component';
import { LoginComponent } from './auth/Login/Login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { TeachersComponent } from './Teachers/Teachers.component';
import { AuthComponent } from './auth/auth.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}