import { Attempts } from './../../../models/Attempts.model';
import { Rule } from '../../../models/Rule.model';
import { HttpService } from '../../../services/http.service';
import { Assignment } from '../../../models/Assignment.model';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ByteGraderHelperService } from 'src/app/services/byte-grader-helper.service';
import { AssignmentStoreService } from '../../../services/stor/assignment.stor.service'
import { Subscription } from 'rxjs';
import { GraderResponse } from 'src/app/models/Response.model';
import { AttemptStoreService } from 'src/app/services/stor/attempts.stor.service';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-assignment-browser-attempts',
  templateUrl: './assignment-browser-attempts.component.html',
  styleUrls: ['./assignment-browser-attempts.component.css']
})
export class AssignmentBrowserAttemptsComponent implements OnInit {

assignmentSubscription : Subscription;

dataTable: any;

helper :ByteGraderHelperService;


activeAssignmentId: any;

attemptsSubscription : Subscription;

@ViewChild('assignmentBrowseAttempts', {static: true}) table;

public attempts:Attempts[];

constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router: Router, private ngZone: NgZone,  private attemptsUpdater: AttemptStoreService, private activatedRoute: ActivatedRoute) {
  // (window as any).pdfMake.vfs = (window as any).pdfFonts.pdfMake.vfs;
  // console.dir(window)
}

ngOnInit(): void {

  this.helper = this.helpers;

  this.activeAssignmentId =   this.activatedRoute.snapshot.paramMap.get("id")

  //  this.http.countAllRecords().then(console.dir)

  this.initializeDataTable();

  this.attemptsSubscription = this.attemptsUpdater.attemptsUpdated.subscribe((attempts: Attempts[]) => {
    console.log(`\n\nReceived new data .... redrawing table!`)
    this.attempts = attempts;
    this.dataTable.DataTable().destroy();;
    this.initializeDataTable();
  });

  this.fetchAssignmentAttempts();

  // $(document).on('click','.openAssignment', (d) =>
  // {
  //   d.stopPropagation()
  //   let identifier = $(d.currentTarget).attr('id');
  //   let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
  //   this.navigate([`/attempts/browse/rubric/${identifier}`], { state: assignmentData });
  //   // /attempts/browse/rubric/${identifier}

  // })

}

private navigate(commands: any[], pars: any = {}): void {
  this.ngZone.run(() => this.router.navigate(commands,pars)).then();
}

formOptions(){
  return {
    scrollY: this.helpers.getPageHeight(),
    data: this.attempts,
    caption: `Submissions for Assignent #${this.activeAssignmentId}`,
    columns: [
      {title: 'ID', data: 'attempt_id'},
      {title: 'Name', data: 'attempt_name', className: 'editable',
        render:  (data, type, row) => this.helpers.stringify(data,'teal')
      },
      {title: 'Submitor\'s ID', data: 'attempt_student_identifier', className: 'editable', sortable: false,
        render:  (data, type, row) => this.helpers.stringify(data,undefined)
      },
      {title: 'App URL', data: 'attempt_main_path', className: 'editable', sortable: false,
        render:  (data, type, row) => this.helpers.stringify(data,undefined)
      },
      {title: 'Assignment', data: 'attempt_assignment',
        render:  (data, type, row) => this.helpers.stringify(row.attempt_assignment,'blue')
      },
      {
        title: '',
        sortable: false,
        data: null,
        render:  (data,type,row) => `<button class='btn btn-primary openAssignment' id="${row.attempt_id}" data="${this.helpers.str(row).replace(/'/ig,'&apos;').replace(/"/ig,"'")}"> . </btn>`
      },
      {
        title: 'Submitted',
        data: 'attempt_submission_time', className: 'editable',
        render:  (data, type, row) => this.helpers.stringify(data,'crimson')
      },
      {
        title: 'Created', data: 'created_at',
        render:  (data, type, row) => this.helpers.dateify(data,'green')
      },
      {
        title: 'Last Modified',
        data: 'updated_at',
        render:  (data, type, row) => this.helpers.dateify(data,undefined)
      },
    ]
    ,dom: 'Bfrtip',        // Needs button container
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
          this.fetchAssignmentAttempts();
        }
    }
    ],
    onAddRow: function(datatable, rowdata, success, error) {
        $.ajax({
            // a tipycal url would be / with type='PUT'
            url: `/`,
            type: 'GET',
            data: rowdata,
            success: success,
            error: error
        });
    },
    onDeleteRow: function(datatable, rowdata, success, error) {
        $.ajax({
            // a tipycal url would be /{id} with type='DELETE'
            url: `/`,
            type: 'GET',
            data: rowdata,
            success: success,
            error: error
        });
    },
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
              rowDataArray[$(this).attr('id')] = i; // this?.checked;
          });


        const {
          attempt_id ,
          attempt_name,
          attempt_student_identifier,
          attempt_main_path,
          attempt_submission_time,
          attempt_grading_time,
          attempt_grade_breakdown,
          attempt_grade_complete,
          attempt_assignment,
          updated_at
        } = <Attempts>rowDataArray;

          this.http.postLocal({
            table : 'attempt',
            command : 'update',
            attempt_id ,
          attempt_name,
          attempt_student_identifier,
          attempt_main_path,
          attempt_submission_time,
          attempt_grading_time,
          attempt_grade_breakdown,
          attempt_grade_complete,
          attempt_assignment,
          updated_at
          }).subscribe((d: GraderResponse)=> {
            if(d.response == 200) this.fetchAssignmentAttempts();
              console.log(`Assignment Submission Data update attempted!\nProof:`)
              console.dir(d)
          },err=> {
            console.error();
          }, ()=> {

            $('.modal,.modal-backdrop').hide();

          })

          /*
            const { attempt_id ,
              attempt_name,
              attempt_student_identifier,
              attempt_main_path,
              attempt_submission_time,
              attempt_grading_time,
              attempt_grade_breakdown,
              attempt_grade_complete,
              attempt_assignment,
              created_at,
              updated_at } = rowdata;

            this.http.getLocal({
              table : 'attempts',
              command : 'update',
              attempt_id ,
              attempt_name,
              attempt_student_identifier,
              attempt_main_path,
              attempt_submission_time,
              attempt_grading_time,
              attempt_grade_breakdown,
              attempt_grade_complete,
              attempt_assignment,
              created_at,
              updated_at
            }).subscribe((d: GraderResponse)=> {
                console.log(`Assignment Data update attempted!\nProof:`)
                console.dir(d)
            })
          */

    }
  };
}

initializeDataTable() {
  this.dataTable = $(this.table.nativeElement);
  // console.dir(this.dataTable);
  this.dataTable.DataTable(this.formOptions());
}

fetchAssignmentAttempts(){
  this.http.getAttempts(null, this.activeAssignmentId).subscribe((d: GraderResponse)=> {
    if(d.response == 200){
      // console.dir(d.data.message);
      this.attemptsUpdater.resetAttempts(<Attempts[]>d.data.message);
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
