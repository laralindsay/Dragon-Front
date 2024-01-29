import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataDragonsService{
  getProductsData() {
    return [
      {
        id: '1001',
        name: 'Dragão Água',
        type: 'water',
        icon: 'water.ico',
        description: '"O Dragão água tem uma filosofia de vida muito própria e gostam de impor ela aos outros"',
        image: 'blue-dragon.png',
        createdAt: '26/01/24',
      },
      {
        id: '1002',
        name: 'Dragão Fogo',
        type: 'fire',
        description: '"O Dragão de Fogo é um dragão lendário que só pode ser chocado pela lava de um vulcão"',
        icon: 'fire.ico',
        image: 'red-dragon.png',
        createdAt: '26/01/24',
      },
      {
        id: '1003',
        name: 'Dragão Terra',
        type: 'earth',
        description: '"O Dragão de Terra são introvertidos, esforçados e calculistas"',
        icon: 'earth.ico',
        image: 'orange-dragon.png',
        createdAt: '26/01/24',
      },
      {
        id: '1004',
        name: 'Dragão Vento',
        type: 'wind',
        description: '"O símbolo no ovo do Dragão do vento se parece com o antigo tipo do elemento lendário. Este é o maior Dragão voador"',
        icon: 'wind.ico',
        image: 'green-dragon.png',
        createdAt: '26/01/24',
      },
      {
        id: '1002',
        name: 'Dragão Fogo',
        type: 'fire',
        description: '"O Dragão de Fogo é um dragão lendário que só pode ser chocado pela lava de um vulcão"',
        icon: 'fire.ico',
        image: 'red-dragon.png',
        createdAt: '26/01/24',
      },
    ];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }
}
