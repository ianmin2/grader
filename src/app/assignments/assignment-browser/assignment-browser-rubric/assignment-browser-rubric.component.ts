import { Rule } from './../../../models/Rule.model';
import { HttpService } from './../../../services/http.service';
import { Assignment } from './../../../models/Assignment.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { By } from '@angular/platform-browser';


@Component({
  selector: 'app-assignment-browser-rubric',
  templateUrl: './assignment-browser-rubric.component.html',
  styleUrls: ['./assignment-browser-rubric.component.css']
})
export class AssignmentBrowserRubricComponent implements OnInit {

  activeAssignment: Assignment;

  helper : ByteGraderHelperService;


  constructor(private router:Router, private activatedRoute:ActivatedRoute, private http : HttpService, private helpers: ByteGraderHelperService) {

    const nav = this.router.getCurrentNavigation();
    try {
      if(!nav.extras.state)
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


          this.activeAssignment = assignmentdata;
        })
        .catch(e=>{
          this.router.navigateByUrl(`/assignments/browse`)
        });
      }
      else //if(!nav.extras.state.assignment_id)
      {
        //@ Fetch the relevant assignment route/rule data
        this.fetchAssignmentRoutes(nav.extras.state.assignment_id)
        .then( (routeAssignmentData: Rule[]) =>{



           this.activeAssignment = <Assignment>(nav.extras.state);
           this.activeAssignment.routes =  <Rule[]>routeAssignmentData.map(rd=>{
            rd.rule_grading = this.helper.json(rd.rule_grading);
            // rd.rule_grading.path = this.helper.json(rd.rule_grading.path);
            // rd.rule_grading.mime_type = this.helper.json(rd.rule_grading.mime_type);
            // rd.rule_grading.status_code = this.helper.json(rd.rule_grading.status_code);
            // rd.rule_grading.verb = this.helper.json(rd.rule_grading.verb);
            return rd;
          });

         })
         .catch(e=>{
           this.router.navigateByUrl(`/assignments/browse`)
         });

        //@ Set the data to the passed assignment data
        this.activeAssignment = history.state;
      }
      // else
      // {
      //   throw new Error();
      // }
    } catch (error) {
      this.router.navigateByUrl(`/assignments/browse`);
    }
  }

  ngOnInit(): void {
    // this.activeAssignment = history.state;
    this.helper = this.helpers;
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
    this.router.navigateByUrl(`/assignments/browse`);
  }

}
