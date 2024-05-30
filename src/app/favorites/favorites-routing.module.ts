import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPage } from './favorites.page';

// Definindo as rotas para o módulo FavoritesPage.
const routes: Routes = [
  {
    path: '',
    component: FavoritesPage // Componente que será carregado.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa o RouterModule é o configura as rotas.
  exports: [RouterModule] // Exporta o RouterModule para ser usado em todo o módulo.
})
export class FavoritesPageRoutingModule { }
