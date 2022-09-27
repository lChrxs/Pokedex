import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements /*CanActivate,*/ CanLoad {

  constructor(public authS: AuthService){ 
    console.log('servicio: ', this.authS)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('canActivate: ', this.authS.auth)
    return this.authS.auth;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      const ACCESS: boolean = false;
      console.log('canLoad: ', this.authS.auth)
    return this.authS.auth;
  }
}
