import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealStateCreateRoutingModule } from './real-state-create-routing.module';
import { RealStateCreateComponent } from './real-state-create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerModule } from 'src/app/shared/indicators';
import { EntityPhotoModule } from 'src/app/shared/layouts';
import { PopupsModule } from 'src/app/shared/popups';


@NgModule({
  declarations: [
    RealStateCreateComponent
  ],
  imports: [
    CommonModule,
    RealStateCreateRoutingModule,

    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    SpinnerModule,
    EntityPhotoModule,
    PopupsModule
  ]
})
export class RealStateCreateModule {
}
