import { Chaining } from './../../models/Chaining.model';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GraderResponse } from 'src/app/models/Response.model';
import { Rule } from 'src/app/models/Rule.model';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { HttpService } from 'src/app/services/http.service';
import { ChainingsStoreService } from 'src/app/services/stor/chainings.stor.service';

@Component({
  selector: 'app-assignment-viewer',
  templateUrl: './assignment-viewer.component.html',
  styleUrls: ['./assignment-viewer.component.css']
})
export class AssignmentViewerComponent implements OnInit {

  dataTable: any;
  chainingsSubscription : Subscription;

  @ViewChild('ruleChainingBrowser', {static: true}) table;
  constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router:Router, private ngZone: NgZone,  private chainingsUpdater: ChainingsStoreService ) { }

  public routes: Chaining[];

  ngOnInit(): void {

    this.initializeDataTable();
    this.fetchRoutes();
    this.chainingsSubscription = this.chainingsUpdater.chainingsUpdateWatcher.subscribe((chainings: Chaining[]) => {
      console.log(`\n\nReceived new data .... redrawing table!`)
      this.routes = chainings;
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

          { title: "Id", data: 'chaining_id'  },
          {
            title: "Assignment",
            data: 'chaining_assignment' ,
            render : (data, type, row) => this.helpers.stringify(`${row.assignment_name} <sub>(${row.assignment_owner_name})</sub>`,'teal')
          },         
          { title: "Created At", data: 'created_at',
            render:  (data, type, row) => this.helpers.dateify(data,'green')
          },
          { title: "Updated At", data: 'updated_at',
            render:  (data, type, row) => this.helpers.dateify(data,'orange')
          },
          {
            title : "Bundling Data", data: "chaining_rules", 
            render : (data, type, row) => this.helpers.jsonify(data)
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
                rowDataArray[$(this).attr('id')] = i; // this.checked;
            });


          const {
            chaining_id,
            chaining_assignment,
            chaining_rules            
          } = <Chaining>rowDataArray;

            this.http.postLocal({
              table : 'chaining',
              command : 'update',
              chaining_id,
            chaining_assignment,
            chaining_rules            
            }).subscribe((d: GraderResponse)=> {
                if(d.response == 200) this.fetchRoutes();
                console.log(`Rule Bundling Data update attempted!\nProof:`)
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
    this.http.getChaining().subscribe((d: GraderResponse)=> {
      if(d.response == 200){
        this.chainingsUpdater.resetChainings(<Chaining[]>d.data.message);
      }
      else
      {
        alert(`${d.data.message.toString()}`);
      }
    }, err => {});
  }

  ngOnDestroy(){
    this.chainingsSubscription.unsubscribe();
  }


}
