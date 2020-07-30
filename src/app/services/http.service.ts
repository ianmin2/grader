import { Assignment } from './../models/Assignment.model';
import { Rule } from './../models/Rule.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

private applicationHost:string = "http://localhost";

  constructor(private http: HttpClient) { }

  getRules()
  {
    return this.http.get<Rule[]>(`${this.applicationHost}/api/Rules`);
  }

  getAssignments()
  {
    return this.http.get<Assignment[]>(`${this.applicationHost}/api/Assignments`);
  }


}
