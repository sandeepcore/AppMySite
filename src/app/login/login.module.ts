import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './component/sign-up/sign-up.component';


@NgModule({
  declarations: [LoginFormComponent, SignUpComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
