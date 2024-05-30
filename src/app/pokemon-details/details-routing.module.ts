import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPage } from './details.page';

// Definindo as rotas para o módulo DetailsPage.
const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa o RouterModule e configura as rotas.
  exports: [RouterModule], // Exporta o RouterModule para ser usado em todo o módulo.
})
export class DetailsPageRoutingModule {}
