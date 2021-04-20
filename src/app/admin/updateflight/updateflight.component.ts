import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {
  alert: boolean = false;
//sourceLoc: string = "";
  editFlightForm = new FormGroup({
    sourceLoc: new FormControl('', Validators.required),
    destLoc: new FormControl('', Validators.required),
    flightAmt: new FormControl('',[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    availableTickets: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
    flightDate: new FormControl('', Validators.required)
 });

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
      this.adminService.getCurrentFlight(this.route.snapshot.params.id)
          .subscribe((result) => {
            this.editFlightForm = new FormGroup({
              sourceLoc: new FormControl(result['sourceLoc'], Validators.required),
              destLoc: new FormControl(result['destLoc'], Validators.required),
              flightAmt: new FormControl(result['flightAmt'],
                  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              availableTickets: new FormControl(result['availableTickets'],
                    [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
                flightDate: new FormControl(result['flightDate'], Validators.required)
           });
                console.warn('result', result);

      });



  }

   //validation methods
   get sourceLoc(){return this.editFlightForm.get('sourceLoc')}
   get destLoc(){return this.editFlightForm.get('destLoc')}
   get flightAmt(){return this.editFlightForm.get('flightAmt')}
   get availableTickets(){return this.editFlightForm.get('availableTickets')}
   get flightDate(){return this.editFlightForm.get('flightDate')}

   onSubmit(){
    console.warn(this.editFlightForm.value);
    this.adminService
       .updateSelectedFlight(this.route.snapshot.params.id,this.editFlightForm.value)
         .subscribe((result) => {
              console.warn(result);
              this.alert = true;
              this.editFlightForm.reset({});

       });
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
