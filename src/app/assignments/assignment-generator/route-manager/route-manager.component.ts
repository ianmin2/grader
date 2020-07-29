import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-manager',
  templateUrl: './route-manager.component.html',
  styleUrls: ['./route-manager.component.css']
})



export class RouteManagerComponent implements OnInit {

  private gradingSubFormGroup(){
    return new FormGroup({
      alternative: new FormControl(null, [Validators.required]),
      match: new FormControl(100),
      no_match: new FormControl(0)
    })
  }

  private gradingSubFormArray()
  {
    return new FormArray([
      // this.gradingSubFormGroup()
    ]);
  }

  private gradingForm()
  {
    return new FormGroup({
      weight : new FormControl(100,[Validators.required]),
      match : new FormControl(100,[Validators.required]),
      no_match : new FormControl(0),
      matches : this.gradingSubFormArray(),
    })

  }

  newRouteForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.newRouteForm = new FormGroup({
      rule_method : new FormControl(null, Validators.required),
      rule_path : new FormControl(null, Validators.required),
      rule_name : new FormControl(null, Validators.required),
      rule_description : new FormControl(null, Validators.required),
      rule_assignment : new FormControl(null,Validators.required),
      rule_http_verb : new FormControl(null, Validators.required),
      rule_expected_status_code : new FormControl(null,Validators.required),
      rule_expected_data_type : new FormControl(null, Validators.required),
      rule_grading: new FormGroup({
      verb : this.gradingForm(),
      path : this.gradingForm(),
      status_code : this.gradingForm(),
      mime_type : this.gradingForm()
     }),
    })
  }

}
