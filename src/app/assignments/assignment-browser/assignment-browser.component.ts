import { Assignment } from './../../models/Assignment.model';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-browser',
  templateUrl: './assignment-browser.component.html',
  styleUrls: ['./assignment-browser.component.css']
})
export class AssignmentBrowserComponent implements OnInit {

  constructor(private http: HttpService) { }

  public assignments:Assignment[];

  ngOnInit(): void {

    this.fetchAssignments();

  }

  fetchAssignments(){
    this.http.getAssignments().subscribe((d: {response,data: {message,command}})=> {
      if(d.response == 200){
        console.dir(d.data.message);
        this.assignments = d.data.message;

       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    });
  }

}
