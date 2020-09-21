import { Assignment } from './../../models/Assignment.model';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common'
import { ViewChild } from '@angular/core';

declare var $;
@Component({
  selector: 'app-assignment-browser',
  templateUrl: './assignment-browser.component.html',
  styleUrls: ['./assignment-browser.component.css']
})
export class AssignmentBrowserComponent implements OnInit {


  dataTable: any;
  dtOptions: any;
  pipe = new DatePipe('en-GB');
  @ViewChild('assignmentBrowser', {static: true}) table;

  public assignments:Assignment[];

  constructor(private http: HttpService) { }


  ngOnInit(): void {

    this.fetchAssignments();

  }

  fetchAssignments(){
    this.http.getAssignments().subscribe((d: {response,data: {message,command}})=> {
      if(d.response == 200){
        // console.dir(d.data.message);
        this.assignments = d.data.message;
        this.dtOptions = {
          data: this.assignments,
          columns: [

            {title: 'ID', data: 'assignment_id'},
            {title: 'Name', data: 'assignment_name',
              render:  (data, type, row) => {
                //@ Format the tags to labels
                return `<pre style="color:teal;">${data}</pre>`
              }
            },
            {title: 'Summary', data: 'assignment_summary',
              render:  (data, type, row) => {
                //@ Format the tags to labels
                return `<pre>${data}</pre>`
              }
            },
            {title: 'Notes', data: 'assignment_notes',
              render:  (data, type, row) => {
                //@ Format the tags to labels
                return `<pre>${data}</pre>`
              }
            },
            {title: 'Owner', data: 'assignment_owner',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
              }
            },
            {
              title: 'Created', data: 'assignment_created',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre style="color:green;">${this.pipe.transform(data, 'medium')}</pre>`;
              }
            },
            {
              title: 'Due',
              data: 'assignment_due',
              render:  (data, type, row) => {
                //@ Format the tags to labels
                return `<pre style="color:crimson;">${this.pipe.transform(data, 'medium')}</pre>`;
              }
            },
            {
              title: 'Last Modified',
              data: 'assignment_last_modified',
              render:  (data, type, row) => {
                //@ Format the tags to labels
                return `<pre>${this.pipe.transform(data, 'medium')}</pre>`;
              }
            }
          ]
        };
       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    }, err => {}, () => {
      console.dir(this.table)
      this.dataTable = $(this.table.nativeElement);
      // console.dir(this.dataTable);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}
