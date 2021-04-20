import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../admin.service';
//import { AdminService } from '../admin.service';
//import { AdminService } from './admin/admin.service';
//import { Location } from '../location.model';

@Component({
  selector: 'app-locationslist',
  templateUrl: './locationslist.component.html',
  styleUrls: ['./locationslist.component.css']
})
export class LocationslistComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router,
    private route: ActivatedRoute) { }
  collection: any = [];

  ngOnInit(): void {
    this.adminService.getLocations().subscribe((result) => {
      console.log(result);
      this.collection = result;
    },err => console.error(err),
    () => console.log('getLocations completed')
    );

  }

  onNewLocation(){
    this.router.navigate(['admin/addlocation']);
  }

  deleteLocation(item){
    this.collection.splice(item-1, 1);
     this.adminService.deleteLocation(item).subscribe((result) => {
       console.warn("result", result);
     });
  }


}
