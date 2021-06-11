import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SpinnerService } from 'src/app/spinner/spinner.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string='';
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loggedInValue:boolean = false; // {1}
  constructor(private http:HttpClient,private router:Router,private spinner:SpinnerService) { 
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
  authorizeUser(obj:any):Observable<boolean>{
    // this.baseUrl=;
    // return this.http.post(this.baseUrl,obj).pipe(map(res=>res as JwtResponse|any));
   if(obj.userName=='test@abc.com' && obj.password=="test"){
     return of(true);
   }
   return of(false);
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
