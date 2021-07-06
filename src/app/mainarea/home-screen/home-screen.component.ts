import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/dashboard/service/app.service';
import { AppAttributeModel, HomeScreenAttributeModel, MainBannerHomeScreenModel, ProductHomeScreenModel, SectionHomeScreenModel } from '../model/AppAttributeModel';
import { MainAperanceAppInfoService } from '../service/main-aperance-app-info.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  backgroundColour: string = '#444';
  fontColour: string = '#fff';
  fontFamily: string = 'Arial';
  fontSize: string = '14px';
  appText: string = 'abc';
  appName: string = 'abc';
  dashboardHeaderText: string = 'abc';

  //section
  sectionColour: string = '#fff';
  sectionHeadingColour: string = '#444';
  sectionTextColour: string = '#444';
  sectionButtonColour: string = '#444';

  //banner
  isBanner: boolean = true;
  bannerText: string = 'abc';
  bannerColour: string = '#444';
  bannerSize: string = '14px';
  bannerFamily: string = 'Arial';
  bannerAllign: string = 'center';

  //product
  isProduct: boolean = true;
  productCount: string = '6';
  productFontColour: string = '#444';
  productShape: string = 'sharp';


  isNewProduct: boolean = true;
  isCart: boolean = true;
  isFeatureProduct: boolean = true;
  isRecentyProduct: boolean = true;
  isSaleProduct: boolean = true;

  sizeList: string[] = ['12px', '13px', '14px', '15px'];
  fontFamilyList: string[] = ['Arial', 'Arial Black', 'Poppins SemiBold', 'Sans Serif', 'Times New Roman', 'Verdana'];
  columnList: string[] = ['1', '2', '3', '4',  '6'];
  categoryList: string[] = ['1', '2', '3', '4', '5', '6'];

  constructor(private mainAppService: MainAperanceAppInfoService, private appService: AppService,private router:Router) {
    this.appName = appService.selectedApp.Appname;
  }

  ngOnInit() {
    let obj = this.mainAppService.getDataHomeScreen();
    if (obj) {
      //section
      this.sectionColour = obj.sectionColor.sectionColour;
      this.sectionHeadingColour = obj.sectionColor.sectionHeadingColour;
      this.sectionTextColour = obj.sectionColor.sectionTextColour;
      this.sectionButtonColour = obj.sectionColor.sectionButtonColour;

      //banner
      this.isBanner = obj.mainBanner.isBanner;
      this.bannerText = obj.mainBanner.bannerText;
      this.bannerColour = obj.mainBanner.bannerColour;
      this.bannerSize = obj.mainBanner.bannerSize;
      this.bannerFamily = obj.mainBanner.bannerFamily;
      this.bannerAllign = obj.mainBanner.bannerAllign;

      //product
      this.isProduct = obj.productCategories.isProduct;
      this.productCount = obj.productCategories.productCount;
      this.productFontColour = obj.productCategories.productFontColour;
      this.productShape = obj.productCategories.productShape;


      this.isNewProduct = obj.isNewProduct;
      this.isCart = obj.isCart;
      this.isFeatureProduct = obj.isFeatureProduct;
      this.isRecentyProduct = obj.isRecentyProduct;
      this.isSaleProduct = obj.isSaleProduct;
    }
  }

  saveData() {
    let obj: HomeScreenAttributeModel = new HomeScreenAttributeModel();
    //section
    let sectionColor: SectionHomeScreenModel = new SectionHomeScreenModel();
    sectionColor.sectionColour = this.sectionColour;
    sectionColor.sectionHeadingColour = this.sectionHeadingColour;
    sectionColor.sectionTextColour = this.sectionTextColour;
    sectionColor.sectionButtonColour = this.sectionButtonColour;

    obj.sectionColor = sectionColor;

    //banner
    let mainBanner: MainBannerHomeScreenModel = new MainBannerHomeScreenModel();
    mainBanner.isBanner = this.isBanner;
    mainBanner.bannerText = this.bannerText;
    mainBanner.bannerColour = this.bannerColour;
    mainBanner.bannerSize = this.bannerSize;
    mainBanner.bannerFamily = this.bannerFamily;
    mainBanner.bannerAllign = this.bannerAllign;

    obj.mainBanner = mainBanner;

    //product
    let productCategories: ProductHomeScreenModel = new ProductHomeScreenModel();
    productCategories.isProduct = this.isProduct;
    productCategories.productCount = this.productCount;
    productCategories.productFontColour = this.productFontColour;
    productCategories.productShape = this.productShape;

    obj.productCategories = productCategories;

    obj.isNewProduct=this.isNewProduct;
    obj.isCart=this.isCart;
    obj.isFeatureProduct=this.isFeatureProduct;
    obj.isRecentyProduct=this.isRecentyProduct;
    obj.isSaleProduct=this.isSaleProduct;
    this.mainAppService.setDataHomeScreen(obj);

    let responseObj:AppAttributeModel=new AppAttributeModel();
    responseObj.appID=this.appService.selectedApp._id;
    responseObj.homeAttr=[obj];
    responseObj.launchscreenAttr=this.mainAppService.getDataLaunch() !=null ?[this.mainAppService.getDataLaunch()]:[];
    responseObj.appiconAttr=this.mainAppService.getDataMainArea() !=null ?[this.mainAppService.getDataMainArea()]:[];
    responseObj.iconimage='';
    responseObj.launchimage='';

    this.appService.addAppAttribute(responseObj).subscribe(v=>{

    });
  }

}
