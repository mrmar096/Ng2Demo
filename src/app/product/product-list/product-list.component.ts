import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  private listProducts;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts = this.productService.getProducts();
  }

}
