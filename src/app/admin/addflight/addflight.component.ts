import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  alert: boolean = false;

  addFlightForm = new FormGroup({
    sourceLoc: new FormControl('', Validators.required),
    destLoc: new FormControl('', Validators.required),
    flightAmt: new FormControl('',[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    availableTickets: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
    flightDate: new FormControl('', Validators.required)
 });

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

   //validation methods
   get sourceLoc(){return this.addFlightForm.get('sourceLoc')}
   get destLoc(){return this.addFlightForm.get('destLoc')}
   get flightAmt(){return this.addFlightForm.get('flightAmt')}
   get availableTickets(){return this.addFlightForm.get('availableTickets')}
   get flightDate(){return this.addFlightForm.get('flightDate')}

   addFlight()
   {

     this.adminService.addFlight(this.addFlightForm.value).subscribe((result)=>{
       console.log("result is here", result);
     });
     this.alert = true;
     this.addFlightForm.reset({});
     }

     closeAlert()
     {
       this.alert = false;
       this.router.navigate(['admin/flights']);
     }

   onCancle(){
     this.router.navigate(['admin/flights']);
   }

}
