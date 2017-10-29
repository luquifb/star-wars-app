import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  film;

  constructor(private route:ActivatedRoute, public moviesServ: MoviesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getMovie(params['id']);
      });
  }

  getMovie(id) {
    this.moviesServ.getMovie(id)
      .subscribe((film) => this.film = film);
  }

}
