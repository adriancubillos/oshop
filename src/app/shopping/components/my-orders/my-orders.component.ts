import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: [ './my-orders.component.scss' ],
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(private authSvc: AuthService, private orderSvc: OrderService) {}

  ngOnInit() {
    this.orders$ = this.authSvc.user$.pipe(switchMap(u => this.orderSvc.getOrdersByUser(u.uid)));
  }
}
