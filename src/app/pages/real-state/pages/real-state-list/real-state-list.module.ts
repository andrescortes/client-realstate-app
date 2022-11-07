import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStateListRoutingModule } from './real-state-list-routing.module';
import { RealStateListComponent } from './real-state-list.component';
import { SpinnerModule } from '../../../../shared/indicators';


@NgModule({
  declarations: [
    RealStateListComponent
  ],
  imports: [
    CommonModule,
    RealStateListRoutingModule,
    SpinnerModule
  ]
})
export class RealStateListModule { }
