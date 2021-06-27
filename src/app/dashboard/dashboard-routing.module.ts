import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppComponent } from './component/add-app/add-app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,data :{ id:'1', name:"DashboardComponent"}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
