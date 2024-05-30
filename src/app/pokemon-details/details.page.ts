import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  // Define o seletor do componente e seus arquivos de template e estilo.
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  // Declarações de variáveis para armazenar os detalhes do Pokémon e se é favorito.
  pokemon: any;
  isFavorite: boolean = false;

  // Método construtor para inicializar o componente com os serviços necessários.
  constructor(private route: ActivatedRoute, private pokeapiService: PokeapiService) {}

  // Método chamado após a inicialização do componente.
  ngOnInit() {
    // Obtém o nome do Pokémon a partir dos parâmetros da rota.
    const name = this.route.snapshot.paramMap.get('name');
    console.log('Pokemon name from route:', name);
    // Verifica se o nome do Pokémon foi encontrado nos parâmetros da rota.
    if (name) {
      // Chama o serviço para obter os detalhes do Pokémon.
      this.pokeapiService.getPokemonDetails(name).subscribe(
        response => {
          // Armazena os detalhes do Pokémon e verifica se é favorito.
          this.pokemon = response;
          console.log('Pokemon details:', this.pokemon);
          this.isFavorite = this.checkIfFavorite(this.pokemon.name);
        },
        error => {
          // Exibe um erro caso ocorra algum problema ao buscar os detalhes do Pokémon.
          console.error('Error fetching Pokemon details:', error);
        }
      );
    } else {
      // Exibe um erro caso o nome do Pokémon não seja encontrado nos parâmetros da rota.
      console.error('Pokemon name not found in route parameters');
    }
  }

  // Método para verificar se um Pokémon é favorito com base em seu nome.
  checkIfFavorite(name: string): boolean {
    // Obtém os Pokémon favoritos armazenados localmente e verifica se o nome está presente.
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(name);
  }
}
