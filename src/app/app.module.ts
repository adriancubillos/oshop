import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular7-data-table';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations:
    [
      AppComponent,
      BsNavbarComponent,
      HomeComponent,
      ProductsComponent,
      ShoppingCartComponent,
      CheckOutComponent,
      OrderSuccessComponent,

      MyOrdersComponent,
      LoginComponent,

      ProductFilterComponent,

      ShoppingCartSummaryComponent,
      ShippingFormComponent,
    ],
  imports:
    [
      BrowserModule,
      SharedModule,
      AppRoutingModule,
      AdminModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NgbModule,
      FormsModule,
      CustomFormsModule,
      DataTableModule.forRoot(),
    ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
