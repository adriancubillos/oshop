import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: any;
  subscription: Subscription;

  constructor(route: ActivatedRoute, productSvc: ProductService, private cartSvc: ShoppingCartService) {
    productSvc
      .getAll()
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .pipe(
        switchMap(products => {
          this.products = products;
          return route.queryParamMap;
        }),
      )
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts =
          this.category ? this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.cartSvc.getCart()).subscribe(cart => (this.cart = cart));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
