// importar angular core

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    // invisible para toda la aplicacion
    // que cosas contiene este modulo que componentes etc
    heroeComponent,
    ListadoComponent,
  ],
  exports: [
    // que quiero hacer publico para toda la app
    ListadoComponent,
  ],
  imports: [
    // aqui van module
    // se usa para las directivas ngfor ngif
    // son los commandos para angular
    CommonModule,
  ],
  //   que cosas quieres que sea visiables fuera de este modulo
})
export class HeroesModule {}
