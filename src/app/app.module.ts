import { AppRouterModule } from './app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
    GradesReviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
