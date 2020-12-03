import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AngularFireAuth,
    private toast: ToastService,
    private router: Router
  ) {}

  // Controls whether a specific route can be accessed.
  // This would be used for better granularity of access. ie, can't access super admin pages in admin module.
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      const user = await this.auth.currentUser;
      const isLoggedIn = !!user;
      if (!isLoggedIn) {
        this.toast
          .permissionDenied()
          .afterDismissed()
          .subscribe(() => {
            this.router.navigateByUrl('/user/login');
          });
        return false;
      }
      return isLoggedIn;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Controls whether the route and children can be accessed.
  // This would be good for a blanket rule against an entire module, ie admin module.
  canLoad(route: Route): boolean {
    return false;
  }
}
