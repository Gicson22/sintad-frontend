import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from 'src/app/commons/interfaces/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioEndpoint {
  private readonly url = `${environment.apiExperience}/usuario`;

  constructor(private httpClient: HttpClient) {}

  saveUsuario(body: IUsuario) {
    return this.httpClient.post(this.url, body);
  }
}
