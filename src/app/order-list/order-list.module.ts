import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderInventoryComponent } from './order-inventory/order-inventory.component';
import { orderRoutingModule } from './order-inventory/order-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [OrderInventoryComponent],
  imports: [
    orderRoutingModule,
    CommonModule,
    //CoreModule,
    MaterialModule
  ],
  exports: [
    orderRoutingModule,]
})
export class OrderListModule { }
