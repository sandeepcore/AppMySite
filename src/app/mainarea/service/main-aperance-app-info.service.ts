import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainAperanceAppInfoService {

  appData: any = {};
  baseUrl: string = '';
  constructor(private http:HttpClient) {
    this.baseUrl = environment.apiUrl;
  }


  getData(): Observable<any> {
    return of(this.appData);
  }


  setData(obj: any) {
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
