import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStateListRoutingModule } from './real-state-list-routing.module';
import { RealStateListComponent } from './real-state-list.component';
import { SpinnerModule } from 'src/app/shared/indicators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    RealStateListComponent
  ],
  imports: [
    CommonModule,
    RealStateListRoutingModule,
    SpinnerModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
  ],
})
export class RealStateListModule { }
