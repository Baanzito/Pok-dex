import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  pokemon: any;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  viewDetails() {
    this.router.navigate(['/details', this.pokemon.id]);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe(data => {
      this.pokemon = data;
    }
    );
  }

}
