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

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    try {

    if(!this.router.getCurrentNavigation().extras.state.assignment_id) this.router.navigateByUrl(`/assignments/browse`);
    } catch (error) {
      this.router.navigateByUrl(`/assignments/browse`);
    }
  }

  ngOnInit(): void {
    this.activeAssignment = history.state;
  }

}
