import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  nuevo: PersonajesInterfaces = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  // @Output() OnNuevoPersonaje: EventEmitter<PersonajesInterfaces> =
  // new EventEmitter();
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.OnNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
