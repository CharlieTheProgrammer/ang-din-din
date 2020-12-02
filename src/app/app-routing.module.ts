import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path:'dashboard', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
