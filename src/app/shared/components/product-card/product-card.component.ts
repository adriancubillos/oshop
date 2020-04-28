import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

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
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartSvc: ShoppingCartService) {}

  addToCart() {
    this.cartSvc.addToCart(this.product);
  }
}
