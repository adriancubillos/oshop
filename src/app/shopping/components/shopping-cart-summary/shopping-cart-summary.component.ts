import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: [ './shopping-cart-summary.component.scss' ],
})
export class ShoppingCartSummaryComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('cart') cart: ShoppingCart;
}
