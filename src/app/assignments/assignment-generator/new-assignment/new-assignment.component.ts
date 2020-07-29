import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {

  newAssignmentForm:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.newAssignmentForm = new FormGroup({
      assignment_name  : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      assignmentowner  : new FormControl(null, Validators.required),
      assignment_summary : new FormControl(null),
      assignment_notes : new FormControl(null),
      assignment_due: new FormControl(null)
    });

  }

}
