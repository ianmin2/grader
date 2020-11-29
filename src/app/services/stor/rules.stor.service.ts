import { Rule } from './../../models/Rule.model';
import { Subject } from 'rxjs';
import { Assignment } from '../../models/Assignment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesStoreService {

  rulesUpdateWatcher:Subject<Rule[]> = new Subject<Rule[]>();

  private current_rules:Rule[] = [
  ];

  constructor() { }

  private registerChanges()
  {
    this.rulesUpdateWatcher.next(this.getRules());
  }

  getRules ()
  {
    return this.current_rules.slice();
  }

  addRule(rule:Rule){
    this.current_rules.push(rule);
    this.registerChanges();
  }
  resetRules( rules: Rule[] )
  {
    this.current_rules = rules;
    this.registerChanges();
  }

}
