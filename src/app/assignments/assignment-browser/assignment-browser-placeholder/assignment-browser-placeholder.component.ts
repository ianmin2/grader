import { Router } from '@angular/router';
import { ByteGraderHelperService } from './../../../services/byte-grader-helper.service';
import { Assignment } from './../../../models/Assignment.model';
import { HttpService } from './../../../services/http.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { ViewChild } from '@angular/core';

declare var $;
@Component({
  selector: 'app-assignment-browser-placeholder',
  templateUrl: './assignment-browser-placeholder.component.html',
  styleUrls: ['./assignment-browser-placeholder.component.css']
})
export class AssignmentBrowserPlaceholderComponent implements OnInit {


  dataTable: any;
  dtOptions: any;

  @ViewChild('assignmentBrowser', {static: true}) table;

  public assignments:Assignment[];

  constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router: Router, private ngZone : NgZone) { }

  public navigate(commands: any[], pars : any = {}): void {
    this.ngZone.run(() => this.router.navigate(commands,pars)).then();
  }


  ngOnInit(): void {

    this.fetchAssignments();

    $(document).on('click','.openAssignment', (d) =>
    {
      d.stopPropagation()

      let identifier = $(d.currentTarget).attr('id');
      let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
      this.navigate([`/assignments/browse/rubric/${identifier}`],{state: assignmentData})

      // this.router.navigateByUrl(`/assignments/browse/rubric/${identifier}`, { state: assignmentData });
      // /assignments/browse/rubric/${identifier}
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
            {title: 'Name', data: 'assignment_name', className: 'editable',
              render:  (data, type, row) => this.helpers.stringify(data,'teal')
            },
            {title: 'Summary', data: 'assignment_summary', className: 'editable',
              render:  (data, type, row) => this.helpers.stringify(data,undefined)
            },
            {title: 'Notes', data: 'assignment_notes', className: 'editable',
              render:  (data, type, row) => this.helpers.stringify(data,undefined)
            },
            {title: 'Owner', data: 'assignment_owner',
              render:  (data, type, row) => this.helpers.stringify(row.assignment_owner_name,'blue')
            },
            {
              title: 'buttons',
              data: 'assignment_id',
              render:  (data,type,row) => `<button class='btn btn-primary openAssignment' id="${data}" data="${this.helpers.str(row).replace(/'/ig,'&apos;').replace(/"/ig,"'")}"> Rules </btn>`
            },
            {
              title: 'Due',
              data: 'assignment_due', className: 'editable',
              render:  (data, type, row) => this.helpers.dateify(data,'crimson')
            },
            {
              title: 'Created', data: 'assignment_created',
              render:  (data, type, row) => this.helpers.dateify(data,'green')
            },
            {
              title: 'Last Modified',
              data: 'assignment_last_modified',
              render:  (data, type, row) => this.helpers.dateify(data,undefined)
            }
          ],
          responsive: true
        };
       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    }, err => {}, () => {
      // console.dir(this.table)
      this.dataTable = $(this.table.nativeElement);
      // console.dir(this.dataTable);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}
