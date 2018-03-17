import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
