import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
import {  BookflightComponent } from './bookflight/bookflight.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ShowflightsComponent } from './showflights/showflights.component';

const routes: Routes = [
  {path : 'bookflight/:id', component: BookflightComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'availableFlights', component: AvailableflightsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'showflights', component: ShowflightsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
