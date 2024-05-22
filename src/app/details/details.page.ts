import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { FavoritesService } from 'src/app/services/favorites.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute, 
    private pokeapiService: PokeapiService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeapiService.getPokemonDetails(name).subscribe(response => {
        this.pokemon = response;
      });
    }
  }

  toggleFavorite() {
    if (this.favoritesService.isFavorite(this.pokemon.name)) {
      this.favoritesService.removeFavorite(this.pokemon.name);
    } else {
      this.favoritesService.addFavorite(this.pokemon.name);
    }
  }
  
  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.pokemon.name);
  }

}
