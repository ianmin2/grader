import { Attempts } from './../../models/Attempts.model';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Chaining } from 'src/app/models/Chaining.model';
import { GraderResponse } from 'src/app/models/Response.model';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { HttpService } from 'src/app/services/http.service';
import { AttemptStoreService } from 'src/app/services/stor/attempts.stor.service';

@Component({
  selector: 'app-grades-browser',
  templateUrl: './grades-browser.component.html',
  styleUrls: ['./grades-browser.component.css']
})
export class GradesBrowserComponent implements OnInit {


  dataTable: any;
  attemptsSubscription : Subscription;

  @ViewChild('gradesBrowser', {static: true}) table;
  constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router:Router, private ngZone: NgZone,  private attemptUpdater: AttemptStoreService ) { }

  public attempts: Attempts[];

  ngOnInit(): void {

    this.initializeDataTable();
    this.fetchAttempts();
    this.attemptsSubscription = this.attemptUpdater.attemptsUpdated.subscribe((chainings: Attempts[]) => {
      console.log(`\n\nReceived new data .... redrawing table!`);
      this.attempts = chainings;
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
      data: this.attempts,
      columns: [

          { title: "Id", data: 'attempt_id'  },
          {
            title: "Assignment",
            data: 'assignment_name' ,
            render : (data, type, row) => this.helpers.stringify(`${row.assignment_name} <sub>(${row.assignment_owner_name})</sub>`,'teal')
          },  
          {
            title: "Student",
            data: 'attempt_name' ,
            render : (data, type, row) => this.helpers.stringify(`${row.attempt_name} <sub>(${row.attempt_student_identifier})</sub>`,'deepskyblue')
          }, 
          {
            title: "Application host",
            data: 'attempt_main_path' 
          }, 
          {
            title : "Grade", data: "attempt_grade", 
            render : (data, type, row) =>
            {
              data = this.helpers.json(data||{ });
              return  (data.possible) ? 
                this.helpers.stringify(`${data.total} of ${data.possible} <sub>(${data.percentage}%)</sub>`,'teal')
                :  this.helpers.stringify(`No data`,'red');
            },       
          }, 
          {
            title: "Is Graded",
            data: 'attempt_grade_complete',
            render: (data,type,row) => (data) ? 'true' : 'false'
          }, 
          { 
            title: "Submitted At", 
            data: 'created_at',
            render:  (data, type, row) => this.helpers.dateify(data,'green')
          },
          { 
            title: "Last graded at", 
            data: 'updated_at',
            render:  (data, type, row) => this.helpers.dateify(data,'orange')
          },         
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
            this.fetchAttempts();
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
            attempt_id,
            attempt_name,
            attempt_student_identifier,
            attempt_main_path,
            attempt_assignment            
          } = <Attempts>rowDataArray;

            this.http.postLocal({
              table : 'attempts',
              command : 'update',
              attempt_id,
              attempt_name,
              attempt_student_identifier,
              attempt_main_path,
              attempt_assignment,           
            }).subscribe((d: GraderResponse)=> {
                if(d.response == 200) this.fetchAttempts();
                console.log(`Assignment Submission Data update attempted!\nProof:`)
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

  fetchAttempts(){
    this.http.getAttempts().subscribe((d: GraderResponse)=> {
      if(d.response == 200){
        this.attemptUpdater.resetAttempts(<Attempts[]>d.data.message);
        // this.chainingsUpdater.resetChainings(<Chaining[]>d.data.message);
      }
      else
      {
        alert(`${d.data.message.toString()}`);
      }
    }, err => {});
  }

  ngOnDestroy(){
    this.attemptsSubscription.unsubscribe();
  }


}
