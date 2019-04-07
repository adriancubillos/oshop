import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: [ './product-form.component.sass' ],
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorySvc: CategoryService,
    private productSvc: ProductService,
  ) {
    this.categories$ = categorySvc.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productSvc.get(this.id).pipe(take(1)).subscribe(p => (this.product = p));
    }
  }

  ngOnInit() {}

  save(product) {
    if (this.id) {
      this.productSvc.update(this.id, product);
    } else {
      this.productSvc.create(product);
    }
    this.router.navigate([ '/admin/products' ]);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    this.productSvc.delete(this.id);
    this.router.navigate([ '/admin/products' ]);
  }
}
