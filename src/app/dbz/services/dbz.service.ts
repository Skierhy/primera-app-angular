import { Injectable } from '@angular/core';
import { PersonajesInterfaces } from '../interfaces/dbz.interface';

// decorador
@Injectable()
// lo que se refiere que esta clase se puede injectar
//
export class DbzService {
  // seguro el acceso de la info
  private _personajes: PersonajesInterfaces[] = [
    {
      nombre: 'Goku',
      poder: 150,
    },
    {
      nombre: 'vegeta',
      poder: 50,
    },
  ];

  get personajes(): PersonajesInterfaces[] {
    // en arreglo[...son spread]
    // spread separa los elementos independientes y crea un nuevo
    // para que se rompa la referencia
    return [...this._personajes];
  }
  constructor() {
    console.log('Servicio Inicializado...');
  }

  agregarPersonajes(personajes: PersonajesInterfaces) {
    this._personajes.push(personajes);
  }
}
