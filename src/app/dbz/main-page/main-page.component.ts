import { Component } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: PersonajesInterfaces = {
    nombre: 'main',
    poder: 2,
  };
  constructor() {}
}
