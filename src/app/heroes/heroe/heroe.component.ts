import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class heroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  //   este es un get o set
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }

  cambiarNombre(): void {
    this.nombre = 'Thor';
  }
  cambiarEdad(): void {
    this.edad = 35;
  }
}
