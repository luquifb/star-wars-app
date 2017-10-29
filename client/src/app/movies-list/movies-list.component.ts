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
film;
url;
constructor(private router: Router, private http: Http, public moviesServ: MoviesService) { }

ngOnInit() {
    this.moviesServ.getMovies()
    .subscribe(films => {
      this.films = films.results;
    });
  }

  // getUrl(url){
  //   console.log(url)
  //   this.http.get("https://swapi.co/api/films/1")
  //   .subscribe(res => {
  //     if(res.status)
  //       this.film = res.json().results;
  //   });
  // }
}
