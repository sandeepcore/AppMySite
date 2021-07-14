import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LaunchComponent } from './launch/launch.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { ModuleScreenComponent } from './module-screen/module-screen.component';


const routes: Routes = [
    // { path:'', redirectTo:'login', pathMatch:'full'},
    {path: 'homeScreen', component: HomeScreenComponent},

    {path: 'launch', component: LaunchComponent},
    {path: 'module', component: ModuleScreenComponent},
    {path: 'app', component: MainAreaComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAreaRoutingModule { }
