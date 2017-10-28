import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MoviesService } from '../services/movies.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  people: Array<object>;

  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people')
    .subscribe(res => {
      if(res.status)
        this.people = res.json().results;
    });
  }

}
