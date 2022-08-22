import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list', //Colocar as informações do pokemon-list.component no html
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
// Fazer um lista de pokemon 

// Toda vez que o component lista for construido irá trazer o service
  constructor(public pokemonService: PokemonService) {}

}
