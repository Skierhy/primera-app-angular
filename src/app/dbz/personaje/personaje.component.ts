import { Component, Input } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent {
  // lo que dice este input
  @Input('data')
  personajes: PersonajesInterfaces[] = [];
}
