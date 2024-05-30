import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemonList: any[] = [];  // Lista de Pokémon filtrada.
  allPokemonList: any[] = [];  // Lista completa de Pokémon.
  searchTerm: string = '';  // Termo de busca.
  offset: number = 0;  // Offset para paginação.
  limit: number = 24;  // Limite de Pokémon por requisição (24 para alinhar com a orientação de colunas do front-end).

  constructor(private pokeapiService: PokeapiService) { }

  getPokemonImage(url: string): string {  // Obtém a URL da imagem do Pokémon.
    const id = url.split('/').filter(x => x).pop();  // Extrai o ID do Pokémon da URL.
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  
  ngOnInit() {  // Método de inicialização do componente.
    this.loadPokemon();  // Carrega a lista inicial de Pokémon.
  }

  filterPokemon() {  // Filtra a lista de Pokémon com base no termo de busca.
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.pokemonList = this.allPokemonList;  // Sem termo de busca, mostra todos.
    } else {
      const searchTermLowerCase = this.searchTerm.toLowerCase();  // Converte termo de busca para minúsculas.
      this.pokemonList = this.allPokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTermLowerCase)  // Filtra Pokémon cujo nome inclui o termo de busca.
      );
    }
  }

  loadPokemon(event?: any) {  // Carrega a lista de Pokémon do serviço.
    this.pokeapiService.getPokemonList(this.offset, this.limit).subscribe(response => {
      this.allPokemonList = [...this.allPokemonList, ...response.results];  // Adiciona novos Pokémon à lista completa.
      this.filterPokemon();  // Filtra a lista de Pokémon com base no termo de busca.
      this.offset += this.limit;  // Incrementa o offset para a próxima requisição.
      if (event) {
        event.target.complete();  // Completa a ação de carregamento.
      }
    });
  }

  loadMore(event: any) {  // Carrega mais Pokémon quando acionado.
    this.loadPokemon(event);
  }

  toggleFavorite(pokemon: any) {  // Adiciona ou remove um Pokémon dos favoritos.
    pokemon.isFavorite = !pokemon.isFavorite;  // Alterna o status de favorito.
    if (pokemon.isFavorite) {
      this.pokeapiService.addFavorite(pokemon);  // Adiciona aos favoritos.
    } else {
      this.pokeapiService.removeFavorite(pokemon);  // Remove dos favoritos.
    }
  }
}
