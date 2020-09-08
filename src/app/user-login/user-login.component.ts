import { HttpService } from './../services/http.service';
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

  constructor(private http: HttpService) { }

  ngOnInit(): void {

    //@ handle logins
    this.loginForm = new FormGroup({
      username  : new FormControl("", [Validators.required, Validators.minLength(4)]),
      password  : new FormControl("", [Validators.required,Validators.minLength(4)])
    });

    //@ handle registrations
    this.registrationForm = new FormGroup({
      name  : new FormControl("", Validators.required),
      email  : new FormControl("", Validators.required),
      username  : new FormControl("", [Validators.required, Validators.minLength(4)]),
      password  : new FormControl("", [Validators.required, Validators.minLength(4)]),
      password_2 : new FormControl("", [Validators.required, Validators.minLength(4)])
    });


  }

  private clone (d:any = {}){
    if (typeof d == "string") return {};
    return JSON.parse(JSON.stringify(d));
  }


  registerUser(){

    let newUser  = this.clone(this.registrationForm.value);
    delete newUser.password_2;
    this.http.addUser(newUser).subscribe(d=>{
      console.dir(d);
    });
  }

  loginUser()
  {
    let userData  =  this.loginForm.value;
    this.http.login(userData).subscribe(function(d){
      console.log(`\n\n\AUTH RESPONSE\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=`)
      console.dir(d);
    });

  }

}
