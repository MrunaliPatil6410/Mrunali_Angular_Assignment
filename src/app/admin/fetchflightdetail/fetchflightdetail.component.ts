import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-fetchflightdetail',
  templateUrl: './fetchflightdetail.component.html',
  styleUrls: ['./fetchflightdetail.component.css']
})
export class FetchflightdetailComponent implements OnInit {
  id:any;
  data:any;
 constructor(private route: ActivatedRoute,private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFlightDetail(this.id);
  }

  getFlightDetail(id)
   {
     this.adminService.getFlight(id).subscribe((data) => {
       this.data = data;
       console.log(this.data);
     });
   }

}
