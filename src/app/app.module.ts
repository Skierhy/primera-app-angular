import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// modulo en app.module.ts
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

// modulo de contador

@NgModule({
  declarations: [AppComponent],
  // modulo en app.module.ts
  imports: [BrowserModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
