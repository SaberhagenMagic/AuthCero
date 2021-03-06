import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
// Services
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    console.log(next);

    if(this.auth.isAuthenticated.value){
      console.log('Paso el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      return false;
    }
  }
}
