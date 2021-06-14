import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
