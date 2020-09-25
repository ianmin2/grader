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

 applicationHost:string = "http://localhost/";

  constructor(private http: HttpClient) { }

  post(url:string, data:any){
    return this.http.post(url,data);
  }


  //=============================================================================
  //# USERS
  //=============================================================================

  login( userCredentials : LoginModel  )
  {
    return this.http.post(`${this.applicationHost}?command=auth`,userCredentials,{headers: {"content-type": "application/json"}} );
  }

  addUser( userData: User )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=user`, userData,{headers: {"content-type": "application/json"}});
  }

  getUsers()
  {
    return this.http.get<{response,data: {message,command}}>(`${this.applicationHost}?command=get&table=users`);
  }

  //=============================================================================
  //# ASSIGNMENTS
  //=============================================================================

  addAssignment(assignmentData : Assignment)
  {
    assignmentData['assignment_due'] = new Date(parseInt(assignmentData['assignment_due']['year']),parseInt(assignmentData['assignment_due']['month']),parseInt(assignmentData['assignment_due']['day'])).toISOString();
    return this.http.post(`${this.applicationHost}?command=add&table=assignment`, assignmentData, {headers: {"content-type": "application/json"}});
  }

  getAssignments(id?)
  {
    return this.http.get<{response,data: {message,command}}>(`${this.applicationHost}?command=get&table=assignments${id?'&id='+id:''}`);
  }

  //=============================================================================
  //# RULES
  //=============================================================================
  addRule( ruleData: Rule )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=route`, ruleData, {headers: {"content-type": "application/json"}});
  }

  getRules()
  {
    return this.http.get<{response,data: {message,command}}>(`${this.applicationHost}?command=get&table=routes`);
  }


  //=============================================================================
  //# CHAINING
  //=============================================================================

  addChaining(chaining: Chaining)
  {
    return this.http.post<Chaining[]>(`${this.applicationHost}?command=add&table=chaining`,chaining, {headers: {"content-type": "application/json"}});
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
    return this.http.post(`${this.applicationHost}?command=add&table=attempt`,attempt,{headers: {"content-type": "application/json"}});
  }

  getAttempts()
  {
    return this.http.get<Attempts[]>(`${this.applicationHost}?command=get&table=attempts`);
  }


}
