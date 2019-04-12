import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreRoutingModule } from './core-routing-module';

@NgModule({
  declarations: [ BsNavbarComponent, HomeComponent, LoginComponent ],
  imports: [ CommonModule, NgbModule, CoreRoutingModule ],
  exports: [ BsNavbarComponent ],
})
export class CoreModule {}
