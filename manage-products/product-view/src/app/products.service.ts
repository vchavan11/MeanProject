import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  // . . . Get all the Products . . . <Product>
  getProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }

  // . . . add Product . . .
  addProduct(newProduct) {
    return this.http.post('http://localhost:3000/api/product', newProduct);
  }
}