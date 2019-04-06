import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHouverDirective } from './darken-on-houver.directive';

@NgModule({
  declarations: [ DarkenOnHouverDirective],
  exports:[DarkenOnHouverDirective],
  imports: [
    CommonModule
  ]
})
export class DarkenOnHouverModule { }
