import { Assignment } from './../models/Assignment.model';
import { Rule } from './../models/Rule.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubUser } from './SubUser.interface';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

 applicationHost:string = "http://localhost";

  constructor(private http: HttpClient) { }

  post(url:string, data:any){
    return this.http.post(url,data);
  }

  getRules()
  {
    return this.http.get<Rule[]>(`${this.applicationHost}/api/Rules`);
  }

  getAssignments()
  {
    return this.http.get<Assignment[]>(`${this.applicationHost}/api/Assignments`);
  }

  getUsers()
  {
    return this.http.get<SubUser[]>(`${this.applicationHost}/api/Users`);
  }


}
