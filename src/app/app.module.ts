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

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ AppComponent ],
  imports:
    [
      BrowserModule,
      SharedModule,
      AppRoutingModule,
      AdminModule,
      ShoppingModule,
      CoreModule,
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
