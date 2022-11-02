import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import('./real-state-create/real-state-create.module').then(m => m.RealStateCreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./real-state-list/real-state-list-routing.module').then(m => m.RealStateListRoutingModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateRoutingModule {
}
