import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubUser } from 'src/app/models/SubUser.model';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {


  model: NgbDateStruct;

  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;


  newAssignmentForm:FormGroup;

  users : SubUser[];

  constructor( private http: HttpService, private calendar: NgbCalendar   ) { }

  ngOnInit(): void {

    this.http.getUsers().subscribe(d=>
    {
      this.users = d;
    });

    this.newAssignmentForm = new FormGroup({
      assignment_name  : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      assignment_owner  : new FormControl(null, Validators.required),
      assignment_summary : new FormControl(null),
      assignment_notes : new FormControl(null),
      assignment_due: new FormControl(null)
    });

  }

  saveAssignment()
  {
    // console.dir(this.newAssignmentForm)
    this.http.addAssignment(this.newAssignmentForm.value).subscribe((d:{response,data:{message,command}})=>{
      if(d.response != 200)
      {
        alert(d.data.message);
      }
      else
      {
        alert("Assignment Saved!");
      }
    })
  }

}
