import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: [ './check-out.component.scss' ],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private cartSvc: ShoppingCartService) {}

  async ngOnInit() {
    const cart$ = await this.cartSvc.getCart();
    this.subscription = cart$.subscribe(cart => {
      let data: any;
      data = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
