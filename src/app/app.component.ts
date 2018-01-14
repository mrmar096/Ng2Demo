import {Component} from '@angular/core';
import {ProductsService} from '../shared/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private productService: ProductsService;
  constructor(productService: ProductsService) {
    this.productService = productService;
  }
  private listProducts: Array<any>;
  cambiaLaLista() {
    this.listProducts.reverse();
  }
  cargarLista() {
    this.listProducts = this.productService.getData();
  }
}

