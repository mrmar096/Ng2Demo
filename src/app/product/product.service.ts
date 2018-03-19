import {Injectable} from '@angular/core';
import {DataService} from '../../shared/services/data.service';

@Injectable()
export class ProductService {

  constructor(private service: DataService) {}

  getProducts()  {
    const products = this.service.get('product');
  }
}
