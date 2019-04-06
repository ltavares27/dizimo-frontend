import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class LoginService implements OnInit {

  logged: boolean;

  constructor() { }

  ngOnInit(): void {
    this.logged = true;
  }

  userIsLoggedIn() {
    return true;
  }

  setUserLoggedIn(userLogged: boolean): void {
    console.log(userLogged)
    this.logged = userLogged;
  }
}
