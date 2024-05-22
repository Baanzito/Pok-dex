import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number): Observable<any[]> {
    return this.http.get<{ results: any[] }>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`).pipe(
      switchMap(response => {
        const requests = response.results.map((pokemon: any) => this.getPokemonDetails(pokemon.name));
        return forkJoin(requests);
      })
    );
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }
}
