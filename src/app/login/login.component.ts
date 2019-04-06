import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    console.log('LoginComponent');
    this.loginService.setUserLoggedIn(true);
    this.router.navigate(['pessoa/listar']);
  }

  logout() {
    this.loginService.setUserLoggedIn(false);
    this.router.navigate(['login']);
  }
}
