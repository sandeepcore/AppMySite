import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/app/dashboard/Model/AppModel';
import { AppService } from 'src/app/dashboard/service/app.service';
import { LoginService } from 'src/app/service/login.service';
//import { LoginService } from 'src/app/login-form/login.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  selectedApp: AppModel = new AppModel();
  clickFlag: boolean;

  constructor(private appService: AppService, private loginService: LoginService) {
    this.selectedApp = appService.selectedApp;
  }
  ngOnInit(): void {
  }
  classClick() {
    this.clickFlag = !this.clickFlag;
  }
  signOut() {
    this.loginService.logoutUser();
  }
}
