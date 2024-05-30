import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    CommonModule,  // Importa o CommonModule para fornecer diretivas e pipes para o Angular.
    FormsModule,  // Importa o FormsModule para usar recursos de formulários do Angular.
    IonicModule,  // Importa o IonicModule para usar componentes do Ionic.
    FavoritesPageRoutingModule  // Importa o roteamento para a página de favoritos.
  ],
  declarations: [FavoritesPage]  // Declara o componente FavoritesPage.
})
export class FavoritesPageModule { }
