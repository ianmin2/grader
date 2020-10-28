import { GraderResponse } from './../../../models/Response.model';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Assignment } from 'src/app/models/Assignment.model';
import { User } from 'src/app/models/User.model';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { HttpService } from 'src/app/services/http.service';
import { AssignmentsStoreService } from 'src/app/services/stor/assignments.stor.service';

declare var $;

@Component({
  selector: 'app-path-manager',
  templateUrl: './path-manager.component.html',
  styleUrls: ['./path-manager.component.css']
})
export class PathManagerComponent implements OnInit {

  userProfile: User;

  assignmentsSubscription : Subscription;

  public gradingRules : {
    owned : any[],
    public: any[],
  };

  public activeAssignment: Assignment;

  public assignments:Assignment[];

  public userAssignments: Assignment[];

  constructor(private http: HttpService, public helpers: ByteGraderHelperService, private router: Router, private ngZone: NgZone,  private assignmentsUpdater: AssignmentsStoreService) {

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
      }
      else{
        alert(`${d.data.message.toString()}`);
      }
    })
  }

}
