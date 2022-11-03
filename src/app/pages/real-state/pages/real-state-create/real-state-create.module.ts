import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStateCreateRoutingModule } from './real-state-create-routing.module';
import { RealStateCreateComponent } from './real-state-create.component';


@NgModule({
  declarations: [
    RealStateCreateComponent
  ],
  imports: [
    CommonModule,
    RealStateCreateRoutingModule
  ]
})
export class RealStateCreateModule { }
