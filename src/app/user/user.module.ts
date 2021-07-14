import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { InventoryComponent } from './component/inventory/inventory.component';


@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
