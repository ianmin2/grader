import { Injectable } from '@angular/core';
import {DatePipe, JsonPipe} from '@angular/common'
import html2canvas from 'html2canvas'
import  jspdf from 'jspdf'
import { LocalStorageService } from 'angular-2-local-storage';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ByteGraderHelperService {

  constructor(private _localStorage: LocalStorageService)
  {

  }

  jsonPipe = new JsonPipe();
  pipe = new DatePipe('en-GB');

  printPDF (elementID,target) {


    const domElement = document.getElementById(elementID);

    const ideal_height = 2040;

    alert(domElement.clientHeight);




    html2canvas(domElement, { onclone: (document) => {
        document.getElementById('unprintable').style.visibility = 'hidden'
      }}).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'letter');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save(`${target}.pdf`);
      });


  }

  clone( data: any )
  {
    try {
      return this.json(this.str(data));
    } catch (error) {
      return data;
    }
  }


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

  plainJsonify(data)
  {
    return this.jsonPipe.transform(this.json(data));
  }

  dateify (data, color)
  {
    //@ Format the data into a date
    color= color ? `style='color:${color}'` : '';

    return `<pre ${color}>${data ? this.pipe.transform(data.replace(/\s\+/ig,'+'), 'medium') : 'not specified'}</pre>`;
  }

  plainDateify(data)
  {
    return data ? this.pipe.transform(data.replace(/\s\+/ig,'+'), 'medium') : 'not specified';
  }

  stringify(data, color)
  {
    color= color ? `style='color:${color}'` : '';
    return `<pre ${color}>${data}</pre>`;
  }

  plainStringify(data)
  {
    return this.str(data);
  }

  json  ( obj )
  {
    try {
            return ( typeof(obj) === 'object' ) ? obj : JSON.parse( obj.replace(/&quot;/ig,'"') )
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

  getPageHeight()
  {

    const body = document.body,
    html = document.documentElement;

    return Math.min( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight ) - 500;

  }

  getUserInfo()
  {

    const userToken: string = this._localStorage.get('auth');
    if(!userToken) return <User>{};
    return <User>this.json(atob(userToken.split('.')[1]));

  }


}
