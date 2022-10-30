import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnauthGuard} from 'src/app/guards/unauth/unauth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [UnauthGuard]//if you are in session you cannot navigate through those components
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [UnauthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
