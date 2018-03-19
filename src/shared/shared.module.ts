import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterializeModule} from 'angular2-materialize';
import {ListComponent} from './components/list/list.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    RouterModule
  ],
  exports : [ListComponent, HeaderComponent],
  providers: [DataService, AuthGuardService, AuthService],
})
export class SharedModule { }
