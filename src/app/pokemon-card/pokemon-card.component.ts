import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent  {
  @Input()
  pokemon: any; //string

  @Input()
  numero: any; //number
  
  //Criar uma função imagem que irá retornar a imagem de cada pokemon de acordo
  //com o numeroFormatado  
  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero);
  // usar o this para pegar a informação do número que está fora do método  

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }
// irá pegar a imagem 001 do site pokemon pokedex que corresponde ao bulbasaur, depois a 002 correspondente ao ivysaur...
// basta adicionar elementos na lista de pokemons 

// Função que recebe uma string ou numero e coloca 0 na frente para ser formatado para o padrão da imagem

leadingZero(str: string | number, size = 3): string {
    let s = String(str);
  
    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }

}
