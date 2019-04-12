import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.scss' ],
})
export class ShoppingCartComponent implements OnInit {
  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCartItemCount: number;

  constructor(private cartSvc: ShoppingCartService) {}

  async ngOnInit() {
    const cart$ = await this.cartSvc.getCart();
    cart$.subscribe(temp => {
      let data: any;
      data = temp.payload.child('/items').val();
      this.cart = new ShoppingCart(data);
      this.shoppingCartItemCount = this.cart.totalItemsCount;
    });
  }

  clearCart() {
    this.cartSvc.clearCart();
  }
}
