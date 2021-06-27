import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AppAttributeModel } from 'src/app/mainarea/model/AppAttributeModel';
import { environment } from 'src/environments/environment';
import { AppModel } from '../Model/AppModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  baseUrl:string='';
  private isShowSideBar = new BehaviorSubject<boolean>(true);
  private appData:AppModel=new AppModel();
  constructor(private http:HttpClient) { 
    this.baseUrl=environment.apiUrl;
  }
  get IsShowSideBar() {
    return this.isShowSideBar.asObservable(); // {2}
  }


  setIsShowSideBar(value:boolean){
    this.isShowSideBar.next(value);
  }

  get selectedApp(){
    return this.appData;
  }

  setSelectedApp(obj:AppModel){
    this.appData=obj;
  }

  addApp(obj:AppModel){
    const url=this.baseUrl+"/addapp";
    return this.http.post(url,obj).pipe(map(res=>res as any));
  }

  getAppById(appId:string){
    const url=this.baseUrl+"/getApp/"+appId
    return this.http.get(url).pipe(map(res=>res as any));
  }

  getAllApps(){
    const url=this.baseUrl+"/getapps";
    return this.http.get(url).pipe(map(res=>res as any));
  }

  addAppAttribute(obj:any){
    const url=this.baseUrl+"/addappattributes";
    return this.http.post(url,obj).pipe(map(res=>res as any));
  }

  uploadIcon(appId:string,obj:FormData){
    const url=this.baseUrl+"/iconimage/"+appId;
    return this.http.post(url,obj).pipe(map(res=>res as any));
  }

  getAppImageById(appId:string){
    const url=this.baseUrl+appId+"/icon";
    return this.http.get(url).pipe(map(res=>res as any));
  }

}
