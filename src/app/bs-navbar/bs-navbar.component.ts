import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: [ './bs-navbar.component.scss' ],
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private authSvc: AuthService, private cartSvc: ShoppingCartService) {}

  async ngOnInit() {
    this.authSvc.appUser$.subscribe(appUser => (this.appUser = appUser));
    this.cart$ = (await this.cartSvc.getCart()).pipe(map(x => new ShoppingCart(x.items)));
  }

  logout() {
    this.authSvc.logout();
  }
}
