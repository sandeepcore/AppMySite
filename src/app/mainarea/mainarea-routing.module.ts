import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAreaComponent } from './main-area/main-area.component';


const routes: Routes = [
    // { path:'', redirectTo:'login', pathMatch:'full'},
    {path: 'app', component: MainAreaComponent},
    // { path: 'order', loadChildren: () => import('./../app/order-list/order-list.module').then(m => m.OrderListModule) },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAreaRoutingModule { }
