import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private isLogged = true;
  constructor(
    private router: Router,
  ) { }

  checkLogged(): boolean {
    return this.isLogged;
  }
  login () {
    this.isLogged = true;
  }
  logout () {
    this.isLogged = false;
  }
}

