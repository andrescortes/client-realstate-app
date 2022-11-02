import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStateListRoutingModule } from './real-state-list-routing.module';
import { RealStateListComponent } from './real-state-list.component';


@NgModule({
  declarations: [
    RealStateListComponent
  ],
  imports: [
    CommonModule,
    RealStateListRoutingModule
  ]
})
export class RealStateListModule { }
