import { Component, OnInit } from '@angular/core';
import { MainAperanceAppInfoService } from '../service/main-aperance-app-info.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {

  backgroundColour:string='#444';
  fontColour:string='#fff';
  fontFamily:string='Arial';
  fontSize:string='14px';
  appText:string='abc';
  appName:string='abc';
  
  sizeList:string[]=['12px','13px','14px','15px'];
  fontFamilyList:string[]=['Arial','Arial Black','Poppins SemiBold','Sans Serif','Times New Roman','Verdana'];
  constructor(private appService:MainAperanceAppInfoService) { }

  ngOnInit() {
  }

  saveData(){
    let obj={backgroundColour:this.backgroundColour,fontColour:this.fontColour,fontFamily:this.fontFamily,fontSize:this.fontSize,appText:this.appText};
    this.appService.setData(obj);
  }

}
