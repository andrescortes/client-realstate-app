import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealStateCreateComponent } from './real-state-create.component';

const routes: Routes = [
  {
    path: '',
    component: RealStateCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateCreateRoutingModule {
}
