import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
// import { LoginService } from 'src/app/login-form/login.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { LoginService } from 'src/app/service/login.service';
// import { UserModel } from 'src/app/user-management/component/user-management-form/usermodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginUser: any = {};
  constructor(
   // private toast: ToastrService,
   private loginService:LoginService,
    private route: Router) {
    this.loginUser = loginService.getCurrentUser();

  }

  ngOnInit(): void {
  }

  logout() {
   this.loginService.logoutUser();
    //this.toast.success('Logged out successfully');
  }
  about(){
    //this.route.navigate(['/about']);
  }

}
