import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITipoDocumento } from 'src/app/commons/interfaces/tipo-documento.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class TipoDocumentosEndpoint {
  private readonly url = `${environment.apiExperience}/tipo-documento`;

  constructor(private httpClient: HttpClient) {}

  saveTipoDocumento(body: ITipoDocumento) {
    return this.httpClient.post(this.url, body);
  }

  getTipoDocumentos() {
    return this.httpClient.get<Array<ITipoDocumento>>(this.url);
  }

  deleteTipoDocumento(body: ITipoDocumento) {
    return this.httpClient.delete(`${this.url}/${body.id}`);
  }

  updateTipoDocumento(body: ITipoDocumento) {
    return this.httpClient.put<ITipoDocumento>(`${this.url}/${body.id}`, body);
  }
}
