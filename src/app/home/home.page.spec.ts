import { ComponentFixture, TestBed } from '@angular/core/testing';  // Importa utilitários para testes unitários do Angular.
import { IonicModule } from '@ionic/angular';  // Importa módulo do Ionic para configuração do ambiente de teste.

import { HomePage } from './home.page';  // Importa o componente HomePage para ser testado.

// Suíte de testes para Homepaga
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Executa antes de cada teste, a configuração assíncrona necessária.
  beforeEach(async () => {  
    await TestBed.configureTestingModule({
      declarations: [HomePage],  // Declarando o componente que será testado.
      imports: [IonicModule.forRoot()]  // Importa o módulo do Ionic.
    }).compileComponents();  // Compila os componentes declarados.

    fixture = TestBed.createComponent(HomePage);  // Cria uma instância de fixture do componente.
    component = fixture.componentInstance;  // Obtém a instância do componente a partir do fixture.
    fixture.detectChanges();  // Detecta mudanças para inicializar o componente.
  });

  // Verifica se o componente foi criado corretamente.
  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica se a instância do componente é existente.
  });
});
