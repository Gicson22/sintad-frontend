import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadComponent } from './entidad.component';
import { EntidadContainer } from './entidad.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EntidadComponent, EntidadContainer],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EntidadContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EntidadModule {}
