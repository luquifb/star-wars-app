import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment }  from '../../environments/environment';

@Injectable()
export class CharactersService {

  public BASEURL = environment.BASEURL;

  constructor(private http: Http) {
    }

  getCharacters() {
    return this.http.get(`${this.BASEURL}/people`)
      .map ((res) => res.json());
  }
  
  getCharacter(id) {
    return this.http.get(`${this.BASEURL}/people/${id}`)
      .map((res) => res.json());
  }

}
