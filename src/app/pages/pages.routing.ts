import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: 'dashboard',
      component: PagesComponent,
      children: [
        { path: '', component: DashboardComponent},
        { path: 'invoices', component: InvoicesComponent},
        { path: 'users', component: UsersComponent},
        { path: 'products', component: ProductsComponent},
        { path: 'product/:id', component: ProductComponent}
        // { path: 'product/:id', component: ProductComponent}
  ]} 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
