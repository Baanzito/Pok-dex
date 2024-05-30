import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule, // Importa o CommonModule para fornecer diretivas e pipes para o Angular.
    FormsModule, // Importa o FormsModule para usar recursos de formulários do Angular.
    IonicModule, // Importa o IonicModule para usar componentes do Ionic.
    RouterModule.forChild([ // Definindo as rotas específicas para o módulo HomePageModule.
      {
        path: '',
        component: DetailsPage // Componente a ser carregado.
      }
    ])
  ],
  declarations: [DetailsPage] // Declarando o HomePage a este módulo.
})
export class DetailsPageModule {}
