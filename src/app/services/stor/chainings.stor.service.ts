import { Chaining } from './../../models/Chaining.model';
import { Subject } from 'rxjs';
import { Assignment } from '../../models/Assignment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChainingsStoreService {

  chainingsUpdateWatcher:Subject<Chaining[]> = new Subject<Chaining[]>();

  private current_chainings:Chaining[] = [
  ];

  constructor() { }

  private registerChanges()
  {
    this.chainingsUpdateWatcher.next(this.getChainings());
  }

  getChainings ()
  {
    return this.current_chainings.slice();
  }

  addChaining(rule:Chaining){
    this.current_chainings.push(rule);
    this.registerChanges();
  }
  resetChainings( chainings: Chaining[] )
  {
    this.current_chainings = chainings;
    this.registerChanges();
  }

}
