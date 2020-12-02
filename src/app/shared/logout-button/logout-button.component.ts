import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent {

  constructor(private auth:AngularFireAuth, private router: Router) { }

  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl('/');
  }
}
