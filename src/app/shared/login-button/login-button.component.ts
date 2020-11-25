import { Component } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent  {
  isLoggedIn: boolean = false;

  constructor() { }

  click() {
    // Initiate login action if the user is logged in then we just need to display different information
  }
}
