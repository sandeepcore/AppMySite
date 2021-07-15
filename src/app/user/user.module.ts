import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { InventoryComponent } from './component/inventory/inventory.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from './../layout/layout.module';


@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    MaterialModule,
    LayoutModule
  ]
})
export class UserModule { }
