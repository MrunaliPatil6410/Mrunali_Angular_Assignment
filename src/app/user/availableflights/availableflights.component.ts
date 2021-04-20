import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: ['./availableflights.component.css']
})
export class AvailableflightsComponent implements OnInit {

  collection: any = [];

  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router) { }

  ngOnInit(): void {

    //this.product = this.adminService.getFlights().subscribe();

  this.userService.getFlights().subscribe((result) => {

    console.log(result);
        this.collection = result;



     });

  }


  bookFlight(){
    this.router.navigate(['/user/login']);
  }


}

