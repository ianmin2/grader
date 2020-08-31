export class SubUser {
  id: Number;
  name: String;
  email? : String;
  user_active: Boolean;
  user_last_seen? : Date|String;
  created_at? : Date|String;

  constructor( id: Number, name: String, user_active: Boolean, created_at? : Date|String, email? : String, user_last_seen? :  Date|String)
  {
    this.id = id;
    this.name = name;
    this.email = email;
    this.user_active = user_active;
    this.user_last_seen = user_last_seen;
    this.created_at = created_at;

  }

}
