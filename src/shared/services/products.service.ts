import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }

  getData() {
    return [
      {
        id: '1',
        description: 'Descripcion 1'
      },
      {
        id: '2',
        description: 'Descripcion 2'
      },
      {
        id: '3',
        description: 'Descripcion 3'
      },
      {
        id: '4',
        description: 'Descripcion 4'
      },
      {
        id: '5',
        description: 'Descripcion 5'
      }
    ];
  }
}
