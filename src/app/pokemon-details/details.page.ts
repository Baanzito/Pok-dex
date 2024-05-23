import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any;
  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private pokeapiService: PokeapiService) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    console.log('Pokemon name from route:', name);
    if (name) {
      this.pokeapiService.getPokemonDetails(name).subscribe(
        response => {
          this.pokemon = response;
          console.log('Pokemon details:', this.pokemon);
          this.isFavorite = this.checkIfFavorite(this.pokemon.name);
        },
        error => {
          console.error('Error fetching Pokemon details:', error);
        }
      );
    } else {
      console.error('Pokemon name not found in route parameters');
    }
  }

  checkIfFavorite(name: string): boolean {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(name);
  }
}
