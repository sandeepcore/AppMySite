
import { MaterialModule } from './material/material.module';
import { OrderListModule } from './order-list/order-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainareaModule } from './mainarea/mainarea.module';
import { LoginModule } from './login/login.module';
import { StepModule } from './step/step.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpInterceptorProviders } from './http-interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MainareaModule,
    LoginModule,
    StepModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [
    HttpInterceptorProviders
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
