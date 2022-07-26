// transformar la clase como componente de angular
import { Component } from '@angular/core';

// decorador
@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola mundo</h1>
    <!-- Iprimir  cosas de ts app.compnent -->
    <!-- tambien cosas de JS -->
    <h2>{{ titulo }}</h2>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <!-- evento con (click)="" -->
    <button (click)="contador(base)">{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="contador(-base)">-{{ base }}</button>
  `,
})

// exportar y se pueda usar en cualquier sitio
export class ContadorAngularComponent {
  public titulo: string = 'Contador APP';
  numero: number = 10;
  base: number = 5;
  contador(valor: number) {
    this.numero += valor;
  }
  // restar() {
  //   this.numero -= 1;
  // }
}
