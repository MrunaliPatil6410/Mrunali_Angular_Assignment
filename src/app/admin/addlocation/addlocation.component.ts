import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  alert: boolean = false;

  locationForm = new FormGroup({
     sourceLoc: new FormControl('', Validators.required),
     destLoc: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {


  }

  //validation methods
  get sourceLoc(){return this.locationForm.get('sourceLoc')}
  get destLoc(){return this.locationForm.get('destLoc')}

  addLocation()
  {

    this.adminService.addLocation(this.locationForm.value).subscribe((result)=>{
      console.log("result is here", result);
    });
    this.alert = true;
    this.locationForm.reset({});
    }

    closeAlert()
    {
      this.alert = false;
      this.router.navigate(['admin/locations']);
    }

  onCancle(){
    this.router.navigate(['admin/locations']);
  }







}





