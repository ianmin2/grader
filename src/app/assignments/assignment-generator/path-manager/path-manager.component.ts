import { Chaining } from './../../../models/Chaining.model';
import { Rule } from './../../../models/Rule.model';
import { GraderResponse } from './../../../models/Response.model';
import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Assignment } from 'src/app/models/Assignment.model';
import { User } from 'src/app/models/User.model';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { HttpService } from 'src/app/services/http.service';
import { AssignmentsStoreService } from 'src/app/services/stor/assignments.stor.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

declare var $;

@Component({
  selector: 'app-path-manager',
  templateUrl: './path-manager.component.html',
  styleUrls: ['./path-manager.component.css']
})
export class PathManagerComponent implements OnInit,OnDestroy {

  userProfile: User;
  assignmentsSubscription : Subscription;

  public gradingRules : {
    owned : Rule[],
    public: Rule[],
    ids: Number[],
  };

  public gradingSchema: Rule[] = [];

  public ruleBin = [];


  @ViewChild('ownedRules', {static: true}) ownedRules;
  ownedTable: any;

  @ViewChild('publicRules', {static: true}) publicRules;
  publicTable: any;

  public activeAssignment: Assignment;

  public assignments:Assignment[];

  public userAssignments: Assignment[];


  constructor(private http: HttpService, public helpers: ByteGraderHelperService, private router: Router, private ngZone: NgZone,  private assignmentsUpdater: AssignmentsStoreService) {

  }
  ngOnDestroy(): void {
    this.assignmentsSubscription.unsubscribe();
  }

  ngOnInit(): void {
   
    this.userProfile = this.helpers.getUserInfo();

    this.assignmentsSubscription = this.assignmentsUpdater.assignmentsUpdated.subscribe((assignments: Assignment[]) => {
      this.assignments = assignments;
      this.userAssignments = assignments.filter(assignment => <number>assignment.assignment_owner == <number>this.userProfile.id);
    });

    this.fetchAssignments();


    $(document).on('click','.assignmentPicker', (d) =>
    {
      d.stopPropagation();
      let identifier = $(d.currentTarget).attr('id');
      this.ngZone.run(() => this.setActiveAssignment( this.userAssignments.filter( assgnmnt => assgnmnt.assignment_id == identifier )[0]));
    })

    $(document).on('dblclick','.parentRuleList',(evt)=>{
      evt.stopPropagation();
      const identifier = $(evt.currentTarget).attr('id');
      const idxs = identifier.split('-');
      const item_position = parseInt( idxs[1], 10);
      let removeParentRules = confirm(`Do you want to reset the dependencies for this grading rule?`);
      if(removeParentRules) this.ngZone.run(() => this.gradingSchema[item_position].parent_rules = [] );
    })

    $(document).on('click','.idParent', (d) =>
    {
      d.stopPropagation();
      const identifier = $(d.currentTarget).attr('id');
      const idxs = identifier.split('-');
      const item_idx = parseInt( idxs[1], 10);
      const item_id = parseInt( idxs[0], 10)

      const default_id = this.gradingRules.ids[0];

      //@ Capture the parent rules
      const parent_rule = prompt(`Enter this Item's parent id. If multiple, separate by a comma`,`${default_id},`);
      if(!parent_rule) return;

      //@ Handle internal rule mapping
      
      this.ngZone.run(() => {

        parent_rule.split(',')
        .map(a=>parseInt(a,10))
        .filter(b=>(!isNaN(b)) && (this.gradingRules.ids.indexOf(b)!= -1 ) && (b!=item_id))
        .forEach( rule_id => {
          //@ Add the parent rule dependency
            this.gradingSchema[item_idx].parent_rules.push(rule_id);  
        });
        
        // alert(`${identifier} clicked === ${item_idx}`);
        this.gradingSchema[item_idx].parent_rules = this.gradingSchema[item_idx].parent_rules.filter((a,idx)=> (this.gradingSchema[item_idx].parent_rules.lastIndexOf(a) == idx) );

      });
      

    });


  }

  private navigate(commands: any[], pars: any = {}): void {
    this.ngZone.run(() => this.router.navigate(commands,pars)).then();
  }

  setActiveAssignment(assignment: Assignment){
    this.activeAssignment = <Assignment>assignment;
    if(!this.activeAssignment) return;
    this.fetchAssignmentRules(this.activeAssignment.assignment_id);
  }

  hasActiveAssignment(){
    return this.activeAssignment != undefined;
  }

  clearActiveAssignment() {
    this.activeAssignment = undefined;
  }

  stringify(data){
    return this.helpers.str(data);
  }

  fetchAssignments(){
    this.http.getAssignments().subscribe((d: GraderResponse)=> {
      if(d.response == 200){
        // console.dir(d.data.message);
        this.assignmentsUpdater.resetAssignments(<Assignment[]>d.data.message);
       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    }, err => {});
  }

  fetchAssignmentRules(assignmentId){
    this.http.getRules(assignmentId,true,true).subscribe((d: GraderResponse) => {
      if(d.response == 200)
      {
        this.setGradingRules(d.data.message);   
      }
      else{
        alert(`${d.data.message.toString()}`);
      }
    })
  }


  onDrop(evt: CdkDragDrop<any[]>, copy:boolean = false, noDrop: boolean = false, bin: boolean = false ){
    if(evt.previousContainer == evt.container)
    {
      moveItemInArray(evt.container.data, evt.previousIndex, evt.currentIndex);     
    }
    else
    {
      if(noDrop){
        if(bin){         
          //@ remove the item from the array
          evt.previousContainer.data.splice(evt.previousIndex,1);
        }
        return;
      }       
      if(!copy)
      {
        transferArrayItem(evt.previousContainer.data, evt.container.data, evt.previousIndex, evt.currentIndex);       
      }
      else
      {
        this.gradingSchema.splice(evt.currentIndex,0, <Rule>this.helpers.clone(evt.previousContainer.data[evt.previousIndex]));
          // copyArrayItem(evt.previousContainer.data,evt.container.data, evt.previousIndex, evt.currentIndex);
      }
    }
  }


  saveGradingScheme(){
    // let minimizedGradingScheme = [];

    // this.gradingSchema.forEach((ruleItem: Rule, idx) => {
    //   minimizedGradingScheme[idx] = {
    //     rule: ruleItem.rule_id,
    //     parents: ruleItem.parent_rules,
    //   };
    // });
    let sure = confirm(`Save the grading scheme for the assignment ${this.activeAssignment.assignment_name}?`);
    if(!sure) return;

    let rule_chaining: Chaining = {
      chaining_type : 'explicit',
      chaining_assignment : this.activeAssignment.assignment_id,
      chaining_rules: this.gradingSchema,
    };

    this.http.addChaining(rule_chaining).subscribe((d:GraderResponse)=>{
      if(d.response == 200){
        alert( `Grading rule chaining added for the assignment ${this.activeAssignment.assignment_name}.`);
        this.ngZone.run(() => this.resetChainingUI());
       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    });

  }

  resetChainingUI(){
    this.ngZone.run(() =>{
    
      this.setActiveAssignment(undefined);

      this.setGradingRules(undefined); 

      this.gradingSchema = [];
    
      this.ruleBin = [];

    });
  }

  setGradingRules( bundledObj ){

    //@ don't waste time
    if(!bundledObj||!bundledObj.owned||!bundledObj.public||!bundledObj.ids) { 
      this.gradingRules = bundledObj; 
      return;
    }

    //@ setup the base object
    this.gradingRules = {
        owned : [],
        public: [],
        ids: [],
      };                                                                                                      

    //@ convert to object
   let props = ["owned","public","ids"];
    
   props.forEach(prop => {
      this.gradingRules[prop] = (Array.isArray(bundledObj[prop]))
      ?  bundledObj[prop]
      : Object.keys(bundledObj[prop]).map(vl=>bundledObj[prop][vl]);                                                                                                      
   });

  }


}
