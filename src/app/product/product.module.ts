import { NgModule } from '@angular/core';
import {ProductComponent} from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [ProductRoutingModule],
  providers: [],
  bootstrap: [],
  exports: [ProductComponent]
})
export class ProductModule { }
