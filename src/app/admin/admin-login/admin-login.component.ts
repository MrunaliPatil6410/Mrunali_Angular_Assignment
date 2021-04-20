
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  email: string;
   password: string;

  constructor( private router: Router) { }

  ngOnInit(): void {}

    // tslint:disable-next-line: typedef
    logIn(){
      console.log(this.email);


      if(this.email == 'admin@gmail.com' && this.password == 'Admin@123') {
          // tslint:disable-next-line: no-unused-expression

          this.router.navigate([ './admin/locations']);
       }
       else
       {
         alert('Please enter valid details');

       }
    }


}

