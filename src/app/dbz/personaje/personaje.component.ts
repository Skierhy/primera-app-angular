import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent {
  // lo que dice este input
  // @Input('data')
  // personajes: PersonajesInterfaces[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) {}
}
