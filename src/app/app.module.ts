import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ProductModule} from './product/product.module';
import {ShopModule} from './shop/shop.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    ProductModule,
    ShopModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
