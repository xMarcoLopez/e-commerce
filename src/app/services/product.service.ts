import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = `${base_url}/products/`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL);
  }

  findProductById(){

  }
  saveProduct(product: Product) {
    return this.http.post(this.productURL, product);
  }

  updateProduct(){

  }

  deleteProduct(){
    
  }
}
