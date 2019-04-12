import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private db: AngularFireDatabase, private cartSvc: ShoppingCartService) {}

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.cartSvc.clearCart();
    return result;
  }
}
