import { Component, Output } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: PersonajesInterfaces[] = [
    {
      nombre: 'Goku',
      poder: 150,
    },
    {
      nombre: 'vegeta',
      poder: 50,
    },
  ];
  nuevo: PersonajesInterfaces = {
    nombre: 'main',
    poder: 2,
  };
  agregarNuevoPersonaje(NuevoPersonajeAgregadoHijo: PersonajesInterfaces) {
    this.personajes.push(NuevoPersonajeAgregadoHijo);
  }
  // inyeccion  de dependencias importante
  // estamos inyectado el servicio en este componente
  constructor(private dbzService: DbzService) {}
}
