import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModel } from '../../Model/AppModel';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {

  selectedApp:AppModel=new AppModel();
  isAddApp:boolean=false;
  appList:AppModel[]=[];
  constructor(private appService:AppService,private router:Router) {
      this.appService.setIsShowSideBar(false);
   }

  ngOnInit() {
    this.appService.getAllApps().subscribe(v=>{
        this.appList=v;
        // let obj:AppModel={Appname:"testApp",orgId:"abc",websiteurl:"www.abc.com"}
        // this.appList=[obj];
    })
  }

  addApp(){
    this.isAddApp=true;
  }

  selectedAppEvent(obj:AppModel){
   this.appService.getAppById(obj._id).subscribe(v=>{
     console.log(v);
     this.navigateToAppConfigure(obj);
   })
  }

  navigateToAppConfigure(obj:AppModel){
    this.selectedApp=obj;
    this.appService.setSelectedApp(this.selectedApp);
    this.router.navigate(['/appearance/app'])
  }
  getSave(event:AppModel){
    this.appList.push(event);
    this.isAddApp=true;
    this.navigateToAppConfigure(event);
  }
  ngOnDestroy(){
    this.appService.setIsShowSideBar(true);
  }
}
