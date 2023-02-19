import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationContainer } from './authentication.container';
import { LoginContainer } from './components/login/login.container';
import { UsuarioContainer } from './components/usuario/usuario.container';

const route: Routes = [
  {
    path: '',
    component: AuthenticationContainer,
    children: [
      {
        path: 'login',
        component: LoginContainer,
      },
      {
        path: 'usuario',
        component: UsuarioContainer,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/authentication/login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AuthenticationRouting {}
