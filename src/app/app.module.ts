import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminService } from './admin/admin.service';
import { UserService } from './user/user.service';
//import { UserauthService } from '../../.history/src/app/user/userauth.service_20210419115403';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent


    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AdminService,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
