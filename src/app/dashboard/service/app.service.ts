import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppAttributeModel } from 'src/app/mainarea/model/AppAttributeModel';
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
    if(localStorage.getItem("selected-app-id")){
      const obj=atob(localStorage.getItem("selected-app-id"));
      if(obj) this.appData= JSON.parse(obj);
    }
    return this.appData;
  }

  setSelectedApp(obj:AppModel){
    const value=btoa(JSON.stringify(obj));
    localStorage.setItem("selected-app-id",value);
    this.appData=obj;
  }

  addApp(obj:AppModel):Observable<AppModel>{
    const url=this.baseUrl+"/buildapp/addapp";
    return this.http.post(url,obj).pipe(map(res=>res as AppModel));
  }

  getAppById(appId:string):Observable<AppAttributeModel>{
    const url=this.baseUrl+"/getApp/"+appId
    return this.http.get(url).pipe(map(res=>res as AppAttributeModel));
  }

  getAllApps():Observable<AppModel[]>{
    const url=this.baseUrl+"/buildapp/getapps";
    return this.http.get(url).pipe(map(res=>res as AppModel[]));
  }

  addAppAttribute(obj:AppAttributeModel){
    const url=this.baseUrl+"/buildapp/addappattributes";
    return this.http.post(url,obj).pipe(map(res=>res as AppModel[]));
  }

  uploadIcon(appId:string,obj:FormData){
    const url=this.baseUrl+"/buildapp/iconimage/"+appId;
    return this.http.post(url,obj).pipe(map(res=>res as any));
  }

  getAppImageById(appId:string){
    const url=this.baseUrl+appId+"/buildapp/icon";
    return this.http.get(url).pipe(map(res=>res as any));
  }

}
