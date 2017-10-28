import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MoviesService } from '../services/movies.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
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
