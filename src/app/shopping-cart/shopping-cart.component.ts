import { Component, OnInit } from '@angular/core';
import { AdminAuthGuard } from '../admin-auth.guard';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.scss' ],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private guardSvc: AdminAuthGuard) {}

  ngOnInit() {}
}
