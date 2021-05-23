import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // { path:'', redirectTo:'login', pathMatch:'full'},
   // {path: '', component: AppMainComponent,},
    { path: 'order', loadChildren: () => import('./../app/order-list/order-list.module').then(m => m.OrderListModule) },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
