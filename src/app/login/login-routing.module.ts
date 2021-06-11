import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './component/login-form/login-form.component';


const routes: Routes = [
  // { path:'', redirectTo:'login', pathMatch:'full'},
  {path: '', component: LoginFormComponent},
  // { path: 'order', loadChildren: () => import('./../app/order-list/order-list.module').then(m => m.OrderListModule) },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
