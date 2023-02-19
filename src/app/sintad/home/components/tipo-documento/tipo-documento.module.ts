import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDocumentoComponent } from './tipo-documento.component';
import { TipoDocumentoContainer } from './tipo-documento.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoDocumentoComponent, TipoDocumentoContainer],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TipoDocumentoContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TipoDocumentoModule {}
