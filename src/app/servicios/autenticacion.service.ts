import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  registroUsuario(userdata) {
    return firebase.auth().createUserWithEmailAndPassword(userdata.email,
      userdata.password)
  }
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          console.log("NO entiendo nada, si dentro");
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          console.log("fuera");
          this.userDetails = null;
        }
      }
    );
  }

  inicioSesion(userdata) {
    return firebase.auth().signInWithEmailAndPassword(userdata.email,
      userdata.password)

  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.userDetails = null;
    this.user = null;
    firebase.auth().signOut();
  }

  isLogged() {
    return this.afAuth.authState;
  }
  getUser() {
    if (firebase.auth().currentUser)
      return firebase.auth().currentUser.email;
    else
      return null;
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          this.router.navigate(['/inicio']);
        })
    })
  }
}
