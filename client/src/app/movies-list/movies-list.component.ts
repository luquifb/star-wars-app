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

constructor(private router: Router, private http: Http, private moviesServ: MoviesService) { }

ngOnInit() {
  this.http.get('https://swapi.co/api/films')
  .subscribe(res => {
    if(res.status)
      this.films = res.json().results;
  });
    // this.films = this.moviesServ.getFilms();
  }
}
