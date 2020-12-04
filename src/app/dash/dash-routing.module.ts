import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RecipePageComponent } from './views/recipe-page/recipe-page.component';
import { RecipesPageComponent } from './views/recipes-page/recipes-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'recipes',
    component: RecipesPageComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule {}
