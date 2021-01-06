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

  constructor(private http: HttpClient) { }

   getProducts(): Observable<Product[]> {
    const url = `${base_url}/products`;
    return this.http.get<Product[]>(url);
  } 

}
