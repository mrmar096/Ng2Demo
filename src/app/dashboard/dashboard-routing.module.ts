import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: DashboardComponent,
        path: 'dashboard',

        canActivate: [
            AuthGuardService
        ],
      }
    ])
  ],

  exports: [RouterModule]
})
export class DashboardRoutingModule { }
