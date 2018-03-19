import {Component, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [],
})

export class ProductComponent {
 constructor() {}
}
@Pipe({name: 'productPipe'})
export class ProductPipe implements PipeTransform {
  transform(value: string): string {
    return 'Producto ' + value;
  }
}
