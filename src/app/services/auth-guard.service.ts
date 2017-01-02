import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{



  constructor(public authService: AuthService,public router: Router) { }

  canActivate(){
    if (this.authService.isLoggedIn()){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false
    }
  }

}
