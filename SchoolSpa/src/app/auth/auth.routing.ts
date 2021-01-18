import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { LogoutComponent } from './Logout/Logout.component';
import { RegisterComponent } from './Register/Register.component';
import { RequestPasswordComponent } from './RequestPassword/RequestPassword.component';
import { ResetPasswordComponent } from './ResetPassword/ResetPassword.component';

const routes: Routes = [
    { path : 'logout', component : LogoutComponent},
    { path : 'login', component : LoginComponent},
    { path : 'register', component : RegisterComponent},
    { path : 'requestPassword', component : RequestPasswordComponent},
    { path : 'resetPassword', component : ResetPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule{
  
}
