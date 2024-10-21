import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiUrl = environment.apiUrl;  // son las APIS de url
  private apiKey = environment.apiKey;  // apikey

  constructor(private http: HttpClient) {}

  // Método para buscar GIFs en la API de Giphy
  searchGifs(query: string): Observable<any> {
    const params = {
      api_key: this.apiKey,
      q: query,
      limit: '35'  // limita el mostrado del api a 35 registros
    };
    return this.http.get<any>(this.apiUrl, { params });
  }
}