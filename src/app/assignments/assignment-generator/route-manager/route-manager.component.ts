import { Assignment } from './../../../models/Assignment.model';
import { HttpService } from './../../../services/http.service';
import { MimeType } from './../../../models/MimeType.model';
import { StaticDataService } from './../../../services/static-data.service';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-manager',
  templateUrl: './route-manager.component.html',
  styleUrls: ['./route-manager.component.css']
})



export class RouteManagerComponent implements OnInit {


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

private available_positions = ["headers","parameters"]

  newRouteForm:FormGroup;

  mimeTypes: MimeType[];

  headers : string[];

  assignments: Assignment[];

  constructor(private staticData: StaticDataService, private http: HttpService ) { }

  ngOnInit(): void {

    //@ Load the list of available mime types
    this.mimeTypes =  this.staticData.MimeTypes();

    this.headers = this.staticData.Headers();

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
      rule_http_verb : new FormControl(null, Validators.required),
      rule_expected_status_code : new FormControl('200',Validators.required),
      rule_expected_data_type : new FormControl('text/html', Validators.required),
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
    })
  }


  //@ The form submission handler
  saveRoute()
  {
    console.dir(this.newRouteForm);
  }

  newGradingPair()
  {

  }

  newValuePair( formDesignation: string){

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
    const available_positions = {
      "verb": 'rule_grading.verb.matches',
      "path" : 'rule_grading.path.matches',
      "status_code" :'rule_grading.status_code.matches',
      "mime_type": 'rule_grading.mime_type.matches'
    };

    if( available_positions[gradingPosition.toLowerCase()]){
      (<FormArray>this.newRouteForm.get(available_positions[gradingPosition.toLowerCase()]))['controls'].push(this.gradingSubFormGroup());
    }
    else
    {
      console.log(`\n_____________________\nINVALID GRADING POSITION\n_____________________\nTry ${Object.keys(available_positions).join('\n')}\n_____________________\n`);
    }
  }

  removeGradingCriteria( gradingPosition : string, idx:number )
  {
    const available_positions = ["verb","path","status_code","mime_type"];

    if( available_positions.indexOf(gradingPosition.toLowerCase()) != -1){
      this.newRouteForm.get(`rule_grading`)['controls'][gradingPosition.toLowerCase()]['controls'].matches['controls'].slice(idx,1);
    }
    else
    {
      console.log(`\n_____________________\nINVALID GRADING POSITION\n_____________________\nTry ${available_positions.join('\n')}\n_____________________\n`);
    }
  }

}
