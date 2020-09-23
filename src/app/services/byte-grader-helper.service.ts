import { Injectable } from '@angular/core';
import {DatePipe, JsonPipe} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class ByteGraderHelperService {

  jsonPipe = new JsonPipe();
  pipe = new DatePipe('en-GB');
  constructor() { }

  colorize( method: string ) : string
  {
    switch (method.toLowerCase().replace(/\s/ig,'')) {
      case 'get':
        return 'green';
        break;

      case 'post':
        return 'brown';
      break;

      case 'put':
        return 'orange';
        break;

      case 'delete':
        return 'crimson'
      break;

      default:
        return 'yellow';
        break;
    }
  }

  jsonify (data)
  {
    //@ Format the data to prettified JSON
    return `<pre>${this.jsonPipe.transform(this.json(data))}</pre>`;
  }

  dateify (data, color)
  {
    //@ Format the data into a date
    color= color ? `style='color:${color}'` : '';
    return `<pre ${color}>${this.pipe.transform(data, 'medium')}</pre>`;
  }

  stringify(data, color)
  {
    color= color ? `style='color:${color}'` : '';
    return `<pre ${color}>${data}</pre>`;
  }

  json  ( obj )
  {
    try {
            return ( typeof(obj) === 'object' ) ? obj : JSON.parse( obj )
    }
    catch(e)
    {
        return obj;
    }
  }


  str ( obj )
  {
    try {
        return ( typeof(obj) === "object" ) ? JSON.stringify(obj) : obj ;
    } catch (error) {
        return obj;
    }
  }


}
