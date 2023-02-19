import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { IUsuario } from 'src/app/commons/interfaces/usuario.interface';
import { UsuarioEndpoint } from '../../endpoints/usuario.endpoint';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.container.html',
  styleUrls: ['./usuario.container.scss'],
})
export class UsuarioContainer implements OnInit {
  public createdSuccefully: boolean = false;

  constructor(
    private usuarioEndpoint: UsuarioEndpoint,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSaveUsuario(data: IUsuario): void {
    this.usuarioEndpoint
      .saveUsuario(data)
      .pipe(tap(() => (this.createdSuccefully = true)))
      .subscribe();
  }

  public onGoToLogin(): void {
    this.router.navigate(['authentication/login']);
  }
}
