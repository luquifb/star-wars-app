import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { MoviesService } from './services/movies.service';
import { CharactersService } from './services/characters.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'film-list',  component: MoviesListComponent },
  { path: 'film/:id', component: MovieDetailComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '**', redirectTo: '' }
];
