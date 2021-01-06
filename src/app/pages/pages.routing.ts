import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
    { path: 'dashboard', 
      component: PagesComponent,
      children: [
        { path: '', component: DashboardComponent},
        { path: 'invoice', component: InvoiceComponent},
        { path: 'user', component: UserComponent},
        { path: 'product', component: ProductComponent}
  ]} 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
