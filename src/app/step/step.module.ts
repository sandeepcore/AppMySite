import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { StepRoutingModule } from './step-routing.module';



@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    StepRoutingModule
  ]
})
export class StepModule { }
