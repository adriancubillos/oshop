import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: [ './product-quantity.component.scss' ],
})
export class ProductQuantityComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: Product;
  // tslint:disable-next-line: no-input-rename
  @Input('shopping-cart') shoppingCart;

  constructor(private cartSvc: ShoppingCartService) {}

  addToCart() {
    this.cartSvc.addToCart(this.product);
  }

  removeFromCart() {
    this.cartSvc.removeFromCart(this.product);
  }
}