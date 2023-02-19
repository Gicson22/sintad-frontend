import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioContainer } from './usuario.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioComponent, UsuarioContainer],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UsuarioContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsuarioModule {}
