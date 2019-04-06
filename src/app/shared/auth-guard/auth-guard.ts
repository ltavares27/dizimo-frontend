import { LoginService } from './../../login/login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log('Entrou no auth-guard');
        if (!this.loginService.userIsLoggedIn()) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
  }
}
