import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private cartSvc: ShoppingCartService,
  ) {}

  async ngOnInit() {
    // Could not change this subscription for unwrap. broke many things.
    this.subscription = (await this.cartSvc.getCart()).subscribe(cart => {
      let temp: any;
      temp = cart.payload.child('/items').val();
      this.cart = new ShoppingCart(temp);
    });

    this.populateProducts();
  }

  private populateProducts() {
    this.productSvc
      .getAll()
      .pipe(
        switchMap(products => {
          let temp: any[];
          temp = products;
          this.products = temp;
          return this.route.queryParamMap;
        }),
      )
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts =
      this.category ? this.products.filter(p => p.category === this.category) :
      this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
