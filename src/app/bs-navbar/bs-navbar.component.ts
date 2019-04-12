import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: [ './bs-navbar.component.scss' ],
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(private authSvc: AuthService, private cartSvc: ShoppingCartService) {}

  async ngOnInit() {
    this.authSvc.appUser$.subscribe(appUser => (this.appUser = appUser));
    const cart$ = await this.cartSvc.getCart();
    cart$.subscribe(temp => {
      let data: any;
      data = temp.payload.child('/items').val();
      const cart = new ShoppingCart(data);
      this.shoppingCartItemCount = cart.totalItemsCount;
    });
  }

  logout() {
    this.authSvc.logout();
  }
}
