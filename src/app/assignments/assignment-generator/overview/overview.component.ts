import { ByteGraderHelperService } from './../../../services/byte-grader-helper.service';
import { Rule } from './../../../models/Rule.model';
import { HttpService } from './../../../services/http.service';
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

  @ViewChild('ruleOverviewBrowser', {static: true}) table;
  constructor(private http: HttpService, private helpers: ByteGraderHelperService) { }

  public routes:Rule[];

  ngOnInit(): void {
    this.fetchRoutes();
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
                render:  (data, type, row) => this.helpers.stringify(data,this.helpers.colorize(data.toString()))
              },
              { title: "Path", data: 'rule_path' ,
                render:  (data, type, row) => this.helpers.stringify(data,'blue')
              },
              { title: "Name", data: 'rule_name' ,
                render:  (data, type, row) => this.helpers.stringify(data,undefined)
              },
              { title: "Description", data: 'rule_description' ,
                render:  (data, type, row) => this.helpers.stringify(data,undefined)
              },
              {
                title: "Assignment",
                data: 'rule_assignment' ,
                render : (data, type, row) => this.helpers.stringify(`${row.assignment_name} <sub>(${row.assignment_owner_name})</sub>`,'teal')
              },
              // { title: "HTP Verb", data: 'rule_http_verb' },
              {
                title: "Expected Status Code",
                data: 'rule_expected_status_code',
                render:  (data, type, row) => this.helpers.stringify(data,'blue')
              },
              {
                  title: "Expected Data Type",
                  data: 'rule_expected_data_type',
                  render:  (data, type, row) => this.helpers.stringify(data,'brown')
              },
              { title: "Expected Data", data: 'rule_expected_data' ,
                render:  (data, type, row) => this.helpers.jsonify(data)
              },
              { title: "Headers", data: 'rule_headers' ,
                render:  (data, type, row) => this.helpers.jsonify(data)
              },
              { title: "Body Parameters", data: 'rule_parameters',
                render:  (data, type, row) => this.helpers.jsonify(data)
              },
              { title: "Grading", data: 'rule_grading' ,
                render:  (data, type, row) => this.helpers.jsonify(data)
              },
              { title: "Created At", data: 'created_at',
                render:  (data, type, row) => this.helpers.dateify(data,'green')
              },
              { title: "Updated At", data: 'updated_at',
                render:  (data, type, row) => this.helpers.dateify(data,'orange')
              }
          ]
          ,responsive: true
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
