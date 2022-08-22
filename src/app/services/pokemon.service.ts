import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [{name: "electrode", url: "https://pokeapi.co/api/v2/pokemon/101/"}];
  // disponibilizar para todos

  //registrar http client dentro do service
  //para chamar os pokemons quando for construido 
  constructor(private httpClient: HttpClient) {
    this.carregarPokemon(); 
  }

  //implementar carregamento
  async carregarPokemon() {
    const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
    //to promise esperar a operação da internet acontecer com await
    
    this.pokemons = requisicao.results;
   // exibir o que tem na requisição 
   // botar na lista
  }
}
