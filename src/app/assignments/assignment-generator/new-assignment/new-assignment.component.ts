import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubUser } from 'src/app/services/SubUser.interface';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {

  newAssignmentForm:FormGroup;

  users : SubUser[];

  constructor( private http: HttpService  ) { }

  ngOnInit(): void {

     this.http.getUsers().subscribe(d=>
      {
        this.users = d;
      });

    this.newAssignmentForm = new FormGroup({
      assignment_name  : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      assignmentowner  : new FormControl(null, Validators.required),
      assignment_summary : new FormControl(null),
      assignment_notes : new FormControl(null),
      assignment_due: new FormControl(null)
    });

  }

}
