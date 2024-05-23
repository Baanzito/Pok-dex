import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`).pipe(
      map((res: any) => {
        // Convertendo a altura de decímetros para metros, pois a API retorna a altura em decímetros.
        res.height = res.height / 10;
        return res;
      }),
      // Tratamento de erros na requisição HTTP
      catchError(this.handleError)
    );
  }

  // Manipula erros ocorridos durante requisições HTTP.
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Tratamento de erro do lado do cliente.
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Tratamento de erro do lado do servidor.
      console.error(`Código do erro: ${error.status}, ` + `mensagem: ${error.error.message}`);
    }
    // Retornar um observable com uma mensagem de erro para o usuário.
    return throwError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
  }
}
