import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AngularFireAuth) {}

  //
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    try {
      const user = await this.auth.currentUser;
      const isLoggedIn = !!user;
      if (!isLoggedIn)
        return false
      return true;
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
