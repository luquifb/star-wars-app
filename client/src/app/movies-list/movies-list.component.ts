import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
films;

constructor(private router: Router, public moviesServ: MoviesService) { }

ngOnInit() {
    this.moviesServ.getMovies()
    .subscribe(films => {
      this.films = films.results;
    });
  }

}
