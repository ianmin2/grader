import { ByteGraderHelperService } from './../../../services/byte-grader-helper.service';
import { Rule } from './../../../models/Rule.model';
import { HttpService } from './../../../services/http.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RulesStoreService } from 'src/app/services/stor/rules.store.service';
import { Subscription } from 'rxjs';
import { GraderResponse } from 'src/app/models/Response.model';

declare var $;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  dataTable: any;
  rulesSubscription : Subscription;

  @ViewChild('ruleOverviewBrowser', {static: true}) table;
  constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router:Router, private ngZone: NgZone,  private rulesUpdater: RulesStoreService ) { }

  public routes: Rule[];

  ngOnInit(): void {

    this.initializeDataTable();
    this.fetchRoutes();
    this.rulesSubscription = this.rulesUpdater.rulesUpdateWatcher.subscribe((rules: Rule[]) => {
      console.log(`\n\nReceived new data .... redrawing table!`)
      this.routes = rules;
      this.dataTable.DataTable().destroy();;
      this.initializeDataTable();
    });

  }


  private navigate(commands: any[], pars: any = {}): void {
    this.ngZone.run(() => this.router.navigate(commands,pars)).then();
  }

  formOptions()
  {

    return {
      scrollY: this.helpers.getPageHeight(),
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
      ],
      dom: 'Bfrtip',        // Needs button container
      select: true, //'single',
      responsive: true,
      altEditor: true,     // Enable altEditor
      buttons: [
         'excel',
         'pdf',
         {
          extend: 'selected', // Bind to Selected row
          text: 'Edit',
          name: 'edit'        // do not change name
      },
      // {
      //     extend: 'selected', // Bind to Selected row
      //     text: 'Delete',
      //     name: 'delete'      // do not change name
      // },
      {
          text: 'Refresh',
          action:  (e, dt, node, config) => {
            this.fetchRoutes();
          }
      }
      ],
      onEditRow: (datatable, rowdata, success, error) => {

        var that = datatable;
            var dt = datatable.s.dt;

            // Complete new row data
            var rowDataArray = {};

            var adata = dt.rows({
                selected: true
            });

            // Getting the inputs from the edit-modal
            $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function(i) {
                rowDataArray[$(this).attr('id')] = $(this).val();
            });

            //Getting the textArea from the modal
            $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function(i) {
                rowDataArray[$(this).attr('id')] = $(this).val();
            });

            //Getting Files from the modal
            var numFilesQueued = 0;
            $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function(i) {
                if ($(this).prop('files')[0]) {
                    ++numFilesQueued;
                    that.getBase64($(this).prop('files')[0], function(filecontent) {
                        rowDataArray[$(this).attr('id')] = filecontent;
                        --numFilesQueued;
                    });
                }
            });

            // Getting the checkbox from the modal
            $('form[name="altEditor-edit-form-' +datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function(i) {
                rowDataArray[$(this).attr('id')] = this.checked;
            });


          const {
            rule_id,
            rule_description,
            rule_expected_data,
            rule_expected_data_type,
            rule_expected_status_code,
            rule_http_verb,
            rule_method,
            rule_name,
            rule_path,
          } = <Rule>rowDataArray;

            this.http.postLocal({
              table : 'rule',
              command : 'update',
              rule_id,
            rule_description,
            rule_expected_data,
            rule_expected_data_type,
            rule_expected_status_code,
            rule_http_verb,
            rule_method,
            rule_name,
            rule_path,
            }).subscribe((d: GraderResponse)=> {
                if(d.response == 200) this.fetchRoutes();
                console.log(`Assignment Rule/Route Data update attempted!\nProof:`)
                console.dir(d)
            },err=> {
              console.error();
            }, ()=> {
              $('.modal,.modal-backdrop').hide();
            })

      }
    };
  }

  initializeDataTable() { 
    this.dataTable = $(this.table.nativeElement);
    // console.dir(this.dataTable);
    this.dataTable.DataTable(this.formOptions());
  }

  fetchRoutes(){
    this.http.getRules().subscribe((d: GraderResponse)=> {
      if(d.response == 200){
        this.rulesUpdater.resetRules(<Rule[]>d.data.message);
      }
      else
      {
        alert(`${d.data.message.toString()}`);
      }
    }, err => {});
  }

  ngOnDestroy(){
    this.rulesSubscription.unsubscribe();
  }

}
