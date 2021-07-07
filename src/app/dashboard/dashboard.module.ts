import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddAppComponent } from './component/add-app/add-app.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [DashboardComponent, AddAppComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
