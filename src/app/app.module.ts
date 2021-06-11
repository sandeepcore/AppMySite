
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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MainareaModule,
    LoginModule
    
  ],
  providers: [
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
