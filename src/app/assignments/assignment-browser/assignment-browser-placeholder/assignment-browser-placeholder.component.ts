import { Router } from '@angular/router';
import { ByteGraderHelperService } from './../../../services/byte-grader-helper.service';
import { Assignment } from './../../../models/Assignment.model';
import { HttpService } from './../../../services/http.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AssignmentsStoreService } from 'src/app/services/stor/assignments.stor.service';
import { Subscription } from 'rxjs';
import { GraderResponse } from 'src/app/models/Response.model';

declare var $;
@Component({
  selector: 'app-assignment-browser-placeholder',
  templateUrl: './assignment-browser-placeholder.component.html',
  styleUrls: ['./assignment-browser-placeholder.component.css']
})
export class AssignmentBrowserPlaceholderComponent implements OnInit {

  dataTable: any;

  assignmentsSubscription : Subscription;

  @ViewChild('assignmentBrowser', {static: true}) table;

  public assignments:Assignment[];

  constructor(private http: HttpService, private helpers: ByteGraderHelperService, private router: Router, private ngZone: NgZone,  private assignmentsUpdater: AssignmentsStoreService) {
    // (window as any).pdfMake.vfs = (window as any).pdfFonts.pdfMake.vfs;
    // console.dir(window)

  }

  ngOnInit(): void {

    //  this.http.countAllRecords().then(console.dir)

    this.initializeDataTable();

    this.assignmentsSubscription = this.assignmentsUpdater.assignmentsUpdated.subscribe((assignments: Assignment[]) => {
      console.log(`\n\nReceived new data .... redrawing table!`)
      this.assignments = assignments;
      this.dataTable.DataTable().destroy();;
      this.initializeDataTable();
    });

    this.fetchAssignments();

    $(document).on('click','.openAssignment', (d) =>
    {
      d.stopPropagation()
      let identifier = $(d.currentTarget).attr('id');
      let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
      
      this.navigate([`/assignments/browse/rubric/${identifier}`], { state: assignmentData });
      // /assignments/browse/rubric/${identifier}

    });


    $(document).on('click','.openAssignmentSubmissions', (d) =>
    {
      d.stopPropagation()
      let identifier = $(d.currentTarget).attr('id');
      let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
      
      this.navigate([`/assignments/browse/attempts/${identifier}`], { state: assignmentData });
      // /assignments/browse/rubric/${identifier}

    });

    $(document).on('click','.openAttempts', (d) =>
    {
      d.stopPropagation()
      let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
      this.navigate([`/assignments/browse/attempts/${assignmentData.assignment_id}`], { state: assignmentData });
      // /assignments/browse/rubric/${identifier}

    });

    $(document).on('click','.gradeAssignment', (d) =>
    {
      d.stopPropagation();
      alert(`Attempting to grade assignments`);
      let assignmentData = JSON.parse(($(d.currentTarget).attr('data')||'{}').replace(/'/ig,'"').replace(/&apos;/ig,"'"));
      this.http.doGrading({ assignment_id : assignmentData.assignment_id }).subscribe((dta: GraderResponse)=> {
        console.log(`Grading invoked for the assignment #${assignmentData.assignment_id}`)
        console.log(`Assignment Grading Invokation response`,dta);
        if(dta.response == 200){
         alert(dta.data.message || `Assignment grading invoked`);
        } 
        else
        {
          alert(`Something went wong: ${dta?.data?.message}`);
        }       
      },err=> {
        alert(err.message);
      });

    });

  }

  private navigate(commands: any[], pars: any = {}): void {
    this.ngZone.run(() => this.router.navigate(commands,pars)).then();
  }

  formOptions(){
    return {
      scrollY: this.helpers.getPageHeight(),
      data: this.assignments,
      columns: [
        {title: 'ID', data: 'assignment_id'},
        {title: 'Name', data: 'assignment_name', className: 'editable',
          render:  (data, type, row) => this.helpers.stringify(data,'teal')
        },
        {title: 'Summary', data: 'assignment_summary', className: 'editable', sortable: false,
          render:  (data, type, row) => this.helpers.stringify(data,undefined)
        },

        {
          title: 'Grade All',
          sortable: false,
          data: null,
          render:  (data,type,row) => `<button class='btn btn-success gradeAssignment' data="${this.helpers.str(row).replace(/'/ig,'&apos;').replace(/"/ig,"'")}"> Grade All Attempts </button>`
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
        },
        {
          title: '',
          sortable: false,
          data: null,
          render: (data,type,row) => `<button class='btn btn-primary openAssignment' id="${row.assignment_id}" data="${this.helpers.str(row).replace(/'/ig,'&apos;').replace(/"/ig,"'")}"> View Rubric </button>`
        },  
        {
          title: '',
          sortable: false,
          data: null,
          render: (data,type,row) => `<button class='btn btn-primary openAssignmentSubmissions' id="${row.assignment_id}" data="${this.helpers.str(row).replace(/'/ig,'&apos;').replace(/"/ig,"'")}"> View Assignment Submissions </button>`
        },       
        {title: 'Notes', data: 'assignment_notes', className: 'editable', sortable: false,
          render:  (data, type, row) => this.helpers.stringify(data,undefined)
        },
        {title: 'Owner', data: 'assignment_owner',
          render:  (data, type, row) => this.helpers.stringify(row.assignment_owner_name,'blue')
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
            this.fetchAssignments();
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
                rowDataArray[$(this).attr('id')] = i //this?.checked;
            });


          const {
            assignment_id ,
            assignment_name,
            assignment_owner,
            assignment_due,
            assignment_summary,
            assignment_notes,
            assignment_created,
            assignment_last_modified,
          } = <Assignment>rowDataArray;

            this.http.postLocal({
              table : 'assignment',
              command : 'update',
              assignment_id ,
            assignment_name,
            assignment_owner,
            assignment_due,
            assignment_summary,
            assignment_notes,
            assignment_created,
            assignment_last_modified,
            }).subscribe((d: GraderResponse)=> {
              if(d.response == 200) this.fetchAssignments();
                console.log(`Assignment Data update attempted!\nProof:`)
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
                table : 'assignments',
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

  fetchAssignments(){
    this.http.getAssignments().subscribe((d: GraderResponse)=> {
      if(d.response == 200){
        // console.dir(d.data.message);
        this.assignmentsUpdater.resetAssignments(<Assignment[]>d.data.message);
       }
       else
       {
         alert(`${d.data.message.toString()}`);
       }
    }, err => {});
  }


  ngOnDestroy(){
    this.assignmentsSubscription.unsubscribe();
  }

}
