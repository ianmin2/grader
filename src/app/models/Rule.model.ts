import { Grading } from './Grading.model';

export class Rule
{
  public rule_id : number;
  public rule_method : string;
  public rule_path : string;
  public rule_name : string;
  public rule_description : string;
  public rule_assignment : number;
  public rule_http_verb : string;
  public rule_expected_status_code : number;
  public rule_expected_data_type : string;
  public rule_grading: Grading;
  public created_at : string;
  public updated_at : string;

  constructor(rule_id : number,  rule_method : string,  rule_path : string,  rule_name : string,  rule_description : string,  rule_assignment : number,  rule_http_verb : string,  rule_expected_status_code : number,  rule_expected_data_type : string,  rule_grading: Grading)
  {
    this.rule_id = rule_id;
    this.rule_method = rule_method;
    this.rule_path = rule_path;
    this.rule_name = rule_name;
    this.rule_description = rule_description;
    this.rule_assignment = rule_assignment;
    this.rule_http_verb = rule_http_verb;
    this.rule_expected_status_code = rule_expected_status_code;
    this.rule_expected_data_type = rule_expected_data_type;
    this.rule_grading = rule_grading;
  }

}
