import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppIconAttributeModel, HomeScreenAttributeModel, LaunchIconAttributeModel } from '../model/AppAttributeModel';

@Injectable({
  providedIn: 'root'
})
export class MainAperanceAppInfoService {

  appData: any = {};
  baseUrl: string = '';
  constructor(private http:HttpClient) {
    this.baseUrl = environment.apiUrl;
  }


  getDataMainArea(): AppIconAttributeModel {
    const obj=localStorage.getItem("appiconAttr");
    if(obj) return JSON.parse(atob(obj));
    return null;
  }


  setDataMainArea(obj: AppIconAttributeModel) {
    const value=btoa(JSON.stringify(obj));
    localStorage.setItem("appiconAttr",value);
    this.appData = obj;
  }

  getDataLaunch(): LaunchIconAttributeModel {
    const obj=localStorage.getItem("launchscreenAttr");
    if(obj) return JSON.parse(atob(obj));
    return null;
  }

  setDataLaunch(obj: LaunchIconAttributeModel) {
    const value=btoa(JSON.stringify(obj));
    localStorage.setItem("launchscreenAttr",value);
    this.appData = obj;
  }


  getDataHomeScreen(): HomeScreenAttributeModel {
    const obj=localStorage.getItem("homeAttr");
    if(obj) return JSON.parse(atob(obj));
    return null;
  }

  setDataHomeScreen(obj: HomeScreenAttributeModel) {
    const value=btoa(JSON.stringify(obj));
    localStorage.setItem("homeAttr",value);
    this.appData = obj;
  }

  addCategories(appId:string,obj:any){
    const url=this.baseUrl+"/addCategoriesData/"+appId
    return this.http.post(url,obj).pipe(map(res=>res as any));
  }

  getCategories(appId:string){
    const url=this.baseUrl+"/allCategories/"+appId
    return this.http.get(url).pipe(map(res=>res as any));
  }
  
}
