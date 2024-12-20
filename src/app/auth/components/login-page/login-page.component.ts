import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',

  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {

  }
  onLogin(): void {
    this.authService.login();
    this.router.navigateByUrl('/facesnaps')
  }
}
