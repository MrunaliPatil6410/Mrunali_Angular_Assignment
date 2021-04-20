import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-flightslist',
  templateUrl: './flightslist.component.html',
  styleUrls: ['./flightslist.component.css']
})
export class FlightslistComponent implements OnInit {
  collection: any = [];
  constructor(private route:ActivatedRoute, private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.getFlights().subscribe((result) => {
      console.log(result);
      this.collection = result;
    },err => console.error(err),
    () => console.log('getLocations completed')
    );

    //console.log(collection);

  }

  onNewFlight(){

      this.router.navigate(['admin/flights/new']);

  }

  onDeleteFlight(item){
    this.collection.splice(item-1, 1);
     this.adminService.deleteFlight(item).subscribe((result) => {
       console.warn("result", result);
     });
  }

}
