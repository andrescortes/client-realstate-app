import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealStateListComponent } from './real-state-list.component';

const routes: Routes = [
  {
    path: '',
    component: RealStateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateListRoutingModule {
}
