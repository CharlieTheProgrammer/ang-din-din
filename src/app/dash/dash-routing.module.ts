import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RecipesPageComponent } from './views/recipes-page/recipes-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'recipes', component: RecipesPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class DashRoutingModule { }
