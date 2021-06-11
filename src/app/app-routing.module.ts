import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
      { path:'', redirectTo:'login', pathMatch:'full'},
     { path:'login', loadChildren: () => import('./login/login.module').then(m =>m.LoginModule)},
   // {path: '', component: AppMainComponent,},
    { path: 'order', loadChildren: () => import('./../app/order-list/order-list.module').then(m => m.OrderListModule) },
    { path: 'main', loadChildren: () => import('./mainarea/mainarea.module').then(m => m.MainareaModule) },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
