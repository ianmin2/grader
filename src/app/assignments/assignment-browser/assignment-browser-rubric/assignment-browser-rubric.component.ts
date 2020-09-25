import { HttpService } from './../../../services/http.service';
import { Assignment } from './../../../models/Assignment.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-browser-rubric',
  templateUrl: './assignment-browser-rubric.component.html',
  styleUrls: ['./assignment-browser-rubric.component.css']
})
export class AssignmentBrowserRubricComponent implements OnInit {

  activeAssignment: Assignment;


  constructor(private router:Router, private activatedRoute:ActivatedRoute, private http : HttpService) {
    try {
      if(!this.router.getCurrentNavigation().extras.state)
      {
        this.fetchAssignmentById(this.activatedRoute.snapshot.paramMap.get("id"))
       .then( assignmentdata =>{
          this.activeAssignment = assignmentdata;
        })
        .catch(e=>this.router.navigateByUrl(`/assignments/browse`));
      }
      else //if(!this.router.getCurrentNavigation().extras.state.assignment_id)
      {
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
  }

  private async fetchAssignmentById( assignmentId ) : Promise<Assignment>
  {
    return new Promise((resolve,reject)=>
      this.http.getAssignments(assignmentId).subscribe((d: {response,data: {message,command}})=>{
        if(d.response != 200 || ! d.data.message[0]) reject();
        resolve(d.data.message[0]);
      })
    );
  }

  private browseAllAssignments(){
    this.router.navigateByUrl(`/assignments/browse`);
  }

}
