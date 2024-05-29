import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  pokemonList: any[] = [];
  allPokemonList: any[] = [];
  searchTerm: string = '';
  offset: number = 0;
  limit: number = 24;

  constructor(private pokeapiService: PokeapiService) { }

  getPokemonImage(url: string): string {
    const id = url.split('/').filter(x => x).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  
  ngOnInit() {
    this.loadPokemon();
  }

  filterPokemon() {
    console.log('Filter term:', this.searchTerm);
    console.log('All Pokemon List:', this.allPokemonList);

    if (!this.searchTerm || this.searchTerm.trim() === '') {
      this.pokemonList = this.allPokemonList;
    } else {
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      this.pokemonList = this.allPokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTermLowerCase)
      );
    }

    console.log('Filtered Pokemon List:', this.pokemonList);
  }

  loadPokemon(event?: any) {
    this.pokeapiService.getPokemonList(this.offset, this.limit).subscribe(response => {
      console.log('Loaded Pokemon:', response.results);
      this.allPokemonList = [...this.allPokemonList, ...response.results];
      this.filterPokemon();
      this.offset += this.limit;
      if (event) {
        event.target.complete();
      }
    });
  }

  loadMore(event: any) {
    this.loadPokemon(event);
  }

  toggleFavorite(pokemon: any) {
    pokemon.isFavorite = !pokemon.isFavorite;
    if (pokemon.isFavorite) {
      this.pokeapiService.addFavorite(pokemon);
    } else {
      this.pokeapiService.removeFavorite(pokemon);
    }
  }
}
