import { HttpService } from './../services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})


export class UserLoginComponent implements OnInit {

  loginForm : FormGroup;
  registrationForm: FormGroup;

  constructor(private http: HttpService, private _localStrorage: LocalStorageService) { }

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
    this.http.addUser(newUser).subscribe(resp=>{
      if(resp["response"] == 200)
      {
        this._localStrorage.set("auth",resp["data"]["message"]);
      }
      else
      {
        alert(resp["data"]["message"]);
      }
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
