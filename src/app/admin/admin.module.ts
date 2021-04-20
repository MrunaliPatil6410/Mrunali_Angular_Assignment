import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

//import { AdminLoginComponent } from './admin-login/admin-login.component';
import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';


import { AddlocationComponent } from './addlocation/addlocation.component';
import { EditlocationComponent } from './editlocation/editlocation.component';
import { LocationslistComponent } from './locationslist/locationslist.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchlocdetailComponent } from './fetchlocdetail/fetchlocdetail.component';
import { FlightslistComponent } from './flightslist/flightslist.component';
import { AddflightComponent } from './addflight/addflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { FetchflightdetailComponent } from './fetchflightdetail/fetchflightdetail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



console.warn('Admin module loaded');
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    LocationslistComponent,
    AddlocationComponent,
     AdminLoginComponent,
     EditlocationComponent,
     FetchlocdetailComponent,
     FlightslistComponent,
     AddflightComponent,
     UpdateflightComponent,
     FetchflightdetailComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   ],

  exports: [
    LocationslistComponent,
    AddlocationComponent,
     AdminLoginComponent,
     EditlocationComponent,
     FetchlocdetailComponent,
     FlightslistComponent,
     AddflightComponent,
     UpdateflightComponent,
     FetchflightdetailComponent
      ]
})
export class AdminModule { }
