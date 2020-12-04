import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesPageComponent } from './views/recipes-page/recipes-page.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RecipePageComponent } from './views/recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RecipesPageComponent,
    RecipePageComponent,
    RecipeListItemComponent,
  ],
  imports: [CommonModule, DashRoutingModule, SharedModule, EditorModule],
})
export class DashModule {}
