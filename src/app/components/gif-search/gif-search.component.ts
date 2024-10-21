import { Component } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent {
  query: string = '';
  gifs: any[] = [];
  searchHistory: string[] = [];

  constructor(private giphyService: GiphyService) {}

  searchGifs(query: string): void {
    if (!query.trim()) {
      return; // No hacer nada si la búsqueda está vacía
    }

    // Agrega la búsqueda al historial si no está ya
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.push(query);
    }

    // Llamada al servicio para buscar GIFs
    this.giphyService.searchGifs(query).subscribe(
      (response) => {
        this.gifs = response.data;
      },
      (error) => {
        console.error('Error al buscar GIFs:', error);
      }
    );
  }
}