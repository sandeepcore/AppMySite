import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/dashboard/service/app.service';
import { LaunchIconAttributeModel } from '../model/AppAttributeModel';
import { MainAperanceAppInfoService } from '../service/main-aperance-app-info.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  backgroundColour:string='#050505';
  fontColour:string='#ffffff';
  fontFamily:string='Arial';
  fontSize:string='14px';
  appText:string='abc';
  appName:string='abc';
  
  sizeList:string[]=['13px','14px','15px','16px'];
  fontFamilyList:string[]=['Arial','Arial Black','Poppins SemiBold','Sans Serif','Times New Roman','Verdana'];

  constructor(private mainAppService:MainAperanceAppInfoService,private appService:AppService,private router:Router) {
    this.appName=appService.selectedApp.Appname; 
  }

  ngOnInit() {
    let obj =this.mainAppService.getDataLaunch();
    if(obj){
      this.backgroundColour=obj.backgroundColour;
      this.fontColour=obj.fontColour;
      this.fontFamily=obj.fontFamily;
      this.fontSize=obj.fontSize;
      this.appText=obj.appText;
    }
  }

  saveData(){
    let obj:LaunchIconAttributeModel={backgroundColour:this.backgroundColour,fontColour:this.fontColour,fontFamily:this.fontFamily,fontSize:this.fontSize,appText:this.appText};
    this.mainAppService.setDataLaunch(obj);
    this.router.navigate(['/appearance/homeScreen']);
  }

}
