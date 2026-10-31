import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "@core/services/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class TypeAccountGuard implements CanActivate {

  loginService = inject(LoginService);
  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.loginService.currentAccount?.tipoCuenta == 'tienda'){
      return true;
    }

    return  this.router.createUrlTree(['/']);
  }

}
