import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userName:string="";
  password:string="";
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    let obj={"email":this.userName,"password":this.password};
    this.loginService.authorizeUser(obj).subscribe(v=>{
       if(v) {
         localStorage.setItem("token",v.token);
         this.loginService.setIsLoggedIn(true);
         this.router.navigate(['/']); 
        }
       
    })
  }
}
