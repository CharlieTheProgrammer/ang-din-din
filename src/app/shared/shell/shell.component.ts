import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isAuthenticated: boolean = false;
  authSub: Subscription;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    // authState is an observable that is triggered when the user logs in or out. 
    // Creating a subscription to it.
    this.authSub = this.auth.authState.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
