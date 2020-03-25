import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
getProduct(){
  this.products = this.productService.getProducts();
}
detailProduct(product){
  this.selected = product;
}
removeItem(id){
  this.products = this.products.filter(products => products.id != id);
}
}
