import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular7-data-table';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
@NgModule({
  declarations: [ ProductCardComponent, ProductQuantityComponent ],
  imports:
    [
      CommonModule,
      FormsModule,
      NgbModule,
      CustomFormsModule,
      DataTableModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NgbModule,
      FormsModule,
      CustomFormsModule,
      DataTableModule.forRoot(),
      FontAwesomeModule,
    ],
  providers: [ AuthService, UserService, CategoryService, ProductService, ShoppingCartService, OrderService ],
  exports:
    [
      ProductCardComponent,
      ProductQuantityComponent,
      CommonModule,
      FormsModule,
      NgbModule,
      CustomFormsModule,
      DataTableModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NgbModule,
      FormsModule,
      CustomFormsModule,
      DataTableModule.forRoot().ngModule,
      FontAwesomeModule,
    ],
})
export class SharedModule {}
