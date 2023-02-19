import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IEntidad } from 'src/app/commons/interfaces/entidad.interface';
import { ITipoContribuyente } from 'src/app/commons/interfaces/tipo-contribuyente.interface';
import { ITipoDocumento } from 'src/app/commons/interfaces/tipo-documento.interface';
import { IdentidadEndpoint } from '../../endpoints/entidad.endpoint';
import { TipoContribuyentesEndpoint } from '../../endpoints/tipo-contribuyente.endpoint';
import { TipoDocumentosEndpoint } from '../../endpoints/tipo-documento.endpoint';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.container.html',
  styleUrls: ['./entidad.container.scss'],
})
export class EntidadContainer implements OnInit {
  public entidades: Array<IEntidad> = [];
  public tiposDocumentos: Array<ITipoDocumento> = [];
  public tiposContribuyentes: Array<ITipoContribuyente> = [];

  constructor(
    private identidadEndpoint: IdentidadEndpoint,
    private tipoDocumentosEndpoint: TipoDocumentosEndpoint,
    private tipoContribuyentesEndpoint: TipoContribuyentesEndpoint
  ) {}

  ngOnInit(): void {
    this.getEntidades();
    this.getTipoDocumentos();
    this.getTipoContribuyentes();
  }

  public getTipoDocumentos() {
    this.tipoDocumentosEndpoint
      .getTipoDocumentos()
      .pipe(
        tap(
          (tiposDocumentos: Array<ITipoDocumento>) =>
            (this.tiposDocumentos = tiposDocumentos)
        )
      )
      .subscribe();
  }

  public getTipoContribuyentes() {
    this.tipoContribuyentesEndpoint
      .getTipoContribuyentes()
      .pipe(
        tap(
          (tiposContribuyentes: Array<ITipoContribuyente>) =>
            (this.tiposContribuyentes = tiposContribuyentes)
        )
      )
      .subscribe();
  }

  public getEntidades() {
    this.identidadEndpoint
      .getEntidades()
      .pipe(tap((entidades: Array<IEntidad>) => (this.entidades = entidades)))
      .subscribe();
  }

  public onSaveEntidad(data: IEntidad) {
    if (data.id) {
      this.identidadEndpoint
        .updateEntidad(data)
        .pipe(tap(() => this.getEntidades()))
        .subscribe();
    } else {
      this.identidadEndpoint
        .saveEntidad(data)
        .pipe(tap(() => this.getEntidades()))
        .subscribe();
    }
  }

  public onDeleteEntidad(data: IEntidad) {
    this.identidadEndpoint
      .deleteEntidad(data)
      .pipe(tap(() => this.getEntidades()))
      .subscribe();
  }
}
