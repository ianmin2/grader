import { LoginModel } from './../models/Login.model';
import { Attempts } from './../models/Attempts.model';
import { Chaining } from './../models/Chaining.model';
import { User } from './../models/User.model';
import { Assignment } from './../models/Assignment.model';
import { Rule } from './../models/Rule.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubUser } from './../models/SubUser.model';
import { GraderResponse } from '../models/Response.model';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  tableNames: String[] = ['users','routes','chainings','attempts','assignments']

 applicationHost:string =  "http://localhost/"; // `${window.location.href}/api.php/`; //"http://localhost/"; 

  constructor(private http: HttpClient) { }

  post(url:string, data:any){
    return this.http.post(url,data);
  }

  getLocal( data : any)
  {
    return this.http.get(this.applicationHost, { params: data });
  }

  postLocal( data : any)
  {
    return this.http.post(this.applicationHost, data);
  }

  //=============================================================================
  //# COUNT SUMMARY
  //=============================================================================
  countAllRecords()
  {
    return Promise.all(
      this.tableNames.map( tableName =>
        new Promise((resolve,reject) =>
          this.http.post(this.applicationHost,{ command : 'count', table : tableName  })
          .subscribe(( fieldData: GraderResponse)=> {
            resolve(fieldData.data.message);
          },
          err => {
            reject(err)
          })
        )
      )
    )
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
    return this.http.get<GraderResponse>(`${this.applicationHost}?command=get&table=users`);
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
    return this.http.get<GraderResponse>(`${this.applicationHost}?command=get&table=assignments${id?'&id='+id:''}`);
  }

  //=============================================================================
  //# RULES
  //=============================================================================
  addRule( ruleData: Rule )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=route`, ruleData, {headers: {"content-type": "application/json"}});
  }

  getRules(id?,isIdAssignment=false,grouped=false)
  {
    return this.http.get<GraderResponse>(`${this.applicationHost}?command=get&table=routes${id?'&id='+id+'&byAssignment='+isIdAssignment+'&grouped='+grouped:''}`);
  }


  //=============================================================================
  //# CHAINING
  //=============================================================================

  addChaining(chaining: Chaining)
  {
    return this.http.post(`${this.applicationHost}?command=add&table=chaining`,chaining, {headers: {"content-type": "application/json"}});
  }

  getChaining()
  {
    return this.http.get<GraderResponse>(`${this.applicationHost}?command=get&table=chaining`);
  }


  //=============================================================================
  //# ATTEMPTS
  //=============================================================================

  addAttempt( attempt: Attempts )
  {
    return this.http.post(`${this.applicationHost}?command=add&table=attempt`,attempt,{headers: {"content-type": "application/json"}});
  }

  getAttempts(assignment?,id?)
  {
    return this.http.get<GraderResponse>(`${this.applicationHost}?command=get&table=attempts${assignment?'&assignment='+assignment:''}${id?'&id='+id:''}`);
  }


  //=============================================================================
  //# GRADING
  //=============================================================================
  doGrading ( referenceObject: any )
  {
    return this.http.post<GraderResponse>(`${this.applicationHost}?command=grade`,referenceObject,{headers: {"content-type": "application/json"}});
  }

}
