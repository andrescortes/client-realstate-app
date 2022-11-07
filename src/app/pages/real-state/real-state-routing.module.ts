import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import('./pages/real-state-create/real-state-create.module').then(m => m.RealStateCreateModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/real-state-list/real-state-list.module').then(m => m.RealStateListModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealStateRoutingModule {
}
