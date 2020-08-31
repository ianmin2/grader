import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})


export class UserLoginComponent implements OnInit {

  loginForm : FormGroup;
  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    //@ handle logins
    this.loginForm = new FormGroup({
      usename  : new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password  : new FormControl(null, Validators.required)
    });

    //@ handle registrations
    this.registrationForm = new FormGroup({
      name  : new FormControl(null, Validators.required),
      email  : new FormControl(null, Validators.required),
      usename  : new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password  : new FormControl(null, Validators.required)
    });




  }

}
