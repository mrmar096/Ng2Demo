import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {ListComponent, ProductPipe} from '../shared/components/list/list.component';
import {DataService} from '../shared/services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product/product.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ProductModule} from './product/product.module';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {AuthService} from '../shared/services/auth.service';
import {ShopModule} from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    ProductModule,
    ShopModule,
  ],
  providers: [DataService, AuthGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
