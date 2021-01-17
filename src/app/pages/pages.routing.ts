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
        { path: '', component: DashboardComponent, data: { title: 'Dashboard'}},
        { path: 'invoices', component: InvoicesComponent, data: { title: 'Facturas'}},
        { path: 'users', component: UsersComponent, data: { title: 'Usuarios'}},
        { path: 'products', component: ProductsComponent, data: { title: 'Productos'}},
        { path: 'product/:id', component: ProductComponent, data: { title: 'Crear Producto'}}
        // { path: 'product/:id', component: ProductComponent}
  ]} 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
