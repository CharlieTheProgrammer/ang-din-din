import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  serverError: String = ''

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  async onSubmit() {
    this.loading = true;
    // login using firebase login with email and password
    try {
      await this.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      this.serverError = error.message;
    }
    this.loading = false;
  }
}
