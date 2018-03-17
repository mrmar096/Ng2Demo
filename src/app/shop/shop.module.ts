import {NgModule} from '@angular/core';
import {ShopRoutingModule} from './shop-routing.module';
import {ShopComponent} from './shop.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ShopDetailComponent} from './shop-detail/shop-detail.component';

@NgModule({
  declarations: [
    ShopComponent,
    ShopListComponent,
    ShopDetailComponent
  ],
  imports: [ShopRoutingModule],
  providers: [],
  bootstrap: []
})
export class ShopModule { }
