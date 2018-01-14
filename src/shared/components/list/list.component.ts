import {Component, EventEmitter, Input, Output, Pipe, PipeTransform} from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent {
  @Output() changeList = new EventEmitter();
  @Input() list: Array<any>;
}
@Pipe({name: 'productPipe'})
export class ProductPipe implements PipeTransform {
  transform(value: string): string {
    return 'Producto ' + value;
  }
}
