import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { GiphyService } from './services/giphy.service';

@NgModule({
  declarations: [
    AppComponent,
    GifSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Para hacer solicitudes HTTP
    FormsModule,       // Para usar ngModel en el input
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }