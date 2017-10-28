import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { environment }  from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/films";

@Injectable()
export class MoviesService {
  films:object;

  constructor(private http: Http) {
    }

    getFilms(){
      return this.http.get(`${BASEURL}`)
            .map(res => res.json())
    }

  // getMovies() {
  //   return this.http.get('https://swapi.co/api/films')
  //         .map(res => console.log("Helooo"))
  // }

}
