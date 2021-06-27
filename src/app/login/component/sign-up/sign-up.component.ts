import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserRegister } from '../../model/UserRegister';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email:string="";
  password:string="";
  orgId:string="";
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  registerUser(){
    let obj:UserRegister={email:this.email,password:this.password,orgId:this.orgId};
    this.loginService.registerUser(obj).subscribe(v=>{
      if(v) {
        this.loginService.setIsLoggedIn(true);
        this.router.navigate(['/login']); 
       }
    });
  }

}
