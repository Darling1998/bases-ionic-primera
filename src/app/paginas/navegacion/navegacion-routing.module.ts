import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacionPage } from './navegacion.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacionPageRoutingModule {}
