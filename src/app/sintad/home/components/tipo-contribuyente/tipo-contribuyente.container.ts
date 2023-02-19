import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ITipoContribuyente } from 'src/app/commons/interfaces/tipo-contribuyente.interface';
import { TipoContribuyentesEndpoint } from '../../endpoints/tipo-contribuyente.endpoint';

@Component({
  selector: 'app-tipo-contribuyente',
  templateUrl: './tipo-contribuyente.container.html',
  styleUrls: ['./tipo-contribuyente.container.scss'],
})
export class TipoContribuyenteContainer implements OnInit {
  public tiposContribuyente: Array<ITipoContribuyente> = [];

  constructor(private tipoContribuyentesEndpoint: TipoContribuyentesEndpoint) {}

  ngOnInit(): void {
    this.getTiposContribuyente();
  }

  public getTiposContribuyente() {
    this.tipoContribuyentesEndpoint
      .getTipoContribuyentes()
      .pipe(
        tap(
          (tiposContribuyente: Array<ITipoContribuyente>) =>
            (this.tiposContribuyente = tiposContribuyente)
        )
      )
      .subscribe();
  }

  public onSaveTipoContribuyentes(data: ITipoContribuyente) {
    if (data.id) {
      this.tipoContribuyentesEndpoint
        .updateTipoContribuyente(data)
        .pipe(tap(() => this.getTiposContribuyente()))
        .subscribe();
    } else {
      this.tipoContribuyentesEndpoint
        .saveTipoContribuyente(data)
        .pipe(tap(() => this.getTiposContribuyente()))
        .subscribe();
    }
  }

  public onDeleteTipoContribuyentes(data: ITipoContribuyente) {
    this.tipoContribuyentesEndpoint
      .deleteTipoContribuyente(data)
      .pipe(tap(() => this.getTiposContribuyente()))
      .subscribe();
  }
}
