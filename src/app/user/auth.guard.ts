import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AngularFireAuth) {}

  // Controls whether a specific route can be accessed.
  // This would be used for better granularity of access. ie, can't access super admin pages in admin module.
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

  // Controls whether the route and children can be accessed.
  // This would be good for a blanket rule against an entire module, ie admin module. 
  canLoad(route: Route): boolean {
    return false;
  }
}
