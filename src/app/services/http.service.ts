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

  getChaining()
  {
    return this.http.get<SubUser[]>(`${this.applicationHost}?command=get&table=users`);
  }

  //=============================================================================
  //# ATTEMPTS
  //=============================================================================

  getAttempts()
  {
    return this.http.get<SubUser[]>(`${this.applicationHost}?command=get&table=users`);
  }


}
