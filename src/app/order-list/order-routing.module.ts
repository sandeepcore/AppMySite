import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { CategoryInventoryComponent } from './component/category-inventory/category-inventory.component';
import { OrderInventoryComponent } from './component/order-inventory/order-inventory.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductInventoryComponent } from './component/product-inventory/product-inventory.component';

const routes: Routes = [
    {
        path: 'order',
        component: OrderInventoryComponent
    },
    {
        path: 'category',
        component: CategoryInventoryComponent
    },
    {
        path: 'category/add',
        component: CategoryFormComponent
    },
    {
        path: 'category/update/:id',
        component: CategoryFormComponent
    },
    {
        path: 'list',
        component: ProductInventoryComponent
    },
    {
        path: 'form',
        component: ProductFormComponent
    },
    {
        path: 'form/:id',
        component: ProductFormComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class orderRoutingModule { }
