import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainer } from './home.container';
import { EntidadContainer } from './components/entidad/entidad.container';
import { TipoContribuyenteContainer } from './components/tipo-contribuyente/tipo-contribuyente.container';
import { TipoDocumentoContainer } from './components/tipo-documento/tipo-documento.container';
import { PresentationContainer } from './components/presentation/presentation.container';

const route: Routes = [
  {
    path: '',
    component: HomeContainer,
    children: [
      {
        path: 'entidad',
        component: EntidadContainer,
      },
      {
        path: 'tipo-contribuyente',
        component: TipoContribuyenteContainer,
      },
      {
        path: 'tipo-documento',
        component: TipoDocumentoContainer,
      },
      {
        path: '',
        component: PresentationContainer,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class HomeRouting {}
