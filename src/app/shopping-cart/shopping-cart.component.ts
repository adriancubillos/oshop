import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { map } from 'rxjs/operators';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.scss' ],
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private cartSvc: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = (await this.cartSvc.getCart()).pipe(map(x => new ShoppingCart(x.items)));
  }
}
