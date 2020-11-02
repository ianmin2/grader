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
  };

  public gradingSchema = []


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

    $(document).on('click','.idParent', (d) =>
    {
      d.stopPropagation();
      let identifier = $(d.currentTarget).attr('id');
      console.dir(d);

      this.ngZone.run(() => {
        alert(`${identifier} clicked`)
      });

    });


  }

  private navigate(commands: any[], pars: any = {}): void {
    this.ngZone.run(() => this.router.navigate(commands,pars)).then();
  }

  clearAssignment()
  {
    this.setActiveAssignment(undefined);
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
        this.gradingRules = d.data.message;
        this.gradingRules.owned[0].rule_path;

      }
      else{
        alert(`${d.data.message.toString()}`);
      }
    })
  }


  onDrop(evt: CdkDragDrop<any[]>, copy:boolean = false, noDrop: boolean = false ){
    if(evt.previousContainer == evt.container)
    {
      moveItemInArray(evt.container.data, evt.previousIndex, evt.currentIndex);
    }
    else
    {
      if(noDrop) return;      
      if(!copy)
      {
        transferArrayItem(evt.previousContainer.data, evt.container.data, evt.previousIndex, evt.currentIndex);
      }
      else
      {
        copyArrayItem(evt.previousContainer.data,evt.container.data, evt.previousIndex, evt.currentIndex);
      }
    }
  }

  delItem(  ){
    alert('Huh?')
    console.dir(itm)
  }



}
