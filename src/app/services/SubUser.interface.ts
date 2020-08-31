export interface SubUser {
  id: number;
  user_name: string;
  email? : string;
  user_active: Boolean;
  user_last_seen? : string;
  created_at? : Date;

  // constructor( id: number, user_name: String, user_active: Boolean, created_at? : Date, email? : String, user_last_seen? :  Date): any
  // {
  //   this.id = id;
  //   this.name = name;
  //   this.email = email;
  //   this.user_active = user_active;
  //   this.user_last_seen = user_last_seen;
  //   this.created_at = created_at;

  // }

}
