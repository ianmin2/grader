import { AssignmentSubmissionBrowserComponent } from './../assignments/assignment-submission-browser/assignment-submission-browser.component';
import { AssignmentBrowserPlaceholderComponent } from './../assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component';
import { AssignmentBrowserRubricComponent } from './../assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component';
import { AuthGuardService } from './../services/auth/auth-guard.service';
import { UserLoginComponent } from './../user-login/user-login.component';
import { NewAssignmentComponent } from './../assignments/assignment-generator/new-assignment/new-assignment.component';
import { OverviewComponent } from './../assignments/assignment-generator/overview/overview.component';
import { OutputManagerComponent } from './../assignments/assignment-generator/output-manager/output-manager.component';
import { MethodManagerComponent } from './../assignments/assignment-generator/method-manager/method-manager.component';
import { PathManagerComponent } from './../assignments/assignment-generator/path-manager/path-manager.component';
import { RouteManagerComponent } from './../assignments/assignment-generator/route-manager/route-manager.component';
import { GradesBrowserComponent } from './../grades/grades-browser/grades-browser.component';
import { GradesViewerComponent } from './../grades/grades-viewer/grades-viewer.component';
import { GradesReviewerComponent } from './../grades/grades-reviewer/grades-reviewer.component';
import { GradesPlaceholderComponent } from './../grades/grades-placeholder/grades-placeholder.component';
import { GradesComponent } from './../grades/grades.component';
import { AssignmentViewerComponent as RuleChainingBrowser } from './../assignments/assignment-viewer/assignment-viewer.component';
import { AssignmentGeneratorComponent } from './../assignments/assignment-generator/assignment-generator.component';
import { AssignmentPlaceholderComponent } from './../assignments/assignment-placeholder/assignment-placeholder.component';
import { AssignmentsComponent } from './../assignments/assignments.component';
import { AssignmentSubmissionComponent } from './../assignments/assignment-submission/assignment-submission.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AssignmentBrowserComponent } from '../assignments/assignment-browser/assignment-browser.component';
import { AssignmentGradingComponent } from '../assignments/assignment-grading/assignment-grading.component';
import { AssignmentBrowserAttemptsComponent } from '../assignments/assignment-browser/assignment-browser-attempts/assignment-browser-attempts.component';


const graderRoutes: Routes = [
  { path: '', redirectTo: "/assignments", pathMatch: "full"},
  {path : 'auth', component: UserLoginComponent},
  { path: 'submissions', component: AssignmentSubmissionComponent },
  { path: 'assignments', component: AssignmentsComponent,
    children : [
      { path: '', component: AssignmentPlaceholderComponent, pathMatch: "full"},
      { path: 'new', component: NewAssignmentComponent },
      { path : 'submit', component: AssignmentSubmissionComponent },
      { path: 'generator', component: AssignmentGeneratorComponent,
        children:
        [
          { path: 'grading', component: AssignmentGradingComponent},
          { path: 'routes',  component: RouteManagerComponent},
          { path: 'chaining',   component: PathManagerComponent},
          { path: 'methods', component: MethodManagerComponent},
          { path: 'outputs', component: OutputManagerComponent},
          { path: 'review', component: OverviewComponent },
          { path: '**', component: NotFoundComponent}
        ]
      },
      { path: 'browse', component : AssignmentBrowserComponent,
        children:
        [
          { path : '', component: AssignmentBrowserPlaceholderComponent, pathMatch: "full", canActivate : []},
          { path : 'rubric/:id', component: AssignmentBrowserRubricComponent, pathMatch: "full" },
          {
            path: "attempts/:id",
            component: AssignmentBrowserAttemptsComponent,
            pathMatch: "full"
          },
          { path : 'submissions', component: AssignmentSubmissionBrowserComponent },
          { path : "chainings", component: RuleChainingBrowser },
          // { path: ':id', component: AssignmentBrowserRubricComponent},
          // { path: ':id/edit', component:AssignmentBrowserRubricComponent}
          { path: '**', component: NotFoundComponent}
        ]
      },
      // { path: ':id', component: AssignmentViewerComponent},
      // { path: ':id/edit', component: AssignmentViewerComponent},
      { path: '**', component: NotFoundComponent}
    ],
    canActivate : [AuthGuardService]
  },
  { path: 'grades', component: GradesComponent,
    children : [
      { path: '', component: GradesBrowserComponent, pathMatch: "full"},
      {path: 'review', component: GradesReviewerComponent,
      children:
        [
          { path: ':id', component: GradesViewerComponent},
        ]
      },
      { path : 'browse', component: GradesBrowserComponent,
        children : [
          { path: ':id', component: GradesViewerComponent},
          { path: ':id/edit', component: GradesViewerComponent}
        ]
      },
      // { path: ':id', component: GradesViewerComponent},
      // { path: ':id/edit', component: GradesViewerComponent},
      { path: '**', component: NotFoundComponent}
    ],
    canActivate: [AuthGuardService]
  },
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(graderRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRouterModule { }
