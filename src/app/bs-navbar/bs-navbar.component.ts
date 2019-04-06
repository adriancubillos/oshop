import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: [ './bs-navbar.component.scss' ],
})
export class BsNavbarComponent {
  appUser: AppUser;
  constructor(private authSvc: AuthService) {
    authSvc.appUser$.subscribe(appUser => (this.appUser = appUser));
  }

  logout() {
    this.authSvc.logout();
  }
}
