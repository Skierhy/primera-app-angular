import { Component } from '@angular/core';
// importacion de decorador component

@Component({
  // requiere un argumento
  // selector es el nombre del componente que va a tener
  selector: 'app-root',
  // es donde esta el archivo de html de componente
  templateUrl: './app.component.html',
  // template
  // permite definir litera
  // template hola,
  // el archivo css del componente
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
