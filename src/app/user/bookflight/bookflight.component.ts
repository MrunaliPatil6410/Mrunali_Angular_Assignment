import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
//import { BookflightComponent } from '../../../../.history/src/app/user/bookflight/bookflight.component_20210420112727';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

 bookFlightForm=new FormGroup({
  flightId:new FormControl(''),
  userName:new FormControl('',Validators.required),
  gender:new FormControl('',Validators.required),
  age:new FormControl('',[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
  flightDate:new FormControl(''),
  
availableTickets:new FormControl('')

})
alert=false;
  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router,
               private dataService: DataService) { }


  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
      this.userService.getCurrentFlight(this.route.snapshot.params.id)
          .subscribe((result) => {
            this.bookFlightForm = new FormGroup({
              flightId: new FormControl(result['id']),
              flightDate: new FormControl(result['flightDate']),
              userName: new FormControl(result['userName'],Validators.required),
              gender: new FormControl(result['gender'],Validators.required),
              age: new FormControl(result['age'],[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              
              availableTickets:new FormControl(result['availableTickets']-1)

              });

            }); }

  get userName(){return this.bookFlightForm.get('userName')}
  get gender(){return this.bookFlightForm.get('gender')}
  get age(){return this.bookFlightForm.get('age')}


  bookFlight(){
    this.userService.bookFlight(this.bookFlightForm.value).subscribe((result)=>{
      console.log("result is here", result);

    });
this.alert = true;

      this.bookFlightForm.reset({});

  //update tickets after flight booking
    /*this.userService
       .updateSelectedFlight(this.route.snapshot.params.id,this.bookFlightForm.value)
         .subscribe((result) => {
           
           
         this.bookFlightForm[this.route.snapshot.params.id].availableTickets = 
                           result[this.route.snapshot.params.id].availableTickets - 1;
              console.warn(result);
              });*/
     
  }
  flightId(flightId: any, value: any) {
    throw new Error('Method not implemented.');
  }

  closeAlert()
  {
    this.alert = false;
    this.router.navigate(['user/showflights']);
  }

  onCancle(){
    this.router.navigate(['user/showflights']);
  }

}


