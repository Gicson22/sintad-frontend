import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEntidad } from 'src/app/commons/interfaces/entidad.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class IdentidadEndpoint {
  private readonly url = `${environment.apiExperience}/entidad`;

  constructor(private httpClient: HttpClient) {}

  saveEntidad(body: IEntidad) {
    body = {
      ...body,
      tipo_contribuyente: { id: +body.tipo_contribuyente },
      tipo_documento: { id: +body.tipo_documento },
    };

    return this.httpClient.post(this.url, body);
  }

  getEntidades() {
    return this.httpClient.get<Array<IEntidad>>(this.url);
  }

  deleteEntidad(body: IEntidad) {
    return this.httpClient.delete(`${this.url}/${body.id}`);
  }

  updateEntidad(body: IEntidad) {
    body = {
      ...body,
      tipo_contribuyente: { id: +body.tipo_contribuyente },
      tipo_documento: { id: +body.tipo_documento },
    };

    return this.httpClient.put(`${this.url}/${body.id}`, body);
  }
}
