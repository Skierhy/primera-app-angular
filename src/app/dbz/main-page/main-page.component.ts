import { Component, Output } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
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
