import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Common } from './common';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (localStorage.getItem('user_id')) {
      return true;
    }
    Common.Dlog(state.url);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
