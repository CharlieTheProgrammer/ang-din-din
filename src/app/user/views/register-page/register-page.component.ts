import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  serverError: String = '';
  confirmPassword = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required]],
    }, {
      validators: this.doesPasswordMatch,
      updateOn: 'blur'
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm')
  }

  doesPasswordMatch(fg: FormGroup) {
    return fg.get('password').value === fg.get('passwordConfirm').value
    ? null
    : {'mismatch': true};
  }

  async onSubmit() {
    this.loading = true;
    // login using firebase login with email and password
    try {
      await this.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      this.serverError = error.message;
    }
    this.loading = false;
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, fg) : boolean {
    const passwordConfirm = fg.form.get('passwordConfirm');
    const password= fg.form.get('password');
    // Only run this validation after both of these fields have been touched.
    // Touched means field as gained and lost focus.
    if (passwordConfirm.touched && password.touched) {
      return password.value === passwordConfirm.value
      ? false
      : true;
    } else {
      return false;
    }
  }
}
