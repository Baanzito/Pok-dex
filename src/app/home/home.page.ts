import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemonList: any[] = [];
  offset = 0;
  limit = 20;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokeapiService.getPokemonList(this.offset, this.limit).subscribe(pokemonDetails => {
      this.pokemonList = this.pokemonList.concat(pokemonDetails);
    });
  }

  loadMore(event: any) {
    this.offset += this.limit;
    this.loadPokemon();
    event.target.complete();
  }
}
