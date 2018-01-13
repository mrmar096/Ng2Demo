import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {ListComponent} from '../shared/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
