import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
//import { AdminService } from '../../../../.history/src/app/admin/admin.service_20210417123442';

@Component({
  selector: 'app-fetchlocdetail',
  templateUrl: './fetchlocdetail.component.html',
  styleUrls: ['./fetchlocdetail.component.css']
})
export class FetchlocdetailComponent implements OnInit {
   id:any;
   data:any;
  constructor(private route: ActivatedRoute,private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetail(this.id);
   }

   getDetail(id)
   {
     this.adminService.getLocation(id).subscribe((data) => {
       this.data = data;
       console.log(this.data);
     });
   }

}
