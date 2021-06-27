import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from './dashboard/service/app.service';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppMySite';
  isShowSideBar$: Observable<boolean> = new BehaviorSubject<boolean>(false);
  islogin$: Observable<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private loginService: LoginService, private router: Router, private appService: AppService) {
    this.islogin$ = loginService.isLoggedIn;
    this.isShowSideBar$=this.appService.IsShowSideBar;
  }
}
