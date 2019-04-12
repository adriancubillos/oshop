import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/order';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: [ './shipping-form.component.scss' ],
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  userSubscription: Subscription;

  constructor(private authSvc: AuthService, private orderSvc: OrderService, private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.authSvc.user$.subscribe(user => (this.userId = user.uid));
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderSvc.placeOrder(order);
    this.router.navigate([ '/order-success', result.key ]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
