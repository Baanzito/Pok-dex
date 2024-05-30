import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  // Define que este serviço pode ser injetado em qualquer lugar da aplicação.
  providedIn: 'root'
})
export class PokeapiService {
  // URL base da API Pokeapi.
  private baseUrl = 'https://pokeapi.co/api/v2';
  // Array para armazenar os favoritos.
  private favorites: any[] = [];

  // Método construtor para inicializar o serviço com o HttpClient.
  constructor(private http: HttpClient) { }

  // Método para obter uma lista de Pokémon da API.
  getPokemonList(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  // Método para obter os detalhes de um Pokémon específico da API.
  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`).pipe(
      // Mapeia a resposta para adicionar informações adicionais aos detalhes do Pokémon.
      map((res: any) => {
        const baseStatsValues = res.stats.map(function (stat: any) { return stat.base_stat })
        const maxStatValue = Math.max(...baseStatsValues)

        res.height = res.height / 10; // Convertendo a altura de decímetros para metros.
        res.maxStatValue = maxStatValue;

        return res;
      }),
      // Tratamento de erros na requisição HTTP.
      catchError(this.handleError)
    );
  }

  // Método privado para manipular erros HTTP.
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Tratamento de erro do lado do cliente.
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Tratamento de erro do lado do servidor.
      console.error(`Código do erro: ${error.status}, ` + `mensagem: ${error.error.message}`);
    }
    // Retorna um observable com uma mensagem de erro para o usuário.
    return throwError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
  }

  // Método para adicionar um Pokémon aos favoritos.
  addFavorite(pokemon: any) {
    this.favorites.push(pokemon);
  }

  // Método para remover um Pokémon dos favoritos.
  removeFavorite(pokemon: any) {
    this.favorites = this.favorites.filter(fav => fav.name !== pokemon.name);
  }

  // Método para obter a lista de Pokémon favoritos.
  getFavorites(): any[] {
    return this.favorites;
  }

}
