import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character;

  constructor(private route:ActivatedRoute, public charactersServ: CharactersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getCharacter(params['id']);
      });
  }

  getCharacter(id) {
    this.charactersServ.getCharacter(id)
      .subscribe((character) => this.character = character);
  }
}
