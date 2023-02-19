import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationContainer } from './presentation.container';

@NgModule({
  declarations: [PresentationComponent, PresentationContainer],
  imports: [CommonModule],
  exports: [PresentationContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PresentationModule {}
