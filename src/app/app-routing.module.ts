import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './commons/guards/logged.guard';
import { LoggedGoHomeGuard } from './commons/guards/loggedGoHome.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./sintad/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [LoggedGoHomeGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./sintad/home/home.module').then((m) => m.HomeModule),
    canActivate: [LoggedGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'authentication/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
