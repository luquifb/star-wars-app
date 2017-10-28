import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {
  private url: string = 'https://swapi.co/api';

  constructor(private http: Http) {
    }

  getMovies(){
    return this.http.get('https://swapi.co/api/films/?format=json')
          .map(res => res.json())
  }

}
