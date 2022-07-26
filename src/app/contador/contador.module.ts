import { NgModule } from '@angular/core';
import { ContadorAngularComponent } from './contador/contador-angular.component';

@NgModule({
  declarations: [ContadorAngularComponent],
  exports: [ContadorAngularComponent],
  imports: [],
})
export class ContadorModule {}
