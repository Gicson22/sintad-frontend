import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeContainer } from './home.container';
import { HomeRouting } from './home.routing';
import { EntidadModule } from './components/entidad/entidad.module';
import { TipoDocumentoModule } from './components/tipo-documento/tipo-documento.module';
import { TipoContribuyenteModule } from './components/tipo-contribuyente/tipo-contribuyente.module';
import { RouterModule } from '@angular/router';
import { PresentationModule } from './components/presentation/presentation.module';
import { TipoDocumentosEndpoint } from './endpoints/tipo-documento.endpoint';
import { IdentidadEndpoint } from './endpoints/entidad.endpoint';
import { TipoContribuyentesEndpoint } from './endpoints/tipo-contribuyente.endpoint';

@NgModule({
  declarations: [HomeComponent, HomeContainer],
  imports: [
    CommonModule,
    HomeRouting,
    EntidadModule,
    TipoDocumentoModule,
    TipoContribuyenteModule,
    PresentationModule,
    RouterModule,
  ],
  exports: [HomeContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    TipoDocumentosEndpoint,
    IdentidadEndpoint,
    TipoContribuyentesEndpoint,
  ],
})
export class HomeModule {}
