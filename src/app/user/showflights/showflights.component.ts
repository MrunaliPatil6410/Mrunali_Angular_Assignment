import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-showflights',
  templateUrl: './showflights.component.html',
  styleUrls: ['./showflights.component.css']
})
export class ShowflightsComponent implements OnInit {

  collection: any = [];

  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router) { }

  ngOnInit(): void {

    //this.product = this.adminService.getFlights().subscribe();

  this.userService.getFlights().subscribe((result) => {

    console.log(result);
        this.collection = result;

});

}
}

