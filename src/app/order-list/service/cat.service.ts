import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryModel } from '../model/CategoryModel';
import { ProductModel } from '../model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  baseUrl:string='';
  constructor(private http:HttpClient) { 
    this.baseUrl=environment.apiUrl;
  }

  addCategoriesData(obj:CategoryModel,appId:string):Observable<CategoryModel>{
    const url=this.baseUrl+"/addCategoriesData/"+appId;
    return this.http.post(url,obj).pipe(map(res=>res as CategoryModel));
  }
  editCategoriesData(categoryId:string,obj:CategoryModel){
    delete(obj._id);
    delete(obj.appId);
    delete(obj.orgId);
    delete(obj.__v);
    const url=this.baseUrl+"/edit/category/"+categoryId;
    return this.http.patch(url,obj).pipe(map(res=>res as CategoryModel));
  }

  allCategories(appId:string):Observable<CategoryModel[]>{
    const url=this.baseUrl+"/allCategories/"+appId;
    return this.http.get(url).pipe(map(res=>res as CategoryModel[]));
  }
}
