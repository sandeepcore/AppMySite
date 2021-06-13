import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainAperanceAppInfoService {
  
  appData:any={};

  constructor() { }


  getData():Observable<any>{
     return of(this.appData);
  }


  setData(obj:any){
    this.appData=obj;
  }
}
