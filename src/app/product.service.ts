import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  constructor() { }
  getProducts(){
    return this.products;
  }
}
