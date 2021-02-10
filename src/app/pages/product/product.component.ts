import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private productService: ProductService, private router: Router) {
    this.createProductForm();
  }

  ngOnInit(): void {
  }

  get invalidName() {
    return this.productForm.get('name').invalid && this.productForm.get('name').touched;
  }

  get invalidPrice() {
    return this.productForm.get('price').invalid && this.productForm.get('price').touched;
  }

  get invalidAmount() {
    return this.productForm.get('amount').invalid && this.productForm.get('amount').touched;
  }

  createProductForm() {
    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
    this.productForm = this.fb.group({
      code: [''],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  saveProduct() {
    const product = new Product();
    if (this.productForm.invalid) {
      Object.values(this.productForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }
    product.name = this.productForm.get('name').value;
    product.price = this.productForm.get('price').value;
    product.amount = this.productForm.get('amount').value;
    this.productService.saveProduct(product).subscribe();
    this.router.navigate(['/dashboard/products']);
    // this.productForm.reset();

  }
}
