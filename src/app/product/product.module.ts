import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {ProductComponent} from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductRoutingModule} from './product-routing.module';
import {ListComponent} from '../../shared/components/list/list.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductService} from './product.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [ProductRoutingModule, SharedModule],
  providers: [ProductService],
  bootstrap: [],
  exports: [ProductComponent]
})
export class ProductModule { }
