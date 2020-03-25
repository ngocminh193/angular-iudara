import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
@Input('data') product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
