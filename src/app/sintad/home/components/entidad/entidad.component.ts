import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IEntidad } from 'src/app/commons/interfaces/entidad.interface';
import { ITipoContribuyente } from 'src/app/commons/interfaces/tipo-contribuyente.interface';
import { ITipoDocumento } from 'src/app/commons/interfaces/tipo-documento.interface';
import { EntidadForm } from './entidad.form';

@Component({
  selector: 'app-entidad-ui',
  templateUrl: './entidad.component.html',
  styleUrls: ['./entidad.component.scss'],
})
export class EntidadComponent implements OnInit {
  @Input() entidades: Array<IEntidad> = [];
  @Input() tiposDocumentos: Array<ITipoDocumento> = [];
  @Input() tiposContribuyentes: Array<ITipoContribuyente> = [];

  @Output() public readonly saveEntidad: EventEmitter<IEntidad>;
  @Output() public readonly deleteEntidad: EventEmitter<IEntidad>;
  @Output() public readonly updateEntidad: EventEmitter<IEntidad>;
  form: FormGroup = EntidadForm();

  constructor() {
    this.saveEntidad = new EventEmitter<IEntidad>();
    this.deleteEntidad = new EventEmitter<IEntidad>();
    this.updateEntidad = new EventEmitter<IEntidad>();
  }

  ngOnInit(): void {}

  public saveData() {
    this.saveEntidad.emit(this.form.value);
    this.form.reset({
      tipo_contribuyente: '',
      tipo_documento: '',
      estado: true,
    });
  }

  public clickDeleteEntidad(data: IEntidad): void {
    this.deleteEntidad.emit(data);
  }

  public clickUpdateEntidad(entidad: IEntidad): void {
    this.form.patchValue({
      ...entidad,
      tipo_contribuyente: entidad.tipo_contribuyente.id,
      tipo_documento: entidad.tipo_documento.id,
    });
  }
}
