import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoContribuyenteComponent } from './tipo-contribuyente.component';
import { TipoContribuyenteContainer } from './tipo-contribuyente.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoContribuyenteComponent, TipoContribuyenteContainer],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TipoContribuyenteContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TipoContribuyenteModule {}
