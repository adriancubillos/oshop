import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard {
  constructor(private authSvc: AuthService, private userSvc: UserService) {}

  canActivate(): Observable<boolean> {
    return this.authSvc.appUser$.pipe(map(appUser => appUser.isAdmin));
  }
}
