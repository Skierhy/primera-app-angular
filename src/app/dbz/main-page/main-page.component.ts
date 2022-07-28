import { Component, Output } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';
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
}
