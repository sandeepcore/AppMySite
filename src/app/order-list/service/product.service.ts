import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../model/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string='';
  constructor(private http:HttpClient) { 
    this.baseUrl=environment.apiUrl;
  }

  upload(obj:File):Observable<string>{
    // const url=this.baseUrl+"/addProduct";
    // return this.http.post(url,obj).pipe(map(res=>res as ProductModel));
    return of("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
  }

  addProduct(obj:ProductModel):Observable<ProductModel>{
    const url=this.baseUrl+"/addProduct";
    return this.http.post(url,obj).pipe(map(res=>res as ProductModel));
  }
  updateProduct(productId:string,obj:ProductModel){
    const url=this.baseUrl+"/edit/product/"+productId;
    return this.http.post(url,obj).pipe(map(res=>res as ProductModel));
  }

  getAppByChildCatIdAndOrgId(childcatid:string,orgId:string):Observable<ProductModel[]>{
    // const url=this.baseUrl+"/getCatdata?childcatid="+childcatid+"&orgId="+orgId;
    const url=this.baseUrl+"/getchildProducts/"+childcatid;
    return this.http.get(url).pipe(map(res=>res as ProductModel[]));
  }
  getAppBySubCatIdAndOrgId(subCatid:string,orgId:string):Observable<ProductModel[]>{
    // const url=this.baseUrl+"/getCatdata?subCatid="+subCatid+"&orgId="+orgId;
    const url=this.baseUrl+"/getsubcategoryProducts/"+subCatid;
    return this.http.get(url).pipe(map(res=>res as ProductModel[]));
  }

  getAppByParentCatIdAndOrgId(parentCatid:string,orgId:string):Observable<ProductModel[]>{
    // const url=this.baseUrl+"/getCatdata?parentCatid="+parentCatid+"&orgId="+orgId;
    const url=this.baseUrl+"/getCategoryProducts/"+parentCatid;
    return this.http.get(url).pipe(map(res=>res as ProductModel[]));
  }
}
