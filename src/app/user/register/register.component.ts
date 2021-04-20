import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert: boolean = false;

  createUser = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}



  onSubmit() {
    console.log(this.createUser.value);
    this.userService.registerUser(this.createUser.value).subscribe((result) => {
      console.log('result is here', result);
    });
    this.alert = true;
    this.createUser.reset({});

  }
  closeAlert()
     {
       this.alert = false;
       this.router.navigate(['user/login']);
     }



}
