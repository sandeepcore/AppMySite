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
  headerText:string='abc';
  
    //section
    sectionColour:string='#fff';
    sectionHeadingColour:string='#444';
    sectionTextColour:string='#444';
    sectionButtonColour:string='#444';

  //banner
  isBanner:boolean=true;
  bannerText:string='abc';
  bannerColour:string='#444';
  bannerSize:string='14px';
  bannerFamily:string='Arial';
  contentJustify:string='center';

  //product
  isProduct:boolean=true;
  productCount:string='1';
  productFontColour:string='#444';
  productShape:string='sharp';


  isNewProduct:boolean=true;
  isCart:boolean=true;
  isFeatureProduct:boolean=true;
  isRecentyProduct:boolean=true;
  isSaleProduct:boolean=true;

  sizeList:string[]=['12px','13px','14px','15px'];
  fontFamilyList:string[]=['Arial','Arial Black','Poppins SemiBold','Sans Serif','Times New Roman','Verdana'];
  columnList:string[]=['1','2','3','3','4'];

  constructor() { }

  ngOnInit() {
  }

}
