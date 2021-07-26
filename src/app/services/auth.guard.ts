import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('user_info')) {
        const x = JSON.parse(localStorage.getItem('user_info'));
        if(x.token) return true;
      } else {
        this.router.navigate(['/auth/login']);
        return false;
      }
  }
  
}
