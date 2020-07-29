import { AppRouterModule } from './app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

//@ APPLICATION COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuDropdownComponent } from './header/menu-dropdown/menu-dropdown.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { MenuRightComponent } from './header/menu-right/menu-right.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { GradesComponent } from './grades/grades.component';
import { AssignmentGradingComponent } from './assignments/assignment-grading/assignment-grading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AssignmentPlaceholderComponent } from './assignments/assignment-placeholder/assignment-placeholder.component';
import { AssignmentGeneratorComponent } from './assignments/assignment-generator/assignment-generator.component';
import { AssignmentBrowserComponent } from './assignments/assignment-browser/assignment-browser.component';
import { AssignmentViewerComponent } from './assignments/assignment-viewer/assignment-viewer.component';
import { GradesBrowserComponent } from './grades/grades-browser/grades-browser.component';
import { GradesPlaceholderComponent } from './grades/grades-placeholder/grades-placeholder.component';
import { GradesViewerComponent } from './grades/grades-viewer/grades-viewer.component';
import { GradesReviewerComponent } from './grades/grades-reviewer/grades-reviewer.component';
import { AssignmentsMenuComponent } from './assignments/assignments-menu/assignments-menu.component';
import { RouteManagerComponent } from './assignments/assignment-generator/route-manager/route-manager.component';
import { PathManagerComponent } from './assignments/assignment-generator/path-manager/path-manager.component';
import { MethodManagerComponent } from './assignments/assignment-generator/method-manager/method-manager.component';
import { OutputManagerComponent } from './assignments/assignment-generator/output-manager/output-manager.component';
import { OverviewComponent } from './assignments/assignment-generator/overview/overview.component';
import { NewAssignmentComponent } from './assignments/assignment-generator/new-assignment/new-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuDropdownComponent,
    MenuButtonComponent,
    MenuRightComponent,
    AssignmentsComponent,
    GradesComponent,
    AssignmentGradingComponent,
    NotFoundComponent,
    AssignmentPlaceholderComponent,
    AssignmentGeneratorComponent,
    AssignmentBrowserComponent,
    AssignmentViewerComponent,
    GradesBrowserComponent,
    GradesPlaceholderComponent,
    GradesViewerComponent,
    GradesReviewerComponent,
    AssignmentsMenuComponent,
    RouteManagerComponent,
    PathManagerComponent,
    MethodManagerComponent,
    OutputManagerComponent,
    OverviewComponent,
    NewAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
