export class User {

  public user_id : number;
  public username : string;
  public user_first_name : string;
  public user_last_name : string;
  public user_phone : string;
  public user_email : string;
  public user_password : string;
  public user_salt : string;
  public user_active : boolean;
  public user_last_seen : string;


  constructor(  user_id : number, username : string, user_first_name : string, user_last_name : string, user_phone : string, user_email : string, user_password : string, user_salt : string, user_active : boolean, user_last_seen : string )
  {
    this.user_id =  user_id;
    this.username =  username;
    this.user_first_name = user_first_name;
    this.user_last_name = user_last_name;
    this.user_phone = user_phone;
    this.user_email = user_email;
    this.user_password = user_password;
    this.user_salt = user_salt;
    this.user_active = user_active ;
    this.user_last_seen = user_last_seen;

  }


}
