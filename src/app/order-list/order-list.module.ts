import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { orderRoutingModule } from './order-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { OrderInventoryComponent } from './component/order-inventory/order-inventory.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { CategoryInventoryComponent } from './component/category-inventory/category-inventory.component';
import { ProductInventoryComponent } from './component/product-inventory/product-inventory.component';
import { ProductFormComponent } from './component/product-form/product-form.component';



@NgModule({
  declarations: [OrderInventoryComponent, CategoryFormComponent, CategoryInventoryComponent, ProductInventoryComponent, ProductFormComponent],
  imports: [
    orderRoutingModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    LayoutModule
  ],
  exports: [
    orderRoutingModule
  ]
})
export class OrderListModule { }
