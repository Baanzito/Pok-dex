import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-favorites', // Define o seletor do componente.
  templateUrl: './favorites.page.html', // Local do HTML do componente.
  styleUrls: ['./favorites.page.scss'], // Local do SCSS do componente.
})
export class FavoritesPage implements OnInit {
  favoritePokemons: any[] = []; // Array para armazenar os Pokémon favoritos.

  // Injeta o serviço PokeapiService no constructor.
  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    // Inicializa a lista de Pokémon favoritos chamando o serviço da API.
    this.favoritePokemons = this.pokeapiService.getFavorites();
  }

  // Método para obter a imagem do pokemon da API.
  getPokemonImage(url: string): string {
    // Extrai o ID do Pokémon a partir da URL.
    const id = url.split('/').filter(x => x).pop();
    // Retorna a URL da imagem do Pokémon.
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
