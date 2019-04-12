import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular7-data-table';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: [ './admin-products.component.scss' ],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount = 0;
  limits = [ 5, 10, 25, 50, 100 ];

  constructor(private productSvc: ProductService) {
    // this.subscription = this.productSvc
    //   .getAll()
    //   .subscribe(products => {
    //     this.products = products;
    //     this.initializeTable(products);
    //   });

    this.subscription = this.productSvc.getAll().subscribe(products => {
      const temp: any[] = products;
      this.products = temp;
      this.initializeTable(this.products);
    });
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ limit: 10, offset: 0 }).then(items => (this.items = items));
    this.tableResource.count().then(count => (this.itemCount = count));
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params).then(items => (this.items = items));
  }

  filter(query: string) {
    const filteredProducts = query
      ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : this.products;

    this.initializeTable(filteredProducts);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}
}
