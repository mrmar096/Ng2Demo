import {Component} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  login() {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
