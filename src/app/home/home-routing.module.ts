import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

// Definindo as rotas para o módulo HomePageRouting.
const routes: Routes = [
  {
    path: '',
    component: HomePage, // Componente que sera carregado.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importa o RouterModule e configura as rotas.
  exports: [RouterModule] // Exporta o RouterModule para ser usado em todo o módulo.
})
export class HomePageRoutingModule {}