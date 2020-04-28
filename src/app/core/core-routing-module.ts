import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CoreRoutingModule {}
