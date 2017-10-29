import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesService } from './services/movies.service';
import { CharactersComponent } from './characters/characters.component';
import { FilmSearcherPipe } from './pipes/film-searcher.pipe';
import { CharactersService } from './services/characters.service';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    FilmSearcherPipe,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
