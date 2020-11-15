import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadoDetailsPageRoutingModule } from './empleado-details-routing.module';

import { EmpleadoDetailsPage } from './empleado-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoDetailsPageRoutingModule
  ],
  declarations: [EmpleadoDetailsPage]
})
export class EmpleadoDetailsPageModule {}
