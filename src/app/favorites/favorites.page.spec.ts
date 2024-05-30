import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoritesPage } from './favorites.page';

// Suíte de testes para FavoritesPage.
describe('FavoritesPageModule', () => {
  let component: FavoritesPage;
  let fixture: ComponentFixture<FavoritesPage>;

  // Executa antes de cada teste, configurando o ambiente de teste.
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesPage ], // Declarando o componente que será testado.
      imports: [IonicModule.forRoot()] // Importa o módulo Ionic.
    }).compileComponents(); // Compila os componentes declarados.

    fixture = TestBed.createComponent(FavoritesPage); // Cria uma instância de fixture do componente.
    component = fixture.componentInstance; // Obtém a instância do componente a partir do fixture.
    fixture.detectChanges(); // Detecta mudanças para inicializar o componente.
  }));

  // Caso de teste para verificar se o componente foi criado corretamente.
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se a instância do componente é existente.
  });
});
