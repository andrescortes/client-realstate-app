import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStateRoutingModule } from './real-state-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RealStateRoutingModule,
    StoreModule.forFeature('realState', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class RealStateModule {
}
