import { Assignment } from './Assignment.model';
export class Attempts
{
  attempt_id : Number;
	attempt_name : string;
	attempt_student_identifier : string;
	attempt_main_path : string;
	attempt_submission_time : Date;
	attempt_grading_time : Date;
	attempt_grade_breakdown :any;
	attempt_grade_complete : boolean;
  attempt_assignment : Number;
  attempt_assignment_data? : Assignment;
	created_at?  : Date;
  updated_at? : Date;

  constructor(
{ attempt_id, attempt_name, attempt_student_identifier, attempt_main_path, attempt_submission_time, attempt_grading_time, attempt_grade_breakdown, attempt_grade_complete, attempt_assignment, attempt_assignment_data, created_at, updated_at }: { attempt_id: Number; attempt_name: string; attempt_student_identifier: string; attempt_main_path: string; attempt_submission_time: Date; attempt_grading_time: Date; attempt_grade_breakdown: any; attempt_grade_complete: boolean; attempt_assignment: Number; attempt_assignment_data?: Assignment; created_at?: Date; updated_at?: Date; })
    {
      this.attempt_id = attempt_id;
      this.attempt_name = attempt_name;
      this.attempt_student_identifier = attempt_student_identifier;
      this.attempt_main_path = attempt_main_path;
      this.attempt_submission_time = attempt_submission_time;
      this.attempt_grading_time = attempt_grading_time;
      this.attempt_grade_breakdown = attempt_grade_breakdown;
      this.attempt_grade_complete = attempt_grade_complete;
      this.attempt_assignment = attempt_assignment;
      this.attempt_assignment_data = attempt_assignment_data;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }

}
