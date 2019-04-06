import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { RenderNodeAction } from '@angular/core/src/view/util';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageComponent } from '../shared/component/vmessage/vmessage.component';
import { VmessageModule } from '../shared/component/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SinginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule    
  ]
})
export class HomeModule { }
