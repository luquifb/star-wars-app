import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters;
  character;

  constructor(private router: ActivatedRoute, private http: Http, public charactersServ: CharactersService) { }

  ngOnInit() {
    this.charactersServ.getCharacters()
    .subscribe(characters => {
      this.characters = characters.results;
    });
  }

}
