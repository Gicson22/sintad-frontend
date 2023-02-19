import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ITipoDocumento } from 'src/app/commons/interfaces/tipo-documento.interface';
import { TipoDocumentosEndpoint } from '../../endpoints/tipo-documento.endpoint';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.container.html',
  styleUrls: ['./tipo-documento.container.scss'],
})
export class TipoDocumentoContainer implements OnInit {
  public tiposDocumento: Array<ITipoDocumento> = [];

  constructor(private tipoDocumentosEndpoint: TipoDocumentosEndpoint) {}

  ngOnInit(): void {
    this.getTiposDocumento();
  }

  public getTiposDocumento() {
    this.tipoDocumentosEndpoint
      .getTipoDocumentos()
      .pipe(
        tap(
          (tiposDocumento: Array<ITipoDocumento>) =>
            (this.tiposDocumento = tiposDocumento)
        )
      )
      .subscribe();
  }

  public onSaveTiposDocumento(data: ITipoDocumento) {
    if (data.id) {
      this.tipoDocumentosEndpoint
        .updateTipoDocumento(data)
        .pipe(tap(() => this.getTiposDocumento()))
        .subscribe();
    } else {
      this.tipoDocumentosEndpoint
        .saveTipoDocumento(data)
        .pipe(tap(() => this.getTiposDocumento()))
        .subscribe();
    }
  }

  public onDeleteTiposDocumento(data: ITipoDocumento) {
    this.tipoDocumentosEndpoint
      .deleteTipoDocumento(data)
      .pipe(tap(() => this.getTiposDocumento()))
      .subscribe();
  }
}
