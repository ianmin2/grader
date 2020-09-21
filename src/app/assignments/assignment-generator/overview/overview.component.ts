import { Rule } from './../../../models/Rule.model';
import { HttpService } from './../../../services/http.service';
import {DatePipe} from '@angular/common'
import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  dataTable: any;
  dtOptions: any;
  pipe = new DatePipe('en-GB');
  @ViewChild('ruleOverviewBrowser', {static: true}) table;
  constructor(private http: HttpService) { }

  public routes:Rule[];

  ngOnInit(): void {

    this.fetchRoutes();


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


  fetchRoutes(){
    this.http.getRules().subscribe((d: {response,data: {message,command}})=> {
      if(d.response == 200){
        // console.dir(d.data.message);
        this.routes = d.data.message;

        this.dtOptions = {
          data: this.routes,
          columns: [

              { title: "Id", data: 'rule_id'  },
              { title: "Method", data: 'rule_method',
                render: (data,type,row) =>
                {
                  return `<pre style="color:${this.colorize(data.toString())};">${data}</pre>`
                }
              },
              { title: "Path", data: 'rule_path' ,
                  render:  (data, type, row) => {
                    //@ Format the tags to labels
                    return `<pre style="color:blue;">${data}</pre>`
                  }
              },
              { title: "Name", data: 'rule_name' ,
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
                }
              },
              { title: "Description", data: 'rule_description' ,
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
                }
              },
              { title: "Assignment", data: 'rule_assignment' },
              // { title: "HTP Verb", data: 'rule_http_verb' },
              { title: "Expected Status Code", data: 'rule_expected_status_code' },
              { title: "Expected Data Type", data: 'rule_expected_data_type' },
              { title: "Expected Data", data: 'rule_expected_data' ,
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
                }
              },
              { title: "Headers", data: 'rule_headers' ,
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
                }
              },
              { title: "Body Parameters", data: 'rule_parameters',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
                }
              },
              { title: "Grading", data: 'rule_grading' ,
              render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre>${data}</pre>`
                }
              },
              { title: "Created At", data: 'created_at',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre style="color:green;">${this.pipe.transform(data, 'medium')}</pre>`;
                }
              },
              { title: "Updated At", data: 'updated_at',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return `<pre style="color:orange;">${this.pipe.transform(data, 'medium')}</pre>`;
                }
             }
          ]
          // ,responsive: {
          //   details: {
          //       display: $.fn.dataTable.Responsive.display.modal({
          //           header: function (row) {
          //               var data = row.data();
          //               return 'Participant Details';
          //           }
          //       }),
          //       renderer: $.fn.dataTable.Responsive.renderer.tableAll({
          //           tableClass: 'table'
          //       })
          //   }
          // }
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
