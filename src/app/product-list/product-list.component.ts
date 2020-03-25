import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(
    private productSevice: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

showDetail(product){
  this.selected = product;
  console.log(this.selected);
}
getProducts(){
 this.products = this.productSevice.getProducts();
}
}
