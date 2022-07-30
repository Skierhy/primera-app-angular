import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
// ciclo de vida de un componente OnInit
// es una funcion que se ejecuta cuando el componente se carga
// metodos pira automatica
// implements OnInit
// constructor() {}
// ngOnInit(): void {
//   // sirve para inicializar cosas
//   // peticiones a servicios
// }
export class ListadoComponent {
  heroes: string[] = ['Batman', 'Superman', 'Flash'];
  HeroeBorrador: string = '';
  arrayHeroes: string[] = [''];

  borrar() {
    this.HeroeBorrador = this.heroes.shift() || '';
    //  || '' cuando regresa string or undefined
    // this.arrayHeroes.push(this.heroes.shift() || '');
  }
}
