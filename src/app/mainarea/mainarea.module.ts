import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAreaComponent } from './main-area/main-area.component';
import { MainAreaRoutingModule } from './mainarea-routing.module';



@NgModule({
  declarations: [MainAreaComponent],
  imports: [
    CommonModule,
    MainAreaRoutingModule
  ]
})
export class MainareaModule { }
