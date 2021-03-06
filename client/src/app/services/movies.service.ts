import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment }  from '../../environments/environment';

@Injectable()
export class MoviesService {

  public BASEURL = environment.BASEURL;

  constructor(private http: Http) {
    }

  getMovies() {
    return this.http.get(`${this.BASEURL}/films`)
          .map((res) => res.json());
  }

  getMovie(id) {
    return this.http.get(`${this.BASEURL}/films/${id}`)
      .map((res) => res.json());
  }

}
