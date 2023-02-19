import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITipoContribuyente } from 'src/app/commons/interfaces/tipo-contribuyente.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class TipoContribuyentesEndpoint {
  private readonly url = `${environment.apiExperience}/tipo-contribuyente`;

  constructor(private httpClient: HttpClient) {}

  saveTipoContribuyente(body: ITipoContribuyente) {
    return this.httpClient.post(this.url, body);
  }

  getTipoContribuyentes() {
    return this.httpClient.get<Array<ITipoContribuyente>>(this.url);
  }

  deleteTipoContribuyente(body: ITipoContribuyente) {
    return this.httpClient.delete(`${this.url}/${body.id}`);
  }

  updateTipoContribuyente(body: ITipoContribuyente) {
    return this.httpClient.put<ITipoContribuyente>(
      `${this.url}/${body.id}`,
      body
    );
  }
}
