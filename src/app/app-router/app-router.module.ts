import { GradesBrowserComponent } from './../grades/grades-browser/grades-browser.component';
import { GradesViewerComponent } from './../grades/grades-viewer/grades-viewer.component';
import { GradesReviewerComponent } from './../grades/grades-reviewer/grades-reviewer.component';
import { GradesPlaceholderComponent } from './../grades/grades-placeholder/grades-placeholder.component';
import { GradesComponent } from './../grades/grades.component';
import { AssignmentViewerComponent } from './../assignments/assignment-viewer/assignment-viewer.component';
import { AssignmentGeneratorComponent } from './../assignments/assignment-generator/assignment-generator.component';
import { AssignmentPlaceholderComponent } from './../assignments/assignment-placeholder/assignment-placeholder.component';
import { AssignmentsComponent } from './../assignments/assignments.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AssignmentBrowserComponent } from '../assignments/assignment-browser/assignment-browser.component';


const graderRoutes: Routes = [
  { path: '', redirectTo: "/assignments", pathMatch: "full"},
  { path: 'assignments', component: AssignmentsComponent,
    children : [
      { path: '', component: AssignmentPlaceholderComponent, pathMatch: "full"},
      { path: 'new', component: AssignmentGeneratorComponent},
      { path: 'browse', component : AssignmentBrowserComponent,
        children:
        [
          { path: ':id', component: AssignmentViewerComponent},
          { path: ':id/edit', component: AssignmentViewerComponent}
        ]
      },
      // { path: ':id', component: AssignmentViewerComponent},
      // { path: ':id/edit', component: AssignmentViewerComponent}
    ]
  },
  { path: 'grades', component: GradesComponent,
    children : [
      { path: '', component: GradesPlaceholderComponent, pathMatch: "full"},
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
      // { path: ':id/edit', component: GradesViewerComponent}
    ],
  },
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(graderRoutes, {useHash: false})],
  exports: [RouterModule]
})

export class AppRouterModule { }
