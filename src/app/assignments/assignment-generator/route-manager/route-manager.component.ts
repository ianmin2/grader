import { StatusCode } from './../../../models/StatusCode.model';
import { Assignment } from './../../../models/Assignment.model';
import { HttpService } from './../../../services/http.service';
import { MimeType } from './../../../models/MimeType.model';
import { StaticDataService } from './../../../services/static-data.service';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-route-manager',
  templateUrl: './route-manager.component.html',
  styleUrls: ['./route-manager.component.css']
})

export class RouteManagerComponent implements OnInit {

  model: NgbDateStruct;

  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;


  private keyValueFormGroup(){
    return new FormGroup({
      key : new FormControl(),
      value : new FormControl(),
    });
  }
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

private available_positions = ["headers","parameters"];

private available_match_positions = {
  "verb": 'rule_grading.verb.matches',
  "path" : 'rule_grading.path.matches',
  "status_code" :'rule_grading.status_code.matches',
  "mime_type": 'rule_grading.mime_type.matches'
};

  newRouteForm:FormGroup;

  mimeTypes: MimeType[];

  statusCodes: StatusCode[];

  headers : string[];

  assignments: Assignment[];

  constructor(private staticData: StaticDataService, private http: HttpService, private calendar: NgbCalendar ) { }

  ngOnInit(): void {

    //@ Load the list of available mime types
    this.mimeTypes =  this.staticData.MimeTypes();

    this.headers = this.staticData.Headers();

    this.statusCodes = this.staticData.StatusCodes();

    //@ Fetch and load a list of assignments
    this.http.getAssignments().subscribe(d=>{
      this.assignments = d;
    })

    //@ Define the reactive form structure
    this.newRouteForm = new FormGroup({
      rule_method : new FormControl(null, Validators.required),
      rule_path : new FormControl(null, Validators.required),
      rule_name : new FormControl(null, Validators.required),
      rule_description : new FormControl(null, Validators.required),
      rule_assignment : new FormControl(null,Validators.required),
      rule_expected_status_code : new FormControl('200',Validators.required),
      rule_expected_data_type : new FormControl('text/html', Validators.required),
      rule_expected_data : new FormControl(null),
      rule_headers : new FormArray([]),
      rule_parameters : new FormArray([
        // this.keyValueFormGroup()
      ]),
      rule_grading: new FormGroup({
        verb : this.gradingForm(),
        path : this.gradingForm(),
        status_code : this.gradingForm(),
        mime_type : this.gradingForm()
      }),
    });

  }


  //@ The form submission handler
  saveRoute()
  {

    // console.dir(this.newRouteForm);

    /**
     * @ Format the data into the proper format
     *
     * rule_grading {verb,path,status_ced,mime_type}
     *
     */

    //@ Match & assign grading related parameters

    let gradingControls = this.newRouteForm.controls['rule_grading']['controls'];

    let grading_keys = Object.keys(this.newRouteForm.controls['rule_grading']['controls']);

    grading_keys.forEach(gradingKey=>{
      // console.log(`\n${gradingKey}`);
      // console.dir(gradingControls[gradingKey]);

      let gradingSubMatchControls = gradingControls[gradingKey]['controls']['matches'];
      let gradingSubMatchControlValues = gradingSubMatchControls['controls'].map(a=>a.value);
       //@ Add 'value' to the 'value.matches' Array field
      this.newRouteForm.controls['rule_grading']['value'][gradingKey]['matches'].push(...gradingSubMatchControlValues);
       // gradingControls['value']['matches']
    });


    //@ Match & Assign 'rule_header' related parameters
    let ruleHeaderValues = this.newRouteForm.controls['rule_headers']['controls'].map(a=>a.value);
    this.newRouteForm.controls['rule_headers']['value'].push(...ruleHeaderValues);

    //@ Match & Assign 'rule_parameters' related parameters
    let ruleParameterValues = this.newRouteForm.controls['rule_parameters']['controls'].map(a=>a.value);
    this.newRouteForm.controls['rule_parameters']['value'].push(...ruleParameterValues);


     console.dir(this.newRouteForm);

    //  this.newRouteForm.controls['rule_grading']['value'][gradingKey]['matches']

  }

  newGradingPair()
  {

  }

  newValuePair( formDesignation: string)
  {
    if( this.available_positions.indexOf(formDesignation.toLowerCase()) != -1)
    {
      (<FormArray>this.newRouteForm.get(`rule_${formDesignation.toLowerCase()}`))['controls'].push(this.keyValueFormGroup());
    }
    else
    {
      console.log(`\n_____________________\nINVALID VALUE PAIR POSITION\n_____________________\nTry ${this.available_positions.join('\n')}\n_____________________\n`);
    }
  }

  removeValuePair(formDesignation: string, idx : number)
  {
    if( this.available_positions.indexOf(formDesignation.toLowerCase()) != -1)
    {
      (<FormArray>this.newRouteForm.get(`rule_${formDesignation.toLowerCase()}`))['controls'].splice(idx,1);
    }
    else
    {
      console.log(`\n_____________________\nINVALID VALUE PAIR POSITION\n_____________________\nTry ${this.available_positions.join('\n')}\n_____________________\n`);
    }
  }

  newGradingCriteria( gradingPosition : string )
  {
    if( this.available_match_positions[gradingPosition.toLowerCase()]){
      (<FormArray>this.newRouteForm.get(this.available_match_positions[gradingPosition.toLowerCase()]))['controls'].push(this.gradingSubFormGroup());
    }
    else
    {
      console.log(`\n_____________________\nINVALID GRADING POSITION\n_____________________\nTry ${Object.keys(this.available_match_positions).join('\n')}\n_____________________\n`);
    }
  }

  removeGradingCriteria( gradingPosition : string, idx:number )
  {
    if( this.available_match_positions[gradingPosition.toLowerCase()]){
      (<FormArray>this.newRouteForm.get(this.available_match_positions[gradingPosition.toLowerCase()]))['controls'].splice(idx,1);
    }
    else
    {
      console.log(`\n_____________________\nINVALID GRADING POSITION\n_____________________\nTry ${this.available_positions.join('\n')}\n_____________________\n`);
    }
  }

}
