import { LoginModel } from './../models/Login.model';
import { Attempts } from './../models/Attempts.model';
import { Chaining } from './../models/Chaining.model';
import { User } from './../models/User.model';
import { Assignment } from './../models/Assignment.model';
import { Rule } from './../models/Rule.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubUser } from './../models/SubUser.model';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

 applicationHost:string = "http://localhost";

  constructor(private http: HttpClient) { }

  post(url:string, data:any){
    return this.http.post(url,data);
  }


  //=============================================================================
  //# USERS
  //=============================================================================

  login( userCredentials : LoginModel  )
  {
    return this.http.post(`${this.applicationHost}?command=auth`, userCredentials,{headers: {"content-type": "application/json"}} );
  }

  addUser( userData: User )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=user`, userData);
  }

  getUsers()
  {
    return this.http.get<SubUser[]>(`${this.applicationHost}?command=get&table=users`);
  }

  //=============================================================================
  //# ASSIGNMENTS
  //=============================================================================

  addAssignment(assignmentData : Assignment)
  {
    return this.http.post(`${this.applicationHost}?command=add&table=assignment`, assignmentData);
  }

  getAssignments()
  {
    return this.http.get<Assignment[]>(`${this.applicationHost}?command=get&table=assignments`);
  }

  //=============================================================================
  //# RULES
  //=============================================================================
  addRule( ruleData: Rule )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=route`, ruleData);
  }

  getRules()
  {
    return this.http.get<Rule[]>(`${this.applicationHost}?command=get&table=routes"`);
  }


  //=============================================================================
  //# CHAINING
  //=============================================================================

  addChaining(chaining: Chaining)
  {
    return this.http.post<Chaining[]>(`${this.applicationHost}?command=add&table=chaining`,chaining);
  }

  getChaining()
  {
    return this.http.get<Chaining[]>(`${this.applicationHost}?command=get&table=chainings`);
  }


  //=============================================================================
  //# ATTEMPTS
  //=============================================================================

  addAttempt( attempt: Attempts )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=attempt`,attempt);
  }

  getAttempts()
  {
    return this.http.get<Attempts[]>(`${this.applicationHost}?command=get&table=attempts`);
  }


}
