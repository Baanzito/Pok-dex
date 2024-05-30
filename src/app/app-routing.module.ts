import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    // Rota padrão redirecionando para a página inicial.
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    // Rota para a página inicial, carregando o módulo da página inicial.
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    // Rota para os detalhes de um Pokémon, carregando o módulo dos detalhes.
    path: 'details/:name',
    loadChildren: () => import('./pokemon-details/details.module').then( m => m.DetailsPageModule)
  },

  {
    // Rota para a página de favoritos, carregando o módulo dos favoritos.
    path: 'favorites', 
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesPageModule)
  },

];

@NgModule({
  // Configuração do roteador da aplicação, utilizando estratégia de pré-carregamento de módulos.
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  // Exporta o RouterModule para que ele possa ser utilizado em outros módulos.
  exports: [RouterModule]
})
export class AppRoutingModule { }
