import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
     { path:'login', loadChildren: () => import('./login/login.module').then(m =>m.LoginModule)},
     { path:'', loadChildren: () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule),canActivate:[AuthGuard]},
   // {path: '', component: AppMainComponent,},
    { path: 'order', loadChildren: () => import('./../app/order-list/order-list.module').then(m => m.OrderListModule),canActivate:[AuthGuard] },
    { path: 'appearance', loadChildren: () => import('./mainarea/mainarea.module').then(m => m.MainareaModule),canActivate:[AuthGuard] },
    { path: 'step', loadChildren: () => import('./step/step.module').then(m => m.StepModule),canActivate:[AuthGuard] },
    { path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
