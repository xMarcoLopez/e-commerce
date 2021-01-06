import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    DashboardComponent,   
    PagesComponent, 
    UserComponent, 
    ProductComponent,
    InvoiceComponent
  ],
  exports: [
    DashboardComponent,   
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
