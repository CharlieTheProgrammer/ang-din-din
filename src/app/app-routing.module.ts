import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dash/dash.module').then((m) => m.DashModule),
    // This one controls whether  specific route can be accessed.
    canActivate: [AuthGuard],
    // This one controls whether a route and its children can be accessed
    // canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
