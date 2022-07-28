import { Injectable } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';

// decorador
@Injectable()
// lo que se refiere que esta clase se puede injectar
//
export class DbzService {
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
  constructor() {
    console.log('Servicio Inicializado...');
  }
}
