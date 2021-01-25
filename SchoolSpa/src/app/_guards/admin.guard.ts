import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {
    
  }
  canActivate( ):  boolean {
    if(this.authService.isAdmin()){
      return true;
    }
    console.log("weird");
    this.router.navigate(['/']);

    return false;
  }
  
}
