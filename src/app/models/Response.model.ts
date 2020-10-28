class ResponseObject {

  public message : any;
  public command : any;

  constructor(message: any, command:any)
  {
    this.message = message;
    this.command = command;
  }

}

export class GraderResponse {

  public response: Number;
  public data : ResponseObject;

  constructor(response: Number, data: ResponseObject)
  {
    this.response = response;
    this.data = data;
  }

}
