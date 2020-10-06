import { Assignment } from './../../models/Assignment.model';
import { Attempts } from './../../models/Attempts.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssignmentsStoreService } from 'src/app/services/stor/assignments.stor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assignment-submission',
  templateUrl: './assignment-submission.component.html',
  styleUrls: ['./assignment-submission.component.css']
})
export class AssignmentSubmissionComponent implements OnInit {

  assignmentsSubscription : Subscription;
  newAttemptForm:FormGroup;

  attempts : Attempts[];

  assignments : Assignment[];

  constructor( private http: HttpService,  private assignmentsUpdater: AssignmentsStoreService ) { }

  ngOnInit(): void {

    this.assignmentsSubscription = this.assignmentsUpdater.assignmentsUpdated.subscribe((assignments: Assignment[]) => {
      console.log(`\n\nReceived new data .... redrawing table!`)
      this.assignments = assignments;
    });

    this.newAttemptForm = new FormGroup({
      attempt_name  : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      attempt_student_identifier  : new FormControl(null, Validators.required),
      attempt_assignment : new FormControl(null, Validators.required),
      attempt_main_path : new FormControl(null,[Validators.required, Validators.minLength(14)]),
    });

    this.fetchAssignments();

  }

  fetchAssignments(){
    this.http.getAssignments().subscribe((d: {response,data: {message,command}})=> {
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

  saveAttempt()
  {
    // console.dir(this.newAttemptForm)
    this.http.addAttempt(this.newAttemptForm.value).subscribe((d:{response,data:{message,command}})=>{
      if(d.response != 200)
      {
        alert(d.data.message);
      }
      else
      {
        this.newAttemptForm.reset();
        alert("Assignment Attempt Submitted!");
      }
    })
  }

  ngOnDestroy(){
    this.assignmentsSubscription.unsubscribe();
  }


}
