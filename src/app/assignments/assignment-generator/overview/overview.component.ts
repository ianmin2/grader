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





  fetchRoutes(){
    this.http.getRules().subscribe((d: {response,data: {message,command}})=> {
      if(d.response == 200){
        // console.dir(d.data.message);
        this.routes = d.data.message;

        this.dtOptions = {
          data: this.routes,
          columns: [

              { title: "Id", data: 'rule_id'  },
              { title: "Method", data: 'rule_method' },
              { title: "Path", data: 'rule_path' },
              { title: "Name", data: 'rule_name' },
              { title: "Description", data: 'rule_description' },
              { title: "Assignment", data: 'rule_assignment' },
              // { title: "HTP Verb", data: 'rule_http_verb' },
              { title: "Expected Status Code", data: 'rule_expected_status_code' },
              { title: "Expected Data Type", data: 'rule_expected_data_type' },
              { title: "Expected Data", data: 'rule_expected_data' },
              { title: "Headers", data: 'rule_headers' },
              { title: "Body Parameters", data: 'rule_parameters' },
              { title: "Grading", data: 'rule_grading' },
              { title: "Created At", data: 'created_at',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return this.pipe.transform(data, 'medium');
                }
              },
              { title: "Updated At", data: 'updated_at',
                render:  (data, type, row) => {
                  //@ Format the tags to labels
                  return this.pipe.transform(data, 'medium');
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
