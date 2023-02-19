import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationContainer } from './authentication.container';
import { AuthenticationRouting } from './authentication.routing';
import { LoginModule } from './components/login/login.module';
import { UsuarioModule } from './components/usuario/usuario.module';
import { UsuarioEndpoint } from './endpoints/usuario.endpoint';
import { LoginEndpoint } from './endpoints/login.endpoint';

@NgModule({
  declarations: [AuthenticationComponent, AuthenticationContainer],
  imports: [CommonModule, AuthenticationRouting, LoginModule, UsuarioModule],
  exports: [AuthenticationContainer],
  providers: [UsuarioEndpoint, LoginEndpoint],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthenticationModule {}
