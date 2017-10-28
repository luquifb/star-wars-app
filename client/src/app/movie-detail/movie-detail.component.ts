import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MoviesService } from '../services/movies.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  filmName: string;
  films ;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/films')
    .subscribe(res => {
      if(res.status)
        this.films = res.json().results;
    });
  }
}
