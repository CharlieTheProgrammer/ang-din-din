import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesPageComponent } from './views/recipes-page/recipes-page.component';


@NgModule({
  declarations: [DashboardComponent, RecipesPageComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
