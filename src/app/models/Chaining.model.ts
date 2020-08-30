import { Rule } from './Rule.model';

export class Chaining
{

	id : Number;
	chaining_assignment : Number;
  chaining_depends_on: Number;
  chaining_depends_on_data? :Rule[];
	chaining_type : string;
	chaining_rules? : Rule[];
	created_at? : Date;
  updated_at? : Date;

  constructor(
{ id, chaining_assignment, chaining_depends_on, chaining_depends_on_data, chaining_type, chaining_rules, created_at, updated_at }: { id: Number; chaining_assignment: Number; chaining_depends_on: Number; chaining_depends_on_data?: Rule[]; chaining_type: string; chaining_rules?: Rule[]; created_at?: Date; updated_at?: Date; }  )
  {

    this.id = id;
    this.chaining_assignment = chaining_assignment;
    this.chaining_depends_on = chaining_depends_on;
    this.chaining_depends_on_data = chaining_depends_on_data;
    this.chaining_type = chaining_type;
    this.chaining_rules = chaining_rules;
    this.created_at = created_at;
    updated_at = updated_at;

  }

}
