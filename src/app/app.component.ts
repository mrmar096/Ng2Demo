import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private listProducts: Array<any>;
  cambiaLaLista() {
    this.listProducts.reverse();
  }
  cargarLista() {
    this.listProducts = [
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

