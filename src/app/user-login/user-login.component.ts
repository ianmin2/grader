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

  constructor(private http: HttpService, private _localStorage: LocalStorageService) {

  }

  ngOnInit(): void {

    this.authenticate();

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

  private authenticate()
  {
    if(this._localStorage.get("auth")!=undefined)
    {
      window.location.href = window.location.href.replace(/\/auth/ig, '');
    }
  }

  //@ Save the login credentials and perform the login hopping
  private setAuthCrededentials( data: {response,data:{message,command}},   _localStorage: LocalStorageService )
  {
    if(data["response"] == 200)
    {
      _localStorage.set("auth",data.data.message);
      this.authenticate();
    }
    else
    {
      alert(data.data.message);
    }
  }

  registerUser(){

    let newUser  = this.clone(this.registrationForm.value);
    delete newUser.password_2;
    this.http.addUser(newUser).subscribe((a:{response,data:{message,command}}) =>this.setAuthCrededentials(a,this._localStorage));
  }

  loginUser()
  {
    let userData  =  this.loginForm.value;
   ;
    this.http.login(userData).subscribe((a:{response,data:{message,command}}) =>this.setAuthCrededentials(a,this._localStorage));

  }

}
