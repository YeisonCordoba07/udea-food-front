import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "@core/services/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  loginService = inject(LoginService);
  router = inject(Router);


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.isLogged){
      return this.router.createUrlTree(['/']);
    }
    return true;

  }

}
