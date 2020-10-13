import { Attempts } from './../../models/Attempts.model';
import { Rule } from './../../models/Rule.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttemptStoreService {

  attemptsUpdated:Subject<Attempts[]> = new Subject<Attempts[]>();

  private current_attempts:Attempts[] = [
  ];

  constructor() { }

  private registerChanges()
  {
    this.attemptsUpdated.next(this.getAssignments());
  }

  getAssignments ()
  {
    return this.current_attempts.slice();
  }

  addAttempt(attempt:Attempts){
    this.current_attempts.push(attempt);
    this.registerChanges();
  }

  resetAttempts( attempts: Attempts[] )
  {
    this.current_attempts = attempts;
    this.registerChanges();
  }

}
