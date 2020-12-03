import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './views/home-page/home-page.component';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, GuestRoutingModule, SharedModule],
})
export class GuestModule {}
