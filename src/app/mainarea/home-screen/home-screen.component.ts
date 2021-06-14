import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  
  backgroundColour:string='#444';
  fontColour:string='#fff';
  fontFamily:string='Arial';
  fontSize:string='14px';
  appText:string='abc';
  appName:string='abc';
  
  sizeList:string[]=['12px','13px','14px','15px'];
  fontFamilyList:string[]=['Arial','Arial Black','Poppins SemiBold','Sans Serif','Times New Roman','Verdana'];
  columnList:string[]=['1','2','3','3','4'];

  constructor() { }

  ngOnInit() {
  }

}
