import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { LoginEndpoint } from './endpoints/login.endpoint';
import { UsuarioEndpoint } from './endpoints/usuario.endpoint';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.container.html',
  styleUrls: ['./authentication.container.scss'],
})
export class AuthenticationContainer implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
