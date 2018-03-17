import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {ShopComponent} from './shop.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ShopDetailComponent} from './shop-detail/shop-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ShopComponent,
        path: 'shop',
        canActivate: [
          AuthGuardService
        ],
        children: [
          { path: '', redirectTo: 'global', pathMatch: 'full' },
          { path: 'list', redirectTo: 'global', pathMatch: 'full' },
          { path: 'detail', redirectTo: 'global', pathMatch: 'full' },
          { path: 'list', component: ShopListComponent },
          { path: 'detail/:id', component: ShopDetailComponent }
        ]
      }
    ])
  ],

  exports: [RouterModule]
})
export class ShopRoutingModule { }
