import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UserRegister } from '../login/model/UserRegister';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string='';
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loggedInValue:boolean = false; // {1}
  constructor(private http:HttpClient,private router:Router) { 
    this.baseUrl=environment.apiUrl+"/users";
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  get isLoggedInValue(){
    return this.loggedInValue;
  }

  setIsLoggedIn(value:boolean){
    this.loggedInValue=value;
    this.loggedIn.next(value);
  }
  authorizeUser(obj:any):Observable<any>{
    const url=this.baseUrl+"/login"
    // return this.http.post(url,obj).pipe(map(res=>res as any));
   if(obj.email=='test@abc.com' && obj.password=="test"){
     return of(true);
   }
   return of(false);
  }

  registerUser(obj:UserRegister):Observable<boolean>{
    const url=this.baseUrl+"/signup"
    return this.http.post(url,obj).pipe(map(res=>res as any));
  }

  logoutUser(){
    this.setIsLoggedIn(false);
    localStorage.clear();
    this.router.navigate(["/login"])
  }

  getCurrentUser():any{
    let obj  = {
      id: 12,
      accountName: 'APP USER',
      active: true,
      mobileNo: '7891832230',
      email: 'abc@test.com',
      roleType: "ADMIN"
    }
    return obj;
  }
}
