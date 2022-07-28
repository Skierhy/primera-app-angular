import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajeComponent } from './personaje/personaje.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [MainPageComponent, PersonajeComponent, AgregarComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
