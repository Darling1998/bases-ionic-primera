import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoDetailsPage } from './empleado-details.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoDetailsPageRoutingModule {}
