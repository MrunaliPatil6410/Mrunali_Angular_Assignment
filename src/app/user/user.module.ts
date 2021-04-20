import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
//import { BookflightComponent } from './bookflight/bookflight.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ShowflightsComponent } from './showflights/showflights.component';
import { BookflightComponent } from './bookflight/bookflight.component';

console.warn('User module loaded');
@NgModule({
  declarations: [
    BookflightComponent,
     LoginComponent,
     AvailableflightsComponent,
     RegisterComponent,
      ResetpasswordComponent,
      ShowflightsComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports: [
    BookflightComponent,
    LoginComponent,
    AvailableflightsComponent,
    RegisterComponent,
    ResetpasswordComponent
  ]
})
export class UserModule { }
