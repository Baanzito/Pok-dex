import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Set<string> = new Set();

  constructor() { }

  addFavorite(pokemon: string) {
    this.favorites.add(pokemon);
  }

  removeFavorite(pokemon: string) {
    this.favorites.delete(pokemon);
  }

  getFavorites(): string[] {
    return Array.from(this.favorites);
  }

  isFavorite(pokemon: string): boolean {
    return this.favorites.has(pokemon);
  }
}
