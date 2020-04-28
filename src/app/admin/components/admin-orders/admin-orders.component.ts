import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: [ './admin-orders.component.scss' ],
})
export class AdminOrdersComponent implements OnInit {
  orders$;
  constructor(private orderSvc: OrderService) {}

  ngOnInit() {
    this.orders$ = this.orderSvc.getOrders();
  }
}
