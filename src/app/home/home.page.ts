import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemonList: any[] = [];
  offset: number = 0;
  limit: number = 20;

  constructor(private pokeapiService: PokeapiService) { }

  getPokemonImage(url: string): string {
    const id = url.split('/').filter(x => x).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  
  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon(event?: any) {
    this.pokeapiService.getPokemonList(this.offset, this.limit).subscribe(response => {
      this.pokemonList = [...this.pokemonList, ...response.results];
      this.offset += this.limit;
      if (event) {
        event.target.complete();
      }
    });
  }

  loadMore(event: any) {
    this.loadPokemon(event);
  }
}
