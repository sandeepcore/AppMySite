import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAreaComponent } from './main-area/main-area.component';
import { MainAreaRoutingModule } from './mainarea-routing.module';
import { FormsModule } from '@angular/forms';
import { LaunchComponent } from './launch/launch.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MaterialModule } from '../material/material.module';
import { ModuleScreenComponent } from './module-screen/module-screen.component';



@NgModule({
  declarations: [MainAreaComponent, LaunchComponent, HomeScreenComponent, ModuleScreenComponent],
  imports: [
    CommonModule,
    MainAreaRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class MainareaModule { }
