import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: [ './product-filter.component.scss' ],
})
export class ProductFilterComponent implements OnInit {
  categories$;
  // tslint:disable-next-line: no-input-rename
  @Input('category') category;

  constructor(categorySvc: CategoryService) {
    this.categories$ = categorySvc.getAll();
  }

  ngOnInit() {}
}
