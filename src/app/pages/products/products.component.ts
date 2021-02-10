import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(){
      this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe( resp => {
          this.products = resp;
    });
  }

  findProductById(){
    
      
  }

  updateProduct(){

  }

  deleteProduct(product: Product, id: number){
    Swal.fire({
      title: '!CUIDADO!',
      html: `¿Está seguro que desea borrar <b>${product.name}</b>?`,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.productService.deleteProduct(product.id).subscribe();
      }
    });
    this.findProductById();
  }
}
