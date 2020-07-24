import { Rule } from './Rule.model';

class RuleSubMatch
{
  public alternative : any;
  public match : number;
  public no_match : number;

  constructor( alternative:any, match:number, no_match:number ) {
   this.alternative = alternative;
   this.match = match;
   this.no_match = no_match;
  }

}

class RuleMatch
{

  public match : number;
  public no_match : number;
  public matches : RuleSubMatch[];

  constructor( match: number, no_match: number, matches: RuleSubMatch[])
  {
    this.match = match;
    this.no_match = no_match;
    this.matches = matches;
  }

}


export class Grading
{
  public verb : RuleMatch;
  public path : RuleMatch;
  public status_code : RuleMatch;
  public mime_type : RuleMatch;

  constructor(verb: RuleMatch, path: RuleMatch, status_code: RuleMatch, mime_type: RuleMatch)
  {
    this.verb = verb;
    this.path = path;
    this.status_code = status_code;
    this.mime_type = mime_type;
  }

}
