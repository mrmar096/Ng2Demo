import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {ListComponent, ProductPipe} from '../shared/components/list/list.component';
import {DataService} from '../shared/services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ProductComponent,
    ProductPipe],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
