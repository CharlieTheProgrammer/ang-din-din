import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { RegisterPageComponent } from './views/register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    RegisterPageComponent,
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
