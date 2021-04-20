import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";

import { UserService } from "../user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService, private route: Router,
              private authService: AuthService, private router: Router
) { }

ngOnInit(): void {
}



onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token',token.userName);
      console.log(token);

      alert('Login Successful');
      this.router.navigate(['user/showflights']);
      }
      else {

      alert('Login not successful');
    }
}}












