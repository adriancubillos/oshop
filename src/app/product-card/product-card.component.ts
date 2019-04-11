import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: [ './product-card.component.scss' ],
})
export class ProductCardComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: Product;
  // tslint:disable-next-line: no-input-rename
  @Input('show-actions') showActions = true;
  // tslint:disable-next-line: no-input-rename
  @Input('shopping-cart') shoppingCart;

  constructor(private cartSvc: ShoppingCartService) {}

  addToCart() {
    this.cartSvc.addToCart(this.product);
  }

  removeFromCart() {
    this.cartSvc.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) {
      return 0;
    }
    const item = this.shoppingCart.itemsMap[this.product.key];

    const res =
      item ? item.quantity :
      0;

    return res;
  }
}
