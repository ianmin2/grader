import { Rule } from './Rule.model';
export class Assignment
{

  public assignment_id : number;
  public assignment_name : string;
  public assignment_owner: number;
  public assignment_created : string;
  public assignment_due : string;
  public assignment_last_modified : string;
  public assignment_summary : string;
  public assignment_notes : string;
  public routes? : Rule[]

  constructor(assignment_id:number, assignment_name:string, assignment_owner:number, assignment_created:string, assignment_due:string, assignment_last_modified:string, assignment_summary:string, assignment_notes:string, routes? : Rule[] ) {
    this.assignment_id = assignment_id,
    this.assignment_name = assignment_name;
    this.assignment_owner = assignment_owner;
    this.assignment_created = assignment_created;
    this.assignment_due = assignment_due;
    this.assignment_last_modified = assignment_last_modified;
    this.assignment_summary = assignment_summary;
    this.assignment_notes = assignment_notes;
    this.routes = routes;
  }



}
