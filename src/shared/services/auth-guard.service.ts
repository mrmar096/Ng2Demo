import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  private checkLogin() {
    console.log(`AuthService ${this.authService.checkLogged()}`);
    if (this.authService.checkLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
