import { Component, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppMySite';
  islogin$:Observable<boolean>=new BehaviorSubject<boolean>(false);
  constructor(private loginService:LoginService){
    this.islogin$=loginService.isLoggedIn;
  }
}
