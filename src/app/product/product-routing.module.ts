import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ProductComponent,
        path: 'product',
        canActivate: [
          AuthGuardService
        ],
        children: [
          { path: '', redirectTo: 'global', pathMatch: 'full' },
          { path: 'list', redirectTo: 'global', pathMatch: 'full' },
          { path: 'detail', redirectTo: 'global', pathMatch: 'full' },
          { path: 'list', component: ProductListComponent },
          { path: 'detail/:id', component: ProductDetailComponent }
        ]
      }
    ])
  ],

  exports: [RouterModule]
})
export class ProductRoutingModule { }
