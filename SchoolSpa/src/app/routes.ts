import {RouterModule, Routes} from '@angular/router';
import { RequestPasswordComponent } from './RequestPassword/RequestPassword.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';
import { LogoutComponent } from './Logout/Logout.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { TeachersComponent } from './Teachers/Teachers.component';

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
        children: [
          {
            path: '',
            component: LoginComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'register',
            component: RegisterComponent,
          },
          {
            path: 'request-password',
            component: RequestPasswordComponent,
          },
          {
            path: 'reset-password',
            component: ResetPasswordComponent,
          },
        ],
      },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}