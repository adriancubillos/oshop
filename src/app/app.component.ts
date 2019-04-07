import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'oshop';
  constructor(
    private authSvc: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userSvc: UserService,
  ) {
    authSvc.user$.subscribe(user => {
      if (!user) {
        return;
      }
      userSvc.save(user);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

      if (!returnUrl) {
        return;
      }
      router.navigateByUrl(returnUrl);
    });
  }
}
