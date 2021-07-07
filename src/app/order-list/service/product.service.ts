import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  addProduct(obj:ProductModel):Observable<ProductModel>{
    const url=this.baseUrl+"/addProduct";
    return this.http.post(url,obj).pipe(map(res=>res as ProductModel));
  }
  updateProduct(productId:string,obj:ProductModel){
    const url=this.baseUrl+"/edit/product/"+productId;
    return this.http.post(url,obj).pipe(map(res=>res as ProductModel));
  }

  getAppByIdAndOrgId(producId:string,orgId:string):Observable<ProductModel>{
    const url=this.baseUrl+"/getCatdata?childcatid="+producId+"&orgId="+orgId;
    return this.http.get(url).pipe(map(res=>res as ProductModel));
  }
}
