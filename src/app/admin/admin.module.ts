import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular7-data-table';
import { AdminRoutingModule } from './admin-routing-module';

@NgModule({
  declarations: [ ProductFormComponent, AdminProductsComponent, AdminOrdersComponent ],
  imports: [ SharedModule, AdminRoutingModule ],
})
export class AdminModule {}
