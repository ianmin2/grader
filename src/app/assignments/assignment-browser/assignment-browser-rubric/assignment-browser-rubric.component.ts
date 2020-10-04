import { Rule } from './../../../models/Rule.model';
import { HttpService } from './../../../services/http.service';
import { Assignment } from './../../../models/Assignment.model';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { AssignmentStoreService } from '../../../services/stor/assignment.stor.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-assignment-browser-rubric',
  templateUrl: './assignment-browser-rubric.component.html',
  styleUrls: ['./assignment-browser-rubric.component.css']
})
export class AssignmentBrowserRubricComponent implements OnInit {

assignmentSubscription : Subscription;

 activeAssignment: Assignment;

  helper : ByteGraderHelperService;

  private nav;

  constructor(private ngZone: NgZone, private router:Router, private activatedRoute:ActivatedRoute, private http : HttpService, private helpers: ByteGraderHelperService, private assignmentUpdater: AssignmentStoreService) {

    this.nav = this.router.getCurrentNavigation();

  }

  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
  }

  ngOnInit(): void {
    // this.activeAssignment = history.state;
    this.helper = this.helpers;

      //@ Watch for recipe changes
    this.assignmentSubscription = this.assignmentUpdater.assignmentUpdated.subscribe((assignments: Assignment[]) => {
      this.activeAssignment = assignments[0];
    });

    try {
      if(!this.nav.extras.state)
      {
        this.fetchAssignmentById(this.activatedRoute.snapshot.paramMap.get("id"))
       .then( assignmentdata =>{
          assignmentdata.routes = <Rule[]>assignmentdata.routes.map(rd=>{
            rd.rule_grading = this.helper.json(rd.rule_grading);
            // rd.rule_grading.path = this.helper.json(rd.rule_grading.path);
            // rd.rule_grading.mime_type = this.helper.json(rd.rule_grading.mime_type);
            // rd.rule_grading.status_code = this.helper.json(rd.rule_grading.status_code);
            // rd.rule_grading.verb = this.helper.json(rd.rule_grading.verb);
            return rd;
          });

          this.assignmentUpdater.addAssignment(assignmentdata);
          // this.activeAssignment = assignmentdata;
        })
        .catch(e=>{
          this.router.navigateByUrl(`/assignments/browse`)
        });
      }
      else //if(!nav.extras.state.assignment_id)
      {

        this.assignmentUpdater.addAssignment(<Assignment>(this.nav.extras.state));

        console.log(`... Fetching assignment rules for the assignment '${this.nav.extras.state.assignment_name}'`)


        //@ Fetch the relevant assignment route/rule data
        this.fetchAssignmentRoutes(this.nav.extras.state.assignment_id)
        .then( (routeAssignmentData: Rule[]) =>{

           let assignmentRoutes =  <Rule[]>routeAssignmentData.map(rd=>{
            rd.rule_grading = this.helpers.json(rd.rule_grading);
            return rd;
          });

          this.assignmentUpdater.registerRoutes(assignmentRoutes);

         })
         .catch(e=>{
           console.log(`\n\n@ Error at Fetch assignment routes`)
           console.dir(e);
           this.router.navigateByUrl(`/assignments/browse`)
         });

      }
      // else
      // {
      //   throw new Error();
      // }
    } catch (error) {
      console.dir(error)
      this.router.navigateByUrl(`/assignments/browse`);
    }

  }

  private async fetchAssignmentById( assignmentId ) : Promise<Assignment>
  {
    return new Promise((resolve,reject)=>
      this.http.getAssignments(assignmentId).subscribe((d: {response,data: {message,command}})=>{
        if(d.response != 200 || !d.data.message[0]) reject();
        resolve(d.data.message[0]);
      })
    );
  }

  private async fetchAssignmentRoutes( assignmentId ) : Promise<Rule[]>
  {
    return new Promise((resolve,reject)=>
      this.http.getRules(assignmentId,true).subscribe((d: {response,data: {message,command}})=>{
        if(d.response != 200) reject();
        resolve(d.data.message);
      })
    );
  }

  private browseAllAssignments(){
    this.navigate([`/assignments/browse`]);
  }

  ngOnDestroy(){
    this.assignmentSubscription.unsubscribe();
  }


}
