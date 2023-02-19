import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITipoContribuyente } from 'src/app/commons/interfaces/tipo-contribuyente.interface';
import { TipoContribuyenteForm } from './tipo-contribuyente.form';

@Component({
  selector: 'app-tipo-contribuyente-ui',
  templateUrl: './tipo-contribuyente.component.html',
  styleUrls: ['./tipo-contribuyente.component.scss'],
})
export class TipoContribuyenteComponent implements OnInit {
  @Input() tiposContribuyente: Array<ITipoContribuyente> = [];
  @Output() public readonly saveEntidad: EventEmitter<ITipoContribuyente>;
  @Output() public readonly deleteEntidad: EventEmitter<ITipoContribuyente>;
  @Output() public readonly updateEntidad: EventEmitter<ITipoContribuyente>;
  form: FormGroup = TipoContribuyenteForm();

  constructor() {
    this.saveEntidad = new EventEmitter<ITipoContribuyente>();
    this.deleteEntidad = new EventEmitter<ITipoContribuyente>();
    this.updateEntidad = new EventEmitter<ITipoContribuyente>();
  }

  ngOnInit(): void {}

  public saveData() {
    this.saveEntidad.emit(this.form.value);
    this.form.reset({
      estado: true,
    });
  }

  public clickDeleteTipoContribuyente(entidad: ITipoContribuyente) {
    this.deleteEntidad.emit(entidad);
  }

  public clickUpdateTipoContribuyente(entidad: ITipoContribuyente) {
    this.form.patchValue(entidad);
  }
}
