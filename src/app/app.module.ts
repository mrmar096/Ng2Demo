import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {ListComponent, ProductPipe} from '../shared/components/list/list.component';
import {ProductsService} from '../shared/services/products.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
