import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { AppUser } from 'shared/models/app-user';
import { UserService } from 'shared/services/user.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private userSvc: UserService) {
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.userSvc.get(user.uid).valueChanges();
        }
        return of(null);
      }),
    );
  }
}
