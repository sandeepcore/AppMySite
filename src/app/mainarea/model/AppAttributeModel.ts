export class AppAttributeModel {
    appID: string;
    appiconAttr: AppIconAttributeModel[];
    iconimage: string;
    launchscreenAttr: LaunchIconAttributeModel[];
    launchimage: string;
    homeAttr: HomeScreenAttributeModel[];
    appowner?:string;
    _id?:string;
}

export class AppIconAttributeModel {
    backgroundColour: string;
    fontColour: string;
    fontFamily: string;
    fontSize: string;
    appText: string;
}

export class LaunchIconAttributeModel {
    backgroundColour: string;
    fontColour: string;
    fontFamily: string;
    fontSize: string;
    appText: string;
}

export class HomeScreenAttributeModel {
   sectionColor:SectionHomeScreenModel;
   mainBanner:MainBannerHomeScreenModel;
   dashboardHeaderText:string;
   productCategories:ProductHomeScreenModel;
   isNewProduct:boolean;
   isCart:boolean;
   isFeatureProduct:boolean;
   isRecentyProduct:boolean;
   isSaleProduct:boolean;
}


export class SectionHomeScreenModel {
    sectionColour:string;
    sectionHeadingColour:string;
    sectionTextColour:string;
    sectionButtonColour:string;
}

export class MainBannerHomeScreenModel {
    isBanner:boolean
    bannerText:string;
    bannerColour:string;
    bannerSize:string;
    bannerFamily:string;
    bannerAllign:string;
}

export class ProductHomeScreenModel {
    isProduct:boolean;
    productCount:string;
    productFontColour:string;
    productShape:string;
  
}