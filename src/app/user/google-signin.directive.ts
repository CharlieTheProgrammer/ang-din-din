import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase";

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private auth: AngularFireAuth) { }

  // The reason why we have this directive here is because we want to add this logic to any
  // html element that has the click event. The alternative is adding the click directly
  // into the parent component, but then at that point the logic wouldn't be centralized.
  @HostListener('click')
  async onClick() {
    try {
      let stuff = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(stuff);
    } catch (error) {
      // Do nothing
      // console.log('caught error', error);
    }
  }
}
