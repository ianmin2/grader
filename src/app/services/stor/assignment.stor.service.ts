import { Rule } from './../../models/Rule.model';
import { Subject } from 'rxjs';
import { Assignment } from '../../models/Assignment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentStoreService {

  assignmentUpdated:Subject<Assignment[]> = new Subject<Assignment[]>();

  private current_assignments:Assignment[] = [
  ];

  constructor() { }

  private registerChanges()
  {
    this.assignmentUpdated.next(this.getAssignments());
  }

  getAssignments ()
  {
    return this.current_assignments.slice();
  }

  addAssignment(assignment:Assignment){
    this.current_assignments.push(assignment);
    this.registerChanges();
  }

  // addAssignments(current_assignments:Assignment[])
  // {
  //    this.current_assignments.push(...current_assignments);
  //    this.registerChanges();
  // }

  registerRoutes( routes: Rule[] )
  {
    this.current_assignments[0].routes = routes;
  }

}
