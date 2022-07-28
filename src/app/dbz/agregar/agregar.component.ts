import { Component, Input } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  // recibe
  @Input()
  personajes: PersonajesInterfaces[] = [];
  @Input()
  nuevo: PersonajesInterfaces = {
    nombre: '',
    poder: 0,
  };
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    console.log(this.personajes);
  }
}
