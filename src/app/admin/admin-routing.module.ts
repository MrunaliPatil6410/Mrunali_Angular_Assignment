import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { EditlocationComponent } from './editlocation/editlocation.component';
import { LocationslistComponent } from './locationslist/locationslist.component';
import { FetchlocdetailComponent } from './fetchlocdetail/fetchlocdetail.component';
import { FlightslistComponent } from './flightslist/flightslist.component';
import { AddflightComponent } from './addflight/addflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { FetchflightdetailComponent } from './fetchflightdetail/fetchflightdetail.component';

const routes: Routes = [

  {path: 'locations', component : LocationslistComponent},
  {path: 'addlocation', component: AddlocationComponent},
  {path: 'edit/:id', component : EditlocationComponent},
  {path: 'adminlogin', component : AdminLoginComponent},
  {path: 'viewDetails/:id', component : FetchlocdetailComponent},
  {path: 'flights', component : FlightslistComponent},
  {path: 'flights/new', component : AddflightComponent},
  {path: 'flights/update/:id', component : UpdateflightComponent},
  {path: 'flights/flightDetails/:id', component : FetchflightdetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
