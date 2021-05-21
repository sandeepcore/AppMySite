import { OrderInventoryComponent } from './order-inventory.component';
//import { ViewdetailsComponent } from './component/viewdetails/viewdetails.component';
//import { CreateVoterComponent } from './component/create-voter/create-voter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { VoterManagementComponent } from './component/voter-management/voter-management.component';

const routes: Routes = [
    {
        path: '',
        component: OrderInventoryComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class orderRoutingModule { }
