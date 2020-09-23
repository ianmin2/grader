import { Router } from '@angular/router';
import { ByteGraderHelperService } from './../../services/byte-grader-helper.service';
import { Assignment } from './../../models/Assignment.model';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
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

  @ViewChild('assignmentBrowser', {static: true}) table;

  public assignments:Assignment[];

  constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router: Router) { }


  ngOnInit(): void {

    this.fetchAssignments();

    $(document).on('click','.openAssignment', (d) =>
    {
      let identifier = $(d.currentTarget).attr('id');
      let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
      this.router.navigateByUrl(`/assignments/browse/${identifier}`, { state: assignmentData });

    })

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
              render:  (data, type, row) => this.helpers.stringify(data,'teal')
            },
            {title: 'Summary', data: 'assignment_summary',
              render:  (data, type, row) => this.helpers.stringify(data,undefined)
            },
            {title: 'Notes', data: 'assignment_notes',
              render:  (data, type, row) => this.helpers.stringify(data,undefined)
            },
            {title: 'Owner', data: 'assignment_owner',
              render:  (data, type, row) => this.helpers.stringify(row.assignment_owner_name,'blue')
            },
            {
              title : 'Extras',
              data : 'assignment_id',
              render:  (data,type,row) => `<button class='btn btn-primary openAssignment' id="${data}" data="${this.helpers.str(row).replace(/'/ig,'&apos;').replace(/"/ig,"'")}"> View Rules </btn>`
            },
            {
              title: 'Created', data: 'assignment_created',
              render:  (data, type, row) => this.helpers.dateify(data,'green')
            },
            {
              title: 'Due',
              data: 'assignment_due',
              render:  (data, type, row) => this.helpers.dateify(data,'crimson')
            },
            {
              title: 'Last Modified',
              data: 'assignment_last_modified',
              render:  (data, type, row) => this.helpers.dateify(data,undefined)
            }
          ]
          ,responsive: true
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
