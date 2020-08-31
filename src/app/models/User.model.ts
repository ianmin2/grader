export class User {

  public id : number;
  public username : string;
  public name : string;
  public email : string;
  public password : string;
  public user_active : boolean;
  public user_last_seen : string;


  constructor(  id : number, username : string, name : string, user_phone : string, email : string, password : string, user_active : boolean, user_last_seen : string )
  {
    this.id =  id;
    this.username =  username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.user_active = user_active ;
    this.user_last_seen = user_last_seen;
  }


}
