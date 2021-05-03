import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
  
}
