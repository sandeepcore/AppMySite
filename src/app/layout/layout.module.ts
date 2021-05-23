import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent, SideBarComponent]
})
export class LayoutModule { }
