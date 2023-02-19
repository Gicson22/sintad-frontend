import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITipoDocumento } from 'src/app/commons/interfaces/tipo-documento.interface';
import { TipoDocumentoForm } from './tipo-documento.form';

@Component({
  selector: 'app-tipo-documento-ui',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.scss'],
})
export class TipoDocumentoComponent implements OnInit {
  @Input() tiposDocumento: Array<ITipoDocumento> = [];

  @Output() public readonly saveEntidad: EventEmitter<ITipoDocumento>;
  @Output() public readonly deleteEntidad: EventEmitter<ITipoDocumento>;
  @Output() public readonly updateEntidad: EventEmitter<ITipoDocumento>;
  form: FormGroup = TipoDocumentoForm();

  constructor() {
    this.saveEntidad = new EventEmitter<ITipoDocumento>();
    this.deleteEntidad = new EventEmitter<ITipoDocumento>();
    this.updateEntidad = new EventEmitter<ITipoDocumento>();
  }

  ngOnInit(): void {}

  public saveData(): void {
    this.saveEntidad.emit(this.form.value);
    this.form.reset({
      estado: true,
    });
  }

  public clickDeleteTiposDocumento(entidad: ITipoDocumento): void {
    this.deleteEntidad.emit(entidad);
  }

  public clickUpdateTiposDocumento(entidad: ITipoDocumento): void {
    this.form.patchValue(entidad);
  }
}
