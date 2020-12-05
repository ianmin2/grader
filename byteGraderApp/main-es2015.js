(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router/app-router.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-router/app-router.module.ts ***!
  \*************************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _assignments_assignment_submission_browser_assignment_submission_browser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assignments/assignment-submission-browser/assignment-submission-browser.component */ "./src/app/assignments/assignment-submission-browser/assignment-submission-browser.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_placeholder_assignment_browser_placeholder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component */ "./src/app/assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_rubric_assignment_browser_rubric_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component */ "./src/app/assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _assignments_assignment_generator_new_assignment_new_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assignments/assignment-generator/new-assignment/new-assignment.component */ "./src/app/assignments/assignment-generator/new-assignment/new-assignment.component.ts");
/* harmony import */ var _assignments_assignment_generator_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assignments/assignment-generator/overview/overview.component */ "./src/app/assignments/assignment-generator/overview/overview.component.ts");
/* harmony import */ var _assignments_assignment_generator_output_manager_output_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../assignments/assignment-generator/output-manager/output-manager.component */ "./src/app/assignments/assignment-generator/output-manager/output-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_method_manager_method_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../assignments/assignment-generator/method-manager/method-manager.component */ "./src/app/assignments/assignment-generator/method-manager/method-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_path_manager_path_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../assignments/assignment-generator/path-manager/path-manager.component */ "./src/app/assignments/assignment-generator/path-manager/path-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_route_manager_route_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../assignments/assignment-generator/route-manager/route-manager.component */ "./src/app/assignments/assignment-generator/route-manager/route-manager.component.ts");
/* harmony import */ var _grades_grades_browser_grades_browser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../grades/grades-browser/grades-browser.component */ "./src/app/grades/grades-browser/grades-browser.component.ts");
/* harmony import */ var _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../grades/grades-viewer/grades-viewer.component */ "./src/app/grades/grades-viewer/grades-viewer.component.ts");
/* harmony import */ var _grades_grades_reviewer_grades_reviewer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../grades/grades-reviewer/grades-reviewer.component */ "./src/app/grades/grades-reviewer/grades-reviewer.component.ts");
/* harmony import */ var _grades_grades_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../grades/grades.component */ "./src/app/grades/grades.component.ts");
/* harmony import */ var _assignments_assignment_viewer_assignment_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../assignments/assignment-viewer/assignment-viewer.component */ "./src/app/assignments/assignment-viewer/assignment-viewer.component.ts");
/* harmony import */ var _assignments_assignment_generator_assignment_generator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../assignments/assignment-generator/assignment-generator.component */ "./src/app/assignments/assignment-generator/assignment-generator.component.ts");
/* harmony import */ var _assignments_assignment_placeholder_assignment_placeholder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../assignments/assignment-placeholder/assignment-placeholder.component */ "./src/app/assignments/assignment-placeholder/assignment-placeholder.component.ts");
/* harmony import */ var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../assignments/assignments.component */ "./src/app/assignments/assignments.component.ts");
/* harmony import */ var _assignments_assignment_submission_assignment_submission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../assignments/assignment-submission/assignment-submission.component */ "./src/app/assignments/assignment-submission/assignment-submission.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assignments/assignment-browser/assignment-browser.component */ "./src/app/assignments/assignment-browser/assignment-browser.component.ts");
/* harmony import */ var _assignments_assignment_grading_assignment_grading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assignments/assignment-grading/assignment-grading.component */ "./src/app/assignments/assignment-grading/assignment-grading.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_attempts_assignment_browser_attempts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assignments/assignment-browser/assignment-browser-attempts/assignment-browser-attempts.component */ "./src/app/assignments/assignment-browser/assignment-browser-attempts/assignment-browser-attempts.component.ts");






















// import { CommonModule } from '@angular/common';






const graderRoutes = [
    { path: '', redirectTo: "/assignments", pathMatch: "full" },
    { path: 'auth', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"] },
    { path: 'submissions', component: _assignments_assignment_submission_assignment_submission_component__WEBPACK_IMPORTED_MODULE_19__["AssignmentSubmissionComponent"] },
    { path: 'assignments', component: _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_18__["AssignmentsComponent"],
        children: [
            { path: '', component: _assignments_assignment_placeholder_assignment_placeholder_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentPlaceholderComponent"], pathMatch: "full" },
            { path: 'new', component: _assignments_assignment_generator_new_assignment_new_assignment_component__WEBPACK_IMPORTED_MODULE_5__["NewAssignmentComponent"] },
            { path: 'submit', component: _assignments_assignment_submission_assignment_submission_component__WEBPACK_IMPORTED_MODULE_19__["AssignmentSubmissionComponent"] },
            { path: 'generator', component: _assignments_assignment_generator_assignment_generator_component__WEBPACK_IMPORTED_MODULE_16__["AssignmentGeneratorComponent"],
                children: [
                    { path: 'grading', component: _assignments_assignment_grading_assignment_grading_component__WEBPACK_IMPORTED_MODULE_24__["AssignmentGradingComponent"] },
                    { path: 'routes', component: _assignments_assignment_generator_route_manager_route_manager_component__WEBPACK_IMPORTED_MODULE_10__["RouteManagerComponent"] },
                    { path: 'chaining', component: _assignments_assignment_generator_path_manager_path_manager_component__WEBPACK_IMPORTED_MODULE_9__["PathManagerComponent"] },
                    { path: 'methods', component: _assignments_assignment_generator_method_manager_method_manager_component__WEBPACK_IMPORTED_MODULE_8__["MethodManagerComponent"] },
                    { path: 'outputs', component: _assignments_assignment_generator_output_manager_output_manager_component__WEBPACK_IMPORTED_MODULE_7__["OutputManagerComponent"] },
                    { path: 'review', component: _assignments_assignment_generator_overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"] }
                ]
            },
            { path: 'browse', component: _assignments_assignment_browser_assignment_browser_component__WEBPACK_IMPORTED_MODULE_23__["AssignmentBrowserComponent"],
                children: [
                    { path: '', component: _assignments_assignment_browser_assignment_browser_placeholder_assignment_browser_placeholder_component__WEBPACK_IMPORTED_MODULE_1__["AssignmentBrowserPlaceholderComponent"], pathMatch: "full", canActivate: [] },
                    { path: 'rubric/:id', component: _assignments_assignment_browser_assignment_browser_rubric_assignment_browser_rubric_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentBrowserRubricComponent"], pathMatch: "full" },
                    {
                        path: "attempts/:id",
                        component: _assignments_assignment_browser_assignment_browser_attempts_assignment_browser_attempts_component__WEBPACK_IMPORTED_MODULE_25__["AssignmentBrowserAttemptsComponent"],
                        pathMatch: "full"
                    },
                    { path: 'submissions', component: _assignments_assignment_submission_browser_assignment_submission_browser_component__WEBPACK_IMPORTED_MODULE_0__["AssignmentSubmissionBrowserComponent"] },
                    { path: "chainings", component: _assignments_assignment_viewer_assignment_viewer_component__WEBPACK_IMPORTED_MODULE_15__["AssignmentViewerComponent"] },
                    // { path: ':id', component: AssignmentBrowserRubricComponent},
                    // { path: ':id/edit', component:AssignmentBrowserRubricComponent}
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"] }
                ]
            },
            // { path: ':id', component: AssignmentViewerComponent},
            // { path: ':id/edit', component: AssignmentViewerComponent},
            { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"] }
        ],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    { path: 'grades', component: _grades_grades_component__WEBPACK_IMPORTED_MODULE_14__["GradesComponent"],
        children: [
            { path: '', component: _grades_grades_browser_grades_browser_component__WEBPACK_IMPORTED_MODULE_11__["GradesBrowserComponent"], pathMatch: "full" },
            { path: 'review', component: _grades_grades_reviewer_grades_reviewer_component__WEBPACK_IMPORTED_MODULE_13__["GradesReviewerComponent"],
                children: [
                    { path: ':id', component: _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_12__["GradesViewerComponent"] },
                ]
            },
            { path: 'browse', component: _grades_grades_browser_grades_browser_component__WEBPACK_IMPORTED_MODULE_11__["GradesBrowserComponent"],
                children: [
                    { path: ':id', component: _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_12__["GradesViewerComponent"] },
                    { path: ':id/edit', component: _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_12__["GradesViewerComponent"] }
                ]
            },
            // { path: ':id', component: GradesViewerComponent},
            // { path: ':id/edit', component: GradesViewerComponent},
            { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"] }
        ],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"] }
];
class AppRouterModule {
}
AppRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppRouterModule });
AppRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppRouterModule_Factory(t) { return new (t || AppRouterModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(graderRoutes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵsetClassMetadata"](AppRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_21__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(graderRoutes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = "ByteGrader";
        this.name = "";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["byte-app"]], decls: 3, vars: 0, consts: [["title", "Byte Grader"], [1, "container-fluid", "padding"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'byte-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _services_auth_intercept_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-intercept.service */ "./src/app/services/auth-intercept.service.ts");
/* harmony import */ var _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-router/app-router.module */ "./src/app/app-router/app-router.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_menu_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/menu-dropdown/menu-dropdown.component */ "./src/app/header/menu-dropdown/menu-dropdown.component.ts");
/* harmony import */ var _header_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/menu-button/menu-button.component */ "./src/app/header/menu-button/menu-button.component.ts");
/* harmony import */ var _header_menu_right_menu_right_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/menu-right/menu-right.component */ "./src/app/header/menu-right/menu-right.component.ts");
/* harmony import */ var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assignments/assignments.component */ "./src/app/assignments/assignments.component.ts");
/* harmony import */ var _grades_grades_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./grades/grades.component */ "./src/app/grades/grades.component.ts");
/* harmony import */ var _assignments_assignment_grading_assignment_grading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assignments/assignment-grading/assignment-grading.component */ "./src/app/assignments/assignment-grading/assignment-grading.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _assignments_assignment_placeholder_assignment_placeholder_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assignments/assignment-placeholder/assignment-placeholder.component */ "./src/app/assignments/assignment-placeholder/assignment-placeholder.component.ts");
/* harmony import */ var _assignments_assignment_generator_assignment_generator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assignments/assignment-generator/assignment-generator.component */ "./src/app/assignments/assignment-generator/assignment-generator.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assignments/assignment-browser/assignment-browser.component */ "./src/app/assignments/assignment-browser/assignment-browser.component.ts");
/* harmony import */ var _assignments_assignment_viewer_assignment_viewer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assignments/assignment-viewer/assignment-viewer.component */ "./src/app/assignments/assignment-viewer/assignment-viewer.component.ts");
/* harmony import */ var _grades_grades_browser_grades_browser_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./grades/grades-browser/grades-browser.component */ "./src/app/grades/grades-browser/grades-browser.component.ts");
/* harmony import */ var _grades_grades_placeholder_grades_placeholder_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./grades/grades-placeholder/grades-placeholder.component */ "./src/app/grades/grades-placeholder/grades-placeholder.component.ts");
/* harmony import */ var _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./grades/grades-viewer/grades-viewer.component */ "./src/app/grades/grades-viewer/grades-viewer.component.ts");
/* harmony import */ var _grades_grades_reviewer_grades_reviewer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./grades/grades-reviewer/grades-reviewer.component */ "./src/app/grades/grades-reviewer/grades-reviewer.component.ts");
/* harmony import */ var _assignments_assignments_menu_assignments_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assignments/assignments-menu/assignments-menu.component */ "./src/app/assignments/assignments-menu/assignments-menu.component.ts");
/* harmony import */ var _assignments_assignment_generator_route_manager_route_manager_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assignments/assignment-generator/route-manager/route-manager.component */ "./src/app/assignments/assignment-generator/route-manager/route-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_path_manager_path_manager_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assignments/assignment-generator/path-manager/path-manager.component */ "./src/app/assignments/assignment-generator/path-manager/path-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_method_manager_method_manager_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assignments/assignment-generator/method-manager/method-manager.component */ "./src/app/assignments/assignment-generator/method-manager/method-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_output_manager_output_manager_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assignments/assignment-generator/output-manager/output-manager.component */ "./src/app/assignments/assignment-generator/output-manager/output-manager.component.ts");
/* harmony import */ var _assignments_assignment_generator_overview_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assignments/assignment-generator/overview/overview.component */ "./src/app/assignments/assignment-generator/overview/overview.component.ts");
/* harmony import */ var _assignments_assignment_generator_new_assignment_new_assignment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assignments/assignment-generator/new-assignment/new-assignment.component */ "./src/app/assignments/assignment-generator/new-assignment/new-assignment.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_rubric_assignment_browser_rubric_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component */ "./src/app/assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component.ts");
/* harmony import */ var _assignments_assignment_browser_assignment_browser_placeholder_assignment_browser_placeholder_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component */ "./src/app/assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component.ts");
/* harmony import */ var _assignments_assignment_submission_assignment_submission_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assignments/assignment-submission/assignment-submission.component */ "./src/app/assignments/assignment-submission/assignment-submission.component.ts");
/* harmony import */ var _assignments_assignment_submission_browser_assignment_submission_browser_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assignments/assignment-submission-browser/assignment-submission-browser.component */ "./src/app/assignments/assignment-submission-browser/assignment-submission-browser.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");










//@ APPLICATION COMPONENTS





































// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _services_auth_intercept_service__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptService"], multi: true },
        _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__["NgbModule"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"].forRoot({
                prefix: 'byteGrader',
                storageType: 'localStorage'
            }),
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_41__["MatCardModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _header_menu_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["MenuDropdownComponent"],
        _header_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_13__["MenuButtonComponent"],
        _header_menu_right_menu_right_component__WEBPACK_IMPORTED_MODULE_14__["MenuRightComponent"],
        _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_15__["AssignmentsComponent"],
        _grades_grades_component__WEBPACK_IMPORTED_MODULE_16__["GradesComponent"],
        _assignments_assignment_grading_assignment_grading_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentGradingComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
        _assignments_assignment_placeholder_assignment_placeholder_component__WEBPACK_IMPORTED_MODULE_19__["AssignmentPlaceholderComponent"],
        _assignments_assignment_generator_assignment_generator_component__WEBPACK_IMPORTED_MODULE_20__["AssignmentGeneratorComponent"],
        _assignments_assignment_browser_assignment_browser_component__WEBPACK_IMPORTED_MODULE_21__["AssignmentBrowserComponent"],
        _assignments_assignment_viewer_assignment_viewer_component__WEBPACK_IMPORTED_MODULE_22__["AssignmentViewerComponent"],
        _grades_grades_browser_grades_browser_component__WEBPACK_IMPORTED_MODULE_23__["GradesBrowserComponent"],
        _grades_grades_placeholder_grades_placeholder_component__WEBPACK_IMPORTED_MODULE_24__["GradesPlaceholderComponent"],
        _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_25__["GradesViewerComponent"],
        _grades_grades_reviewer_grades_reviewer_component__WEBPACK_IMPORTED_MODULE_26__["GradesReviewerComponent"],
        _assignments_assignments_menu_assignments_menu_component__WEBPACK_IMPORTED_MODULE_27__["AssignmentsMenuComponent"],
        _assignments_assignment_generator_route_manager_route_manager_component__WEBPACK_IMPORTED_MODULE_28__["RouteManagerComponent"],
        _assignments_assignment_generator_path_manager_path_manager_component__WEBPACK_IMPORTED_MODULE_29__["PathManagerComponent"],
        _assignments_assignment_generator_method_manager_method_manager_component__WEBPACK_IMPORTED_MODULE_30__["MethodManagerComponent"],
        _assignments_assignment_generator_output_manager_output_manager_component__WEBPACK_IMPORTED_MODULE_31__["OutputManagerComponent"],
        _assignments_assignment_generator_overview_overview_component__WEBPACK_IMPORTED_MODULE_32__["OverviewComponent"],
        _assignments_assignment_generator_new_assignment_new_assignment_component__WEBPACK_IMPORTED_MODULE_33__["NewAssignmentComponent"],
        _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_35__["UserLoginComponent"],
        _assignments_assignment_browser_assignment_browser_rubric_assignment_browser_rubric_component__WEBPACK_IMPORTED_MODULE_36__["AssignmentBrowserRubricComponent"],
        _assignments_assignment_browser_assignment_browser_placeholder_assignment_browser_placeholder_component__WEBPACK_IMPORTED_MODULE_37__["AssignmentBrowserPlaceholderComponent"],
        _assignments_assignment_submission_assignment_submission_component__WEBPACK_IMPORTED_MODULE_38__["AssignmentSubmissionComponent"],
        _assignments_assignment_submission_browser_assignment_submission_browser_component__WEBPACK_IMPORTED_MODULE_39__["AssignmentSubmissionBrowserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__["NgbModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_41__["MatCardModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _header_menu_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["MenuDropdownComponent"],
                    _header_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_13__["MenuButtonComponent"],
                    _header_menu_right_menu_right_component__WEBPACK_IMPORTED_MODULE_14__["MenuRightComponent"],
                    _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_15__["AssignmentsComponent"],
                    _grades_grades_component__WEBPACK_IMPORTED_MODULE_16__["GradesComponent"],
                    _assignments_assignment_grading_assignment_grading_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentGradingComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                    _assignments_assignment_placeholder_assignment_placeholder_component__WEBPACK_IMPORTED_MODULE_19__["AssignmentPlaceholderComponent"],
                    _assignments_assignment_generator_assignment_generator_component__WEBPACK_IMPORTED_MODULE_20__["AssignmentGeneratorComponent"],
                    _assignments_assignment_browser_assignment_browser_component__WEBPACK_IMPORTED_MODULE_21__["AssignmentBrowserComponent"],
                    _assignments_assignment_viewer_assignment_viewer_component__WEBPACK_IMPORTED_MODULE_22__["AssignmentViewerComponent"],
                    _grades_grades_browser_grades_browser_component__WEBPACK_IMPORTED_MODULE_23__["GradesBrowserComponent"],
                    _grades_grades_placeholder_grades_placeholder_component__WEBPACK_IMPORTED_MODULE_24__["GradesPlaceholderComponent"],
                    _grades_grades_viewer_grades_viewer_component__WEBPACK_IMPORTED_MODULE_25__["GradesViewerComponent"],
                    _grades_grades_reviewer_grades_reviewer_component__WEBPACK_IMPORTED_MODULE_26__["GradesReviewerComponent"],
                    _assignments_assignments_menu_assignments_menu_component__WEBPACK_IMPORTED_MODULE_27__["AssignmentsMenuComponent"],
                    _assignments_assignment_generator_route_manager_route_manager_component__WEBPACK_IMPORTED_MODULE_28__["RouteManagerComponent"],
                    _assignments_assignment_generator_path_manager_path_manager_component__WEBPACK_IMPORTED_MODULE_29__["PathManagerComponent"],
                    _assignments_assignment_generator_method_manager_method_manager_component__WEBPACK_IMPORTED_MODULE_30__["MethodManagerComponent"],
                    _assignments_assignment_generator_output_manager_output_manager_component__WEBPACK_IMPORTED_MODULE_31__["OutputManagerComponent"],
                    _assignments_assignment_generator_overview_overview_component__WEBPACK_IMPORTED_MODULE_32__["OverviewComponent"],
                    _assignments_assignment_generator_new_assignment_new_assignment_component__WEBPACK_IMPORTED_MODULE_33__["NewAssignmentComponent"],
                    _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_35__["UserLoginComponent"],
                    _assignments_assignment_browser_assignment_browser_rubric_assignment_browser_rubric_component__WEBPACK_IMPORTED_MODULE_36__["AssignmentBrowserRubricComponent"],
                    _assignments_assignment_browser_assignment_browser_placeholder_assignment_browser_placeholder_component__WEBPACK_IMPORTED_MODULE_37__["AssignmentBrowserPlaceholderComponent"],
                    _assignments_assignment_submission_assignment_submission_component__WEBPACK_IMPORTED_MODULE_38__["AssignmentSubmissionComponent"],
                    _assignments_assignment_submission_browser_assignment_submission_browser_component__WEBPACK_IMPORTED_MODULE_39__["AssignmentSubmissionBrowserComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _app_router_app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__["NgbModule"],
                    angular_2_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorageModule"].forRoot({
                        prefix: 'byteGrader',
                        storageType: 'localStorage'
                    }),
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_41__["MatCardModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _services_auth_intercept_service__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptService"], multi: true },
                    _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"],
                    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-browser/assignment-browser-attempts/assignment-browser-attempts.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/assignments/assignment-browser/assignment-browser-attempts/assignment-browser-attempts.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AssignmentBrowserAttemptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentBrowserAttemptsComponent", function() { return AssignmentBrowserAttemptsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stor/attempts.stor.service */ "./src/app/services/stor/attempts.stor.service.ts");







const _c0 = ["assignmentBrowseAttempts"];
class AssignmentBrowserAttemptsComponent {
    constructor(http, helpers, router, ngZone, attemptsUpdater, activatedRoute) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.attemptsUpdater = attemptsUpdater;
        this.activatedRoute = activatedRoute;
        // (window as any).pdfMake.vfs = (window as any).pdfFonts.pdfMake.vfs;
        // console.dir(window)
    }
    ngOnInit() {
        this.helper = this.helpers;
        this.activeAssignmentId = this.activatedRoute.snapshot.paramMap.get("id");
        //  this.http.countAllRecords().then(console.dir)
        this.initializeDataTable();
        this.attemptsSubscription = this.attemptsUpdater.attemptsUpdated.subscribe((attempts) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.attempts = attempts;
            this.dataTable.DataTable().destroy();
            ;
            this.initializeDataTable();
        });
        this.fetchAssignmentAttempts();
        //@ Attempt to get the simple report
        $(document).on('click', '.simpleReport', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            //@ Navigate to the relevant route 
            let targetUrl = `${this.http.applicationHost}?command=get&table=gradereport&attempt_id=${identifier}`;
            window.open(targetUrl, "_blank");
        });
        $(document).on('click', '.complexReport', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            //@ Navigate to the relevant route 
            let targetUrl = `${this.http.applicationHost}?command=get&table=gradereport&attempt_id=${identifier}&technical=true`;
            window.open(targetUrl, "_blank");
        });
        //@ Attempt an assignment re-grading
        $(document).on('click', '.gradeAssignment', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            this.http.doGrading({ attempt_id: identifier }).subscribe((dta) => {
                var _a;
                console.log(`Grading invoked for the attempt #${identifier}`);
                console.log(`Assignment Grading Invokation response`, dta);
                if (dta.response == 200) {
                    alert(dta.data.message || `Assignment attempt grading invoked`);
                    this.fetchAssignmentAttempts();
                }
                else {
                    alert(`Something went wong: ${(_a = dta === null || dta === void 0 ? void 0 : dta.data) === null || _a === void 0 ? void 0 : _a.message}`);
                }
            }, err => {
                alert(err.message);
            });
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    formOptions() {
        return {
            scrollY: this.helpers.getPageHeight(),
            data: this.attempts,
            caption: `Submissions for Assignent #${this.activeAssignmentId}`,
            columns: [
                { title: 'ID', data: 'attempt_id' },
                { title: 'Name', data: 'attempt_name', className: 'editable',
                    render: (data, type, row) => this.helpers.stringify(data, 'teal')
                },
                { title: 'Submitor\'s ID', data: 'attempt_student_identifier', className: 'editable', sortable: false,
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                { title: 'App URL', data: 'attempt_main_path', className: 'editable', sortable: false,
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                {
                    title: 'score',
                    data: 'attempt_grade',
                    render: (data, type, row) => {
                        data = this.helper.json(data);
                        return this.helpers.stringify(`${data.percentage}%`, 'teal');
                    }
                },
                { title: 'Assignment', data: 'attempt_assignment',
                    render: (data, type, row) => this.helpers.stringify(`<code>#${row.attempt_assignment}</code> ${row.assignment_name} <sub>by ${row.assignment_owner_name}</sub>`, 'blue')
                },
                {
                    title: 'Grade Report',
                    sortable: false,
                    data: null,
                    render: (data, type, row) => {
                        return `
            <button class='btn btn-primary simpleReport' id="${row.attempt_id}"> Simple </button> 
            &nbsp;&nbsp;
            <button class='btn btn-danger complexReport' id="${row.attempt_id}"> Detailed </button>
          `;
                    }
                },
                {
                    title: 'Grade Individualy',
                    sortable: false,
                    data: null,
                    render: (data, type, row) => `<button class='btn btn-warning gradeAssignment' id="${row.attempt_id}"> Grade Attempt </button>`
                },
                {
                    title: 'Submitted',
                    data: 'attempt_submission_time', className: 'editable',
                    render: (data, type, row) => this.helpers.stringify(data, 'crimson')
                },
                {
                    title: 'Created', data: 'created_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'green')
                },
                {
                    title: 'Last Graded',
                    data: 'updated_at',
                    render: (data, type, row) => this.helpers.dateify(data, undefined)
                },
            ],
            dom: 'Bfrtip',
            select: true,
            responsive: true,
            altEditor: true,
            buttons: [
                'excel',
                'pdf',
                {
                    extend: 'selected',
                    text: 'Edit',
                    name: 'edit' // do not change name
                },
                // {
                //     extend: 'selected', // Bind to Selected row
                //     text: 'Delete',
                //     name: 'delete'      // do not change name
                // },
                {
                    text: 'Refresh',
                    action: (e, dt, node, config) => {
                        this.fetchAssignmentAttempts();
                    }
                }
            ],
            onAddRow: function (datatable, rowdata, success, error) {
                $.ajax({
                    // a tipycal url would be / with type='PUT'
                    url: `/`,
                    type: 'GET',
                    data: rowdata,
                    success: success,
                    error: error
                });
            },
            onDeleteRow: function (datatable, rowdata, success, error) {
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
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting the textArea from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting Files from the modal
                var numFilesQueued = 0;
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function (i) {
                    if ($(this).prop('files')[0]) {
                        ++numFilesQueued;
                        that.getBase64($(this).prop('files')[0], function (filecontent) {
                            rowDataArray[$(this).attr('id')] = filecontent;
                            --numFilesQueued;
                        });
                    }
                });
                // Getting the checkbox from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = i; // this?.checked;
                });
                const { attempt_id, attempt_name, attempt_student_identifier, attempt_main_path, attempt_submission_time, attempt_grading_time, attempt_grade_breakdown, attempt_grade_complete, attempt_assignment, updated_at } = rowDataArray;
                this.http.postLocal({
                    table: 'attempt',
                    command: 'update',
                    attempt_id,
                    attempt_name,
                    attempt_student_identifier,
                    attempt_main_path,
                    attempt_submission_time,
                    attempt_grading_time,
                    attempt_grade_breakdown,
                    attempt_grade_complete,
                    attempt_assignment,
                    updated_at
                }).subscribe((d) => {
                    if (d.response == 200)
                        this.fetchAssignmentAttempts();
                    console.log(`Assignment Submission Data update attempted!\nProof:`);
                    console.dir(d);
                }, err => {
                    console.error();
                }, () => {
                    $('.modal,.modal-backdrop').hide();
                });
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
    fetchAssignmentAttempts() {
        this.http.getAttempts(null, this.activeAssignmentId).subscribe((d) => {
            if (d.response == 200) {
                // console.dir(d.data.message);
                this.attemptsUpdater.resetAttempts(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    ngOnDestroy() {
        this.attemptsSubscription.unsubscribe();
    }
}
AssignmentBrowserAttemptsComponent.ɵfac = function AssignmentBrowserAttemptsComponent_Factory(t) { return new (t || AssignmentBrowserAttemptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__["AttemptStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AssignmentBrowserAttemptsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentBrowserAttemptsComponent, selectors: [["app-assignment-browser-attempts"]], viewQuery: function AssignmentBrowserAttemptsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "display", "table", "table-responsive", "table-sm", "nowrap", "col-12", 2, "width", "100%"], ["assignmentBrowseAttempts", ""]], template: function AssignmentBrowserAttemptsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Viewing Assignent #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Attempts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeAssignmentId);
    } }, styles: [".bg-gray[_ngcontent-%COMP%] {\n    \n}\n\n.sub[_ngcontent-%COMP%] {\n    font-style: italic !important;\n}\n\n.code[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: small !important;\n}\n\n.uppercase[_ngcontent-%COMP%] {\n    text-transform: uppercase !important;\n}\n\n.u[_ngcontent-%COMP%] {\n    text-decoration: underline !important;\n}\n\n.uu[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    text-transform: uppercase;\n}\n\n.small-text[_ngcontent-%COMP%] {\n    font-size: small;\n}\n\n.mid-text[_ngcontent-%COMP%] {\n    font-size: medium;\n}\n\n.bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.no-underline[_ngcontent-%COMP%] {\n    text-decoration: none !important;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-decoration: underline;\n    font-size: small;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.col-main-header[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: x-large;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.grading-criterion[_ngcontent-%COMP%] {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: normal !important;\n    background-color: beige;\n}\n\n.myfont[_ngcontent-%COMP%] {\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n.computerfont[_ngcontent-%COMP%] {\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.col-bordered[_ngcontent-%COMP%] {\n    font-family: monospace;\n    text-align: right !important;\n    border: 0.5px solid !important;\n    background-color: lightgray;\n    color: black !important;\n}\n\n.col-bordered-left[_ngcontent-%COMP%] {\n    font-family: monospace;\n    border: 0.5px solid !important;\n    background-color: white;\n    color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1icm93c2VyL2Fzc2lnbm1lbnQtYnJvd3Nlci1hdHRlbXB0cy9hc3NpZ25tZW50LWJyb3dzZXItYXR0ZW1wdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO21CQUNlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQix3SUFBd0k7QUFDNUk7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdJQUF3STtBQUM1STs7QUFFQTtJQUNJLDZFQUE2RTtJQUM3RSw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0VBQXNFO0FBQzFFOztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtYnJvd3Nlci9hc3NpZ25tZW50LWJyb3dzZXItYXR0ZW1wdHMvYXNzaWdubWVudC1icm93c2VyLWF0dGVtcHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZ3JheSB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7ICovXG59XG5cbi5zdWIge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xufVxuXG4uY29kZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xufVxuXG4udXBwZXJjYXNlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi51IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4udXUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWlkLXRleHQge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uby11bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuLmNvbC1tYWluLWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5ncmFkaW5nLWNyaXRlcmlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG4ubXlmb250IHtcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xufVxuXG4uY29tcHV0ZXJmb250IHtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY29sLWJvcmRlcmVkIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmNvbC1ib3JkZXJlZC1sZWZ0IHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentBrowserAttemptsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-browser-attempts',
                templateUrl: './assignment-browser-attempts.component.html',
                styleUrls: ['./assignment-browser-attempts.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__["AttemptStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['assignmentBrowseAttempts', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/assignments/assignment-browser/assignment-browser-placeholder/assignment-browser-placeholder.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AssignmentBrowserPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentBrowserPlaceholderComponent", function() { return AssignmentBrowserPlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stor/assignments.stor.service */ "./src/app/services/stor/assignments.stor.service.ts");







const _c0 = ["assignmentBrowser"];
class AssignmentBrowserPlaceholderComponent {
    constructor(http, helpers, router, ngZone, assignmentsUpdater) {
        // (window as any).pdfMake.vfs = (window as any).pdfFonts.pdfMake.vfs;
        // console.dir(window)
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.assignmentsUpdater = assignmentsUpdater;
    }
    ngOnInit() {
        //  this.http.countAllRecords().then(console.dir)
        this.initializeDataTable();
        this.assignmentsSubscription = this.assignmentsUpdater.assignmentsUpdated.subscribe((assignments) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.assignments = assignments;
            this.dataTable.DataTable().destroy();
            ;
            this.initializeDataTable();
        });
        this.fetchAssignments();
        $(document).on('click', '.openAssignment', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            let assignmentData = JSON.parse(($(d.currentTarget).attr('data') || '{}').replace(/'/ig, '"').replace(/&apos;/ig, "'"));
            this.navigate([`/assignments/browse/rubric/${identifier}`], { state: assignmentData });
            // /assignments/browse/rubric/${identifier}
        });
        $(document).on('click', '.openAssignmentSubmissions', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            let assignmentData = JSON.parse(($(d.currentTarget).attr('data') || '{}').replace(/'/ig, '"').replace(/&apos;/ig, "'"));
            this.navigate([`/assignments/browse/attempts/${identifier}`], { state: assignmentData });
            // /assignments/browse/rubric/${identifier}
        });
        $(document).on('click', '.openAttempts', (d) => {
            d.stopPropagation();
            let assignmentData = JSON.parse(($(d.currentTarget).attr('data') || '{}').replace(/'/ig, '"').replace(/&apos;/ig, "'"));
            this.navigate([`/assignments/browse/attempts/${assignmentData.assignment_id}`], { state: assignmentData });
            // /assignments/browse/rubric/${identifier}
        });
        $(document).on('click', '.gradeAssignment', (d) => {
            d.stopPropagation();
            alert(`Attempting to grade assignments`);
            let assignmentData = JSON.parse(($(d.currentTarget).attr('data') || '{}').replace(/'/ig, '"').replace(/&apos;/ig, "'"));
            this.http.doGrading({ assignment_id: assignmentData.assignment_id }).subscribe((dta) => {
                var _a;
                console.log(`Grading invoked for the assignment #${assignmentData.assignment_id}`);
                console.log(`Assignment Grading Invokation response`, dta);
                if (dta.response == 200) {
                    alert(dta.data.message || `Assignment grading invoked`);
                }
                else {
                    alert(`Something went wong: ${(_a = dta === null || dta === void 0 ? void 0 : dta.data) === null || _a === void 0 ? void 0 : _a.message}`);
                }
            }, err => {
                alert(err.message);
            });
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    formOptions() {
        return {
            scrollY: this.helpers.getPageHeight(),
            data: this.assignments,
            columns: [
                { title: 'ID', data: 'assignment_id' },
                { title: 'Name', data: 'assignment_name', className: 'editable',
                    render: (data, type, row) => this.helpers.stringify(data, 'teal')
                },
                { title: 'Summary', data: 'assignment_summary', className: 'editable', sortable: false,
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                {
                    title: 'Grade All',
                    sortable: false,
                    data: null,
                    render: (data, type, row) => `<button class='btn btn-success gradeAssignment' data="${this.helpers.str(row).replace(/'/ig, '&apos;').replace(/"/ig, "'")}"> Grade All Attempts </button>`
                },
                {
                    title: 'Due',
                    data: 'assignment_due', className: 'editable',
                    render: (data, type, row) => this.helpers.dateify(data, 'crimson')
                },
                {
                    title: 'Created', data: 'assignment_created',
                    render: (data, type, row) => this.helpers.dateify(data, 'green')
                },
                {
                    title: 'Last Modified',
                    data: 'assignment_last_modified',
                    render: (data, type, row) => this.helpers.dateify(data, undefined)
                },
                {
                    title: '',
                    sortable: false,
                    data: null,
                    render: (data, type, row) => `<button class='btn btn-primary openAssignment' id="${row.assignment_id}" data="${this.helpers.str(row).replace(/'/ig, '&apos;').replace(/"/ig, "'")}"> View Rubric </button>`
                },
                {
                    title: '',
                    sortable: false,
                    data: null,
                    render: (data, type, row) => `<button class='btn btn-primary openAssignmentSubmissions' id="${row.assignment_id}" data="${this.helpers.str(row).replace(/'/ig, '&apos;').replace(/"/ig, "'")}"> View Assignment Submissions </button>`
                },
                { title: 'Notes', data: 'assignment_notes', className: 'editable', sortable: false,
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                { title: 'Owner', data: 'assignment_owner',
                    render: (data, type, row) => this.helpers.stringify(row.assignment_owner_name, 'blue')
                },
            ],
            dom: 'Bfrtip',
            select: true,
            responsive: true,
            altEditor: true,
            buttons: [
                'excel',
                'pdf',
                {
                    extend: 'selected',
                    text: 'Edit',
                    name: 'edit' // do not change name
                },
                // {
                //     extend: 'selected', // Bind to Selected row
                //     text: 'Delete',
                //     name: 'delete'      // do not change name
                // },
                {
                    text: 'Refresh',
                    action: (e, dt, node, config) => {
                        this.fetchAssignments();
                    }
                }
            ],
            onAddRow: function (datatable, rowdata, success, error) {
                $.ajax({
                    // a tipycal url would be / with type='PUT'
                    url: `/`,
                    type: 'GET',
                    data: rowdata,
                    success: success,
                    error: error
                });
            },
            onDeleteRow: function (datatable, rowdata, success, error) {
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
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting the textArea from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting Files from the modal
                var numFilesQueued = 0;
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function (i) {
                    if ($(this).prop('files')[0]) {
                        ++numFilesQueued;
                        that.getBase64($(this).prop('files')[0], function (filecontent) {
                            rowDataArray[$(this).attr('id')] = filecontent;
                            --numFilesQueued;
                        });
                    }
                });
                // Getting the checkbox from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = i; //this?.checked;
                });
                const { assignment_id, assignment_name, assignment_owner, assignment_due, assignment_summary, assignment_notes, assignment_created, assignment_last_modified, } = rowDataArray;
                this.http.postLocal({
                    table: 'assignment',
                    command: 'update',
                    assignment_id,
                    assignment_name,
                    assignment_owner,
                    assignment_due,
                    assignment_summary,
                    assignment_notes,
                    assignment_created,
                    assignment_last_modified,
                }).subscribe((d) => {
                    if (d.response == 200)
                        this.fetchAssignments();
                    console.log(`Assignment Data update attempted!\nProof:`);
                    console.dir(d);
                }, err => {
                    console.error();
                }, () => {
                    $('.modal,.modal-backdrop').hide();
                });
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
    fetchAssignments() {
        this.http.getAssignments().subscribe((d) => {
            if (d.response == 200) {
                // console.dir(d.data.message);
                this.assignmentsUpdater.resetAssignments(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    ngOnDestroy() {
        this.assignmentsSubscription.unsubscribe();
    }
}
AssignmentBrowserPlaceholderComponent.ɵfac = function AssignmentBrowserPlaceholderComponent_Factory(t) { return new (t || AssignmentBrowserPlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsStoreService"])); };
AssignmentBrowserPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentBrowserPlaceholderComponent, selectors: [["app-assignment-browser-placeholder"]], viewQuery: function AssignmentBrowserPlaceholderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "h4", "mb-4", "text-center"], [1, "display", "table", "table-responsive", "table-sm", "nowrap", "col-12", 2, "width", "100%"], ["assignmentBrowser", ""]], template: function AssignmentBrowserPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Available Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 1, 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtYnJvd3Nlci9hc3NpZ25tZW50LWJyb3dzZXItcGxhY2Vob2xkZXIvYXNzaWdubWVudC1icm93c2VyLXBsYWNlaG9sZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentBrowserPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-browser-placeholder',
                templateUrl: './assignment-browser-placeholder.component.html',
                styleUrls: ['./assignment-browser-placeholder.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsStoreService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['assignmentBrowser', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/assignments/assignment-browser/assignment-browser-rubric/assignment-browser-rubric.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AssignmentBrowserRubricComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentBrowserRubricComponent", function() { return AssignmentBrowserRubricComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _services_stor_assignment_stor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/stor/assignment.stor.service */ "./src/app/services/stor/assignment.stor.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AssignmentBrowserRubricComponent_div_0_div_3_hr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function AssignmentBrowserRubricComponent_div_0_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SUMMARY:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r5.activeAssignment == null ? null : ctx_r5.activeAssignment.assignment_summary, " ");
} }
function AssignmentBrowserRubricComponent_div_0_div_3_hr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function AssignmentBrowserRubricComponent_div_0_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DESCRIPTION:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r7.activeAssignment == null ? null : ctx_r7.activeAssignment.assignment_notes, " ");
} }
function AssignmentBrowserRubricComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "sub", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Assignment Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AssignmentBrowserRubricComponent_div_0_div_3_hr_20_Template, 1, 0, "hr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AssignmentBrowserRubricComponent_div_0_div_3_div_21_Template, 6, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AssignmentBrowserRubricComponent_div_0_div_3_hr_22_Template, 1, 0, "hr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AssignmentBrowserRubricComponent_div_0_div_3_div_23_Template, 6, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("( ", ctx_r2.helper.plainDateify(ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_created), " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.helper.plainDateify(ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_due), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeAssignment.assignment_summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeAssignment == null ? null : ctx_r2.activeAssignment.assignment_notes);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p");
} }
function AssignmentBrowserRubricComponent_div_0_div_8_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "EXPECTED STATIC DATA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rule_r8 == null ? null : rule_r8.rule_expected_data, " ");
} }
function AssignmentBrowserRubricComponent_div_0_div_8_hr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function AssignmentBrowserRubricComponent_div_0_div_8_div_41_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_header_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_header_r21 == null ? null : rule_header_r21.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_header_r21 == null ? null : rule_header_r21.value);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PROVIDED HEADERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AssignmentBrowserRubricComponent_div_0_div_8_div_41_tr_10_Template, 5, 2, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.helper.json(rule_r8 == null ? null : rule_r8.rule_headers));
} }
function AssignmentBrowserRubricComponent_div_0_div_8_div_42_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_parameter_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_parameter_r25 == null ? null : rule_parameter_r25.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_parameter_r25 == null ? null : rule_parameter_r25.value);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "PROVIDED PARAMETERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AssignmentBrowserRubricComponent_div_0_div_8_div_42_tr_11_Template, 5, 2, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.helper.json(rule_r8 == null ? null : rule_r8.rule_parameters));
} }
function AssignmentBrowserRubricComponent_div_0_div_8_tr_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_path_match_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_path_match_r28 == null ? null : rule_path_match_r28.alternative);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_path_match_r28 == null ? null : rule_path_match_r28.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_path_match_r28 == null ? null : rule_path_match_r28.match == null ? null : rule_path_match_r28.match.no_match) || 0);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_status_code_match_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_status_code_match_r29 == null ? null : rule_status_code_match_r29.alternative);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_status_code_match_r29 == null ? null : rule_status_code_match_r29.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_status_code_match_r29 == null ? null : rule_status_code_match_r29.match == null ? null : rule_status_code_match_r29.match.no_match) || 0);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_tr_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_verb_match_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_verb_match_r30 == null ? null : rule_verb_match_r30.alternative);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_verb_match_r30 == null ? null : rule_verb_match_r30.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_verb_match_r30 == null ? null : rule_verb_match_r30.match == null ? null : rule_verb_match_r30.match.no_match) || 0);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_mime_type_match_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_mime_type_match_r31 == null ? null : rule_mime_type_match_r31.alternative);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_mime_type_match_r31 == null ? null : rule_mime_type_match_r31.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_mime_type_match_r31 == null ? null : rule_mime_type_match_r31.match == null ? null : rule_mime_type_match_r31.match.no_match) || 0);
} }
function AssignmentBrowserRubricComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " METHOD:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "PATH:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "DATA TYPE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " STATUS CODE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AssignmentBrowserRubricComponent_div_0_div_8_p_37_Template, 1, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AssignmentBrowserRubricComponent_div_0_div_8_div_38_Template, 7, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AssignmentBrowserRubricComponent_div_0_div_8_hr_39_Template, 1, 0, "hr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AssignmentBrowserRubricComponent_div_0_div_8_div_41_Template, 11, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AssignmentBrowserRubricComponent_div_0_div_8_div_42_Template, 12, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "PATH MATCHING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "path");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "MATCHED MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "NO MATCH MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AssignmentBrowserRubricComponent_div_0_div_8_tr_65_Template, 7, 3, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "STATUS CODE MATCHING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "CODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "MATCHED MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "NO MATCH MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AssignmentBrowserRubricComponent_div_0_div_8_tr_85_Template, 7, 3, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "VERB MATCHING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "VERB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "MATCHED MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "NO MATCH MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, AssignmentBrowserRubricComponent_div_0_div_8_tr_107_Template, 7, 3, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "MIME TYPE MATCHING");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "MIME TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "MATCHED MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "NO MATCH MARKS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, AssignmentBrowserRubricComponent_div_0_div_8_tr_127_Template, 7, 3, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r8 = ctx.$implicit;
    const idx_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", idx_r9 + 1, ". ", rule_r8.rule_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rule_r8.rule_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0 ", rule_r8 == null ? null : rule_r8.rule_description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("color:", ctx_r3.helper.colorize(rule_r8 == null ? null : rule_r8.rule_method), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rule_r8 == null ? null : rule_r8.rule_method, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rule_r8 == null ? null : rule_r8.rule_path, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rule_r8 == null ? null : rule_r8.rule_expected_data_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rule_r8 == null ? null : rule_r8.rule_expected_status_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", rule_r8 == null ? null : rule_r8.rule_expected_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", rule_r8 == null ? null : rule_r8.rule_expected_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (rule_r8 == null ? null : rule_r8.rule_headers) || (rule_r8 == null ? null : rule_r8.rule_parameters));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", rule_r8 == null ? null : rule_r8.rule_headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", rule_r8 == null ? null : rule_r8.rule_parameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8.rule_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.path == null ? null : rule_r8.rule_grading.path.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.path == null ? null : rule_r8.rule_grading.path.match == null ? null : rule_r8.rule_grading.path.match.no_match) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.path == null ? null : rule_r8.rule_grading.path.matches);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_expected_status_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.status_code == null ? null : rule_r8.rule_grading.status_code.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.status_code == null ? null : rule_r8.rule_grading.status_code.match == null ? null : rule_r8.rule_grading.status_code.match.no_match) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.status_code == null ? null : rule_r8.rule_grading.status_code.matches);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.verb == null ? null : rule_r8.rule_grading.verb.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.verb == null ? null : rule_r8.rule_grading.verb.match == null ? null : rule_r8.rule_grading.verb.match.no_match) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.verb == null ? null : rule_r8.rule_grading.verb.matches);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_expected_data_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.mime_type == null ? null : rule_r8.rule_grading.mime_type.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.mime_type == null ? null : rule_r8.rule_grading.mime_type.match == null ? null : rule_r8.rule_grading.mime_type.match.no_match) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", rule_r8 == null ? null : rule_r8.rule_grading == null ? null : rule_r8.rule_grading.mime_type == null ? null : rule_r8.rule_grading.mime_type.matches);
} }
function AssignmentBrowserRubricComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssignmentBrowserRubricComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.helper.printPDF("printable", (ctx_r32.activeAssignment == null ? null : ctx_r32.activeAssignment.assignment_name) + " by " + (ctx_r32.activeAssignment == null ? null : ctx_r32.activeAssignment.assignment_owner_name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "DOWNLOAD PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AssignmentBrowserRubricComponent_div_0_div_3_Template, 24, 8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " GRADING CRITERIA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AssignmentBrowserRubricComponent_div_0_div_8_Template, 128, 32, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeAssignment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.activeAssignment.routes);
} }
function AssignmentBrowserRubricComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " ... Loading assignment rubric\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AssignmentBrowserRubricComponent {
    constructor(ngZone, router, activatedRoute, http, helpers, assignmentUpdater) {
        var _a, _b;
        this.ngZone = ngZone;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.helpers = helpers;
        this.assignmentUpdater = assignmentUpdater;
        this.helper = this.helpers;
        this.nav = this.router.getCurrentNavigation();
        this.activeAssignment = (_b = (_a = this === null || this === void 0 ? void 0 : this.nav) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    }
    navigate(commands) {
        this.ngZone.run(() => this.router.navigate(commands)).then();
    }
    ngOnInit() {
        var _a, _b, _c;
        this.activeAssignmentId = this.activatedRoute.snapshot.paramMap.get('id');
        //@ Watch for recipe changes
        this.assignmentSubscription = this.assignmentUpdater.assignmentUpdated.subscribe((assignments) => {
            // console.log(`Available Assignments`,assignments)
            this.activeAssignment = assignments.filter(asg => asg.assignment_id == this.activeAssignmentId)[0];
        });
        try {
            // if(!this?.nav?.extras?.state )
            if (!((_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.assignment_id) || !((_c = (_b = this === null || this === void 0 ? void 0 : this.nav) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.state)) {
                this.fetchAssignmentById(this.activatedRoute.snapshot.paramMap.get("id"))
                    .then(assignmentdata => {
                    assignmentdata.routes = assignmentdata.routes.map(rd => {
                        rd.rule_grading = this.helper.json(rd.rule_grading);
                        // rd.rule_grading.path = this.helper.json(rd.rule_grading.path);
                        // rd.rule_grading.mime_type = this.helper.json(rd.rule_grading.mime_type);
                        // rd.rule_grading.status_code = this.helper.json(rd.rule_grading.status_code);
                        // rd.rule_grading.verb = this.helper.json(rd.rule_grading.verb);
                        return rd;
                    });
                    this.assignmentUpdater.addAssignment(assignmentdata);
                    // this.activeAssignment = assignmentdata;
                })
                    .catch(e => {
                    this.router.navigateByUrl(`/assignments/browse`);
                });
            }
            else //if(!nav.extras.state.assignment_id)
             {
                this.assignmentUpdater.addAssignment((this.nav.extras.state));
                // console.log(`... Fetching assignment rules for the assignment '${this.nav.extras.state.assignment_name}'`)
                //@ Fetch the relevant assignment route/rule data
                this.fetchAssignmentRoutes(this.activeAssignmentId)
                    .then((routeAssignmentData) => {
                    // console.log(`route assignment rule`, routeAssignmentData)
                    let assignmentRoutes = routeAssignmentData.owned.map(rd => {
                        rd.rule_grading = this.helpers.json(rd.rule_grading);
                        return rd;
                    });
                    // console.log(`\nAssignment routes === `, assignmentRoutes);
                    this.assignmentUpdater.registerRoutes(assignmentRoutes, this.activeAssignmentId);
                })
                    .catch(e => {
                    console.log(`\n\n@ Error at Fetch assignment routes`);
                    console.dir(e);
                    this.router.navigateByUrl(`/assignments/browse/rubric/`);
                });
            }
            // else
            // {
            //   throw new Error();
            // }
        }
        catch (error) {
            console.log(`@~117 fetch assignment failed`, error);
            this.router.navigateByUrl(`/assignments/browse`);
        }
    }
    fetchAssignmentById(assignmentId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => this.http.getAssignments(assignmentId).subscribe((d) => {
                if (d.response != 200 || !d.data.message[0])
                    reject();
                resolve(d.data.message[0]);
            }));
        });
    }
    fetchAssignmentRoutes(assignmentId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => this.http.getRules(assignmentId, true).subscribe((d) => {
                if (d.response != 200)
                    reject();
                resolve(d.data.message);
            }));
        });
    }
    browseAllAssignments() {
        this.navigate([`/assignments/browse`]);
    }
    ngOnDestroy() {
        this.activeAssignment = null;
        this.assignmentSubscription.unsubscribe();
    }
}
AssignmentBrowserRubricComponent.ɵfac = function AssignmentBrowserRubricComponent_Factory(t) { return new (t || AssignmentBrowserRubricComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stor_assignment_stor_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentStoreService"])); };
AssignmentBrowserRubricComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AssignmentBrowserRubricComponent, selectors: [["app-assignment-browser-rubric"]], decls: 2, vars: 2, consts: [["class", "container-fluid bg-gray padding", "id", "printable", 4, "ngIf"], [4, "ngIf"], ["id", "printable", 1, "container-fluid", "bg-gray", "padding"], ["id", "unprintable", 1, "btn", "btn-primary", 3, "click"], [1, "row"], [1, "col-12", "uppercase", "mid-text", "bold"], ["class", "row padding", 4, "ngFor", "ngForOf"], [1, "col-8", "col-main-header"], [1, "u"], [1, "code"], [1, "col-1"], [1, "col-3", "col-bordered"], [1, "col-9"], [1, "sub"], ["class", "row ", 4, "ngIf"], [1, "col-12"], [1, "subtitle"], [1, "sub", "myfont", "mid-text"], [1, "row", "padding"], [1, "container-fluid", "grading-criterion", "padding"], [1, "col-11", "uu"], [1, "col-1", "col-bordered"], [1, "uu", "small-text", "bold"], [1, "col-2", "col-bordered-left"], [1, "uu", "small-text"], [1, "computerfont", "mid-text", "bold"], [1, "col-4", "col-bordered-left"], [1, "computerfont", "mid-text", "bold", 2, "color", "blue"], [1, "computerfont", "mid-text", "bold", 2, "color", "purple"], [1, "uu", "small-text", "myfont"], [1, "computerfont", "mid-text", "bold", 2, "color", "crimson"], ["class", "row", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], [1, "col-6"], [1, "uu", "small-text", "bold", "uppercase"], [1, "table", "table-dark", "mid-text"], [1, "uppercase", "bold", "small-text"], [4, "ngFor", "ngForOf"], [1, "sub", "mid-text", "myfont"], [1, "i", "fa", "fa-spin"]], template: function AssignmentBrowserRubricComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AssignmentBrowserRubricComponent_div_0_Template, 9, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AssignmentBrowserRubricComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeAssignment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activeAssignment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".bg-gray[_ngcontent-%COMP%] {\n    \n}\n\n.sub[_ngcontent-%COMP%] {\n    font-style: italic !important;\n}\n\n.code[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: small !important;\n}\n\n.uppercase[_ngcontent-%COMP%] {\n    text-transform: uppercase !important;\n}\n\n.u[_ngcontent-%COMP%] {\n    text-decoration: underline !important;\n}\n\n.uu[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    text-transform: uppercase;\n}\n\n.small-text[_ngcontent-%COMP%] {\n    font-size: small;\n}\n\n.mid-text[_ngcontent-%COMP%] {\n    font-size: medium;\n}\n\n.bold[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\n.no-underline[_ngcontent-%COMP%] {\n    text-decoration: none !important;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-decoration: underline;\n    font-size: small;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.col-main-header[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: x-large;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.grading-criterion[_ngcontent-%COMP%] {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: normal !important;\n    background-color: beige;\n}\n\n.myfont[_ngcontent-%COMP%] {\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n.computerfont[_ngcontent-%COMP%] {\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.col-bordered[_ngcontent-%COMP%] {\n    font-family: monospace;\n    text-align: right !important;\n    border: 0.5px solid !important;\n    background-color: lightgray;\n    color: black !important;\n}\n\n.col-bordered-left[_ngcontent-%COMP%] {\n    font-family: monospace;\n    border: 0.5px solid !important;\n    background-color: white;\n    color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1icm93c2VyL2Fzc2lnbm1lbnQtYnJvd3Nlci1ydWJyaWMvYXNzaWdubWVudC1icm93c2VyLXJ1YnJpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7bUJBQ2U7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLHdJQUF3STtBQUM1STs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0lBQXdJO0FBQzVJOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzRUFBc0U7QUFDMUU7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1icm93c2VyL2Fzc2lnbm1lbnQtYnJvd3Nlci1ydWJyaWMvYXNzaWdubWVudC1icm93c2VyLXJ1YnJpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyYXkge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlOyAqL1xufVxuXG4uc3ViIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuLmNvZGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbn1cblxuLnVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4udSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnV1IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1pZC10ZXh0IHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubm8tdW5kZXJsaW5lIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbi5jb2wtbWFpbi1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uZ3JhZGluZy1jcml0ZXJpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuLm15Zm9udCB7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbn1cblxuLmNvbXB1dGVyZm9udCB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmNvbC1ib3JkZXJlZCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtYm9yZGVyZWQtbGVmdCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssignmentBrowserRubricComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-assignment-browser-rubric',
                templateUrl: './assignment-browser-rubric.component.html',
                styleUrls: ['./assignment-browser-rubric.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__["ByteGraderHelperService"] }, { type: _services_stor_assignment_stor_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-browser/assignment-browser.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/assignments/assignment-browser/assignment-browser.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssignmentBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentBrowserComponent", function() { return AssignmentBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AssignmentBrowserComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssignmentBrowserComponent.ɵfac = function AssignmentBrowserComponent_Factory(t) { return new (t || AssignmentBrowserComponent)(); };
AssignmentBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentBrowserComponent, selectors: [["app-assignment-browser"]], decls: 1, vars: 0, template: function AssignmentBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtYnJvd3Nlci9hc3NpZ25tZW50LWJyb3dzZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-browser',
                templateUrl: './assignment-browser.component.html',
                styleUrls: ['./assignment-browser.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/assignment-generator.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/assignment-generator.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssignmentGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentGeneratorComponent", function() { return AssignmentGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AssignmentGeneratorComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssignmentGeneratorComponent.ɵfac = function AssignmentGeneratorComponent_Factory(t) { return new (t || AssignmentGeneratorComponent)(); };
AssignmentGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentGeneratorComponent, selectors: [["app-assignment-generator"]], decls: 1, vars: 0, template: function AssignmentGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtZ2VuZXJhdG9yL2Fzc2lnbm1lbnQtZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-generator',
                templateUrl: './assignment-generator.component.html',
                styleUrls: ['./assignment-generator.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/method-manager/method-manager.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/method-manager/method-manager.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MethodManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodManagerComponent", function() { return MethodManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MethodManagerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MethodManagerComponent.ɵfac = function MethodManagerComponent_Factory(t) { return new (t || MethodManagerComponent)(); };
MethodManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MethodManagerComponent, selectors: [["app-method-manager"]], decls: 2, vars: 0, template: function MethodManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "method-manager works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtZ2VuZXJhdG9yL21ldGhvZC1tYW5hZ2VyL21ldGhvZC1tYW5hZ2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MethodManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-method-manager',
                templateUrl: './method-manager.component.html',
                styleUrls: ['./method-manager.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/new-assignment/new-assignment.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/new-assignment/new-assignment.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAssignmentComponent", function() { return NewAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function NewAssignmentComponent_datalist_20_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", owner_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](owner_r6.name);
} }
function NewAssignmentComponent_datalist_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datalist", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewAssignmentComponent_datalist_20_option_1_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function NewAssignmentComponent_datalist_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datalist", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Refresh to Load owners");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewAssignmentComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r7 = ctx.$implicit;
    const currentMonth_r8 = ctx.currentMonth;
    const selected_r9 = ctx.selected;
    const disabled_r10 = ctx.disabled;
    const focused_r11 = ctx.focused;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("weekend", ctx_r4.isWeekend(date_r7))("focused", focused_r11)("bg-primary", selected_r9)("hidden", date_r7.month !== currentMonth_r8)("text-muted", disabled_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r7.day, " ");
} }
class NewAssignmentComponent {
    constructor(http, calendar) {
        this.http = http;
        this.calendar = calendar;
        this.isDisabled = (date, current) => date.month !== current.month;
        this.isWeekend = (date) => this.calendar.getWeekday(date) >= 6;
    }
    ngOnInit() {
        this.http.getUsers().subscribe(d => {
            if (d.response != 200)
                alert(d.data.message);
            this.users = d.data.message;
        });
        this.newAssignmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            assignment_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            assignment_owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            assignment_summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            assignment_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            assignment_due: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    saveAssignment() {
        // console.dir(this.newAssignmentForm)
        this.http.addAssignment(this.newAssignmentForm.value).subscribe((d) => {
            if (d.response != 200) {
                alert(d.data.message);
            }
            else {
                this.newAssignmentForm.reset();
                alert("Assignment Saved!");
            }
        });
    }
}
NewAssignmentComponent.ɵfac = function NewAssignmentComponent_Factory(t) { return new (t || NewAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"])); };
NewAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewAssignmentComponent, selectors: [["app-new-assignment"]], decls: 48, vars: 7, consts: [[1, "card"], [1, "border", "border-light", "p-5", 3, "formGroup", "ngSubmit"], [1, "h4", "mb-4", "text-center"], ["id", "sortable-form", 1, "droptrue", "drop-list", "ui-sortable"], [1, "col-12", "row"], [1, "col-md-4"], ["data-template", "dTextInputTemp", "data-popover", "input", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "assignment_name"], [2, "color", "crimson"], ["type", "text", "id", "assignment_name", "formControlName", "assignment_name", "name", "assignment_name", "placeholder", "Assignment Name", 1, "form-control", "form-control-lg", "mb-4"], ["data-template", "dSelectTemp", "data-popover", "select", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "assignment_owner"], ["list", "assignment_owner", "formControlName", "assignment_owner", "name", "assignment_owner", "placeholder", "Assignment Owner", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["id", "assignment_owner", 4, "ngIf"], ["id", "rule_assignment", 4, "ngIf"], ["for", "assignment_due"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "formControlName", "assignment_due", "name", "assignment_due", "ngbDatepicker", "", 1, "form-control", "form-control-lg", 3, "dayTemplate", "markDisabled"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-secondary", "calendar", "fa", "fa-calendar", 3, "click"], ["customDay", ""], [1, "row", "col-12"], [1, "col-md-6"], ["data-template", "dTextareaTemp", "data-popover", "textarea", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "assignment_summary"], ["id", "assignment_summary", "formControlName", "assignment_summary", "name", "assignment_summary", "placeholder", "Summary", 1, "form-control", "mb-4"], ["for", "assignment_notes"], ["id", "assignment_notes", "formControlName", "assignment_notes", "name", "assignment_notes", "placeholder", "Notes", 1, "form-control", "mb-4"], ["type", "submit", 1, "btn", "btn-info", "btn-block", "my-4", "btn-lg", 3, "disabled"], ["id", "assignment_owner"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "rule_assignment"], ["value", "", "selected", ""], [1, "custom-day"]], template: function NewAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewAssignmentComponent_Template_form_ngSubmit_1_listener() { return ctx.saveAssignment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NEW ASSIGNMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewAssignmentComponent_datalist_20_Template, 2, 1, "datalist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NewAssignmentComponent_datalist_21_Template, 3, 0, "datalist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewAssignmentComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NewAssignmentComponent_ng_template_33_Template, 2, 11, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Add Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newAssignmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dayTemplate", _r3)("dayTemplate", _r3)("markDisabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.newAssignmentForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbInputDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".custom-day[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    border-radius: 0.25rem;\n    display: inline-block;\n    width: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%]:hover, .custom-day.focused[_ngcontent-%COMP%] {\n    background-color: #2a2a2a;\n    color: white !important;\n}\n\n.weekend[_ngcontent-%COMP%] {\n    background-color: yellowgreen;\n    \n    border-radius: 1rem;\n    color: white;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1nZW5lcmF0b3IvbmV3LWFzc2lnbm1lbnQvbmV3LWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1nZW5lcmF0b3IvbmV3LWFzc2lnbm1lbnQvbmV3LWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZGF5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXk6aG92ZXIsXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ud2Vla2VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewAssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-assignment',
                templateUrl: './new-assignment.component.html',
                styleUrls: ['./new-assignment.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/output-manager/output-manager.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/output-manager/output-manager.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OutputManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputManagerComponent", function() { return OutputManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






function OutputManagerComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r8.category);
} }
function OutputManagerComponent_mat_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const complete_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](complete_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](complete_r9.category);
} }
function OutputManagerComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const complete_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](complete_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](complete_r10.category);
} }
function OutputManagerComponent_mat_card_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const complete_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](complete_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](complete_r11.category);
} }
class OutputManagerComponent {
    constructor() {
        this.todos = [
            {
                name: 'Angular',
                category: 'Web Development'
            },
            {
                name: 'Flexbox',
                category: 'Web Development'
            },
            {
                name: 'iOS',
                category: 'App Development'
            },
            {
                name: 'Java',
                category: 'Software development'
            }
        ];
        this.completed = [
            {
                name: 'Android',
                category: 'Mobile Development'
            },
            {
                name: 'MongoDB',
                category: 'Databases'
            },
            {
                name: 'ARKit',
                category: 'Augmented Reality'
            },
            {
                name: 'React',
                category: 'Web Development'
            }
        ];
        this.compdsleteder = [];
    }
    ngOnInit() {
    }
    onDrop(evt, copy = false, noDrop = false) {
        if (evt.previousContainer == evt.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(evt.container.data, evt.previousIndex, evt.currentIndex);
        }
        else {
            if (noDrop)
                return;
            if (!copy) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(evt.previousContainer.data, evt.container.data, evt.previousIndex, evt.currentIndex);
            }
            else {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["copyArrayItem"])(evt.previousContainer.data, evt.container.data, evt.previousIndex, evt.currentIndex);
            }
        }
    }
}
OutputManagerComponent.ɵfac = function OutputManagerComponent_Factory(t) { return new (t || OutputManagerComponent)(); };
OutputManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputManagerComponent, selectors: [["app-output-manager"]], decls: 25, vars: 8, consts: [["cdkDropListGroup", "", 1, "list-container"], [1, "todo-container", "column-container", "col-lg-3", "col-sm-12"], ["cdkDropList", "", 1, "list", "bg-success", 3, "cdkDropListData", "cdkDropListDropped"], ["toDoList", "cdkDropList"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "done-container", "column-container", "col-lg-3", "col-sm-12"], ["cdkDropList", "", 1, "list", "bg-warning", 3, "cdkDropListData", "cdkDropListDropped"], ["doneList", "cdkDropList"], ["cdkDropList", "", 1, "list", "bg-danger", 3, "cdkDropListData", "cdkDropListDropped"], [1, "text-white"], ["cdkDropList", "", 1, "list", "bg-primary", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", ""]], template: function OutputManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function OutputManagerComponent_Template_div_cdkDropListDropped_2_listener($event) { return ctx.onDrop($event, false, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Owned Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OutputManagerComponent_mat_card_6_Template, 6, 2, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function OutputManagerComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.onDrop($event, false, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Public Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OutputManagerComponent_mat_card_12_Template, 6, 2, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function OutputManagerComponent_Template_div_cdkDropListDropped_14_listener($event) { return ctx.onDrop($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Independent Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OutputManagerComponent_mat_card_18_Template, 6, 2, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function OutputManagerComponent_Template_div_cdkDropListDropped_20_listener($event) { return ctx.onDrop($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Chained Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OutputManagerComponent_mat_card_24_Template, 6, 2, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.todos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.compdsleteder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.compdsleteder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.compdsleteder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.compdsleteder);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n    font-family: \"Andale Mono\", serif;\n    background-color: RGBA(46, 49, 49, 1);\n    color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.list-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    margin-top: 2em;\n}\n\n.column-container[_ngcontent-%COMP%] {\n    \n    display: inline-block;\n    vertical-align: top;\n    background-color: RGBA(255, 255, 255, 0.05);\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 1em;\n    cursor: pointer;\n}\n\n.list[_ngcontent-%COMP%] {\n    border: RGBA(46, 49, 49, .7) solid 1px;\n    border-radius: 2px;\n    overflow: auto;\n    max-height: 80vh !important;\n}\n\n.list-item[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1nZW5lcmF0b3Ivb3V0cHV0LW1hbmFnZXIvb3V0cHV0LW1hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7O0FBRWxFOzs7Ozs7SUFNSSxpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJOzs0QkFFd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUhBQXFIO0FBQ3pIOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ25tZW50cy9hc3NpZ25tZW50LWdlbmVyYXRvci9vdXRwdXQtbWFuYWdlci9vdXRwdXQtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzXCI7ICovXG5cbmJvZHksXG5odG1sLFxuLm1hdC1jYXJkLFxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1zdWJ0aXRsZSxcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQW5kYWxlIE1vbm9cIiwgc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCQSg0NiwgNDksIDQ5LCAxKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5jb2x1bW4tY29udGFpbmVyIHtcbiAgICAvKiB3aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAyNXB4IDI1cHggMDsgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0JBKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG5tYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdCB7XG4gICAgYm9yZGVyOiBSR0JBKDQ2LCA0OSwgNDksIC43KSBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDgwdmggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-output-manager',
                templateUrl: './output-manager.component.html',
                styleUrls: ['./output-manager.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/overview/overview.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/overview/overview.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_rules_stor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stor/rules.stor.service */ "./src/app/services/stor/rules.stor.service.ts");






const _c0 = ["ruleOverviewBrowser"];
class OverviewComponent {
    constructor(http, helpers, router, ngZone, rulesUpdater) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.rulesUpdater = rulesUpdater;
    }
    ngOnInit() {
        this.initializeDataTable();
        this.fetchRoutes();
        this.rulesSubscription = this.rulesUpdater.rulesUpdateWatcher.subscribe((rules) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.routes = rules;
            this.dataTable.DataTable().destroy();
            ;
            this.initializeDataTable();
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    formOptions() {
        return {
            scrollY: this.helpers.getPageHeight(),
            data: this.routes,
            columns: [
                { title: "Id", data: 'rule_id' },
                { title: "Method", data: 'rule_method',
                    render: (data, type, row) => this.helpers.stringify(data, this.helpers.colorize(data.toString()))
                },
                { title: "Path", data: 'rule_path',
                    render: (data, type, row) => this.helpers.stringify(data, 'blue')
                },
                { title: "Name", data: 'rule_name',
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                { title: "Description", data: 'rule_description',
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                {
                    title: "Assignment",
                    data: 'rule_assignment',
                    render: (data, type, row) => this.helpers.stringify(`${row.assignment_name} <sub>(${row.assignment_owner_name})</sub>`, 'teal')
                },
                // { title: "HTP Verb", data: 'rule_http_verb' },
                {
                    title: "Expected Status Code",
                    data: 'rule_expected_status_code',
                    render: (data, type, row) => this.helpers.stringify(data, 'blue')
                },
                {
                    title: "Expected Data Type",
                    data: 'rule_expected_data_type',
                    render: (data, type, row) => this.helpers.stringify(data, 'brown')
                },
                { title: "Expected Data", data: 'rule_expected_data',
                    render: (data, type, row) => this.helpers.jsonify(data)
                },
                { title: "Headers", data: 'rule_headers',
                    render: (data, type, row) => this.helpers.jsonify(data)
                },
                { title: "Body Parameters", data: 'rule_parameters',
                    render: (data, type, row) => this.helpers.jsonify(data)
                },
                { title: "Grading", data: 'rule_grading',
                    render: (data, type, row) => this.helpers.jsonify(data)
                },
                { title: "Created At", data: 'created_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'green')
                },
                { title: "Updated At", data: 'updated_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'orange')
                }
            ],
            dom: 'Bfrtip',
            select: true,
            responsive: true,
            altEditor: true,
            buttons: [
                'excel',
                'pdf',
                {
                    extend: 'selected',
                    text: 'Edit',
                    name: 'edit' // do not change name
                },
                // {
                //     extend: 'selected', // Bind to Selected row
                //     text: 'Delete',
                //     name: 'delete'      // do not change name
                // },
                {
                    text: 'Refresh',
                    action: (e, dt, node, config) => {
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
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting the textArea from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting Files from the modal
                var numFilesQueued = 0;
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function (i) {
                    if ($(this).prop('files')[0]) {
                        ++numFilesQueued;
                        that.getBase64($(this).prop('files')[0], function (filecontent) {
                            rowDataArray[$(this).attr('id')] = filecontent;
                            --numFilesQueued;
                        });
                    }
                });
                // Getting the checkbox from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = this.checked;
                });
                const { rule_id, rule_description, rule_expected_data, rule_expected_data_type, rule_expected_status_code, rule_http_verb, rule_method, rule_name, rule_path, } = rowDataArray;
                this.http.postLocal({
                    table: 'rule',
                    command: 'update',
                    rule_id,
                    rule_description,
                    rule_expected_data,
                    rule_expected_data_type,
                    rule_expected_status_code,
                    rule_http_verb,
                    rule_method,
                    rule_name,
                    rule_path,
                }).subscribe((d) => {
                    if (d.response == 200)
                        this.fetchRoutes();
                    console.log(`Assignment Rule/Route Data update attempted!\nProof:`);
                    console.dir(d);
                }, err => {
                    console.error();
                }, () => {
                    $('.modal,.modal-backdrop').hide();
                });
            }
        };
    }
    initializeDataTable() {
        this.dataTable = $(this.table.nativeElement);
        // console.dir(this.dataTable);
        this.dataTable.DataTable(this.formOptions());
    }
    fetchRoutes() {
        this.http.getRules().subscribe((d) => {
            if (d.response == 200) {
                this.rulesUpdater.resetRules(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    ngOnDestroy() {
        this.rulesSubscription.unsubscribe();
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_rules_stor_service__WEBPACK_IMPORTED_MODULE_4__["RulesStoreService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], viewQuery: function OverviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "h4", "mb-4", "text-center"], [1, "display", "table", "table-responsive", "table-sm", 2, "width", "100%"], ["ruleOverviewBrowser", ""]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Grading Rule Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 1, 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtZ2VuZXJhdG9yL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_rules_stor_service__WEBPACK_IMPORTED_MODULE_4__["RulesStoreService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ruleOverviewBrowser', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/path-manager/path-manager.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/path-manager/path-manager.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PathManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathManagerComponent", function() { return PathManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/stor/assignments.stor.service */ "./src/app/services/stor/assignments.stor.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");










const _c0 = ["ownedRules"];
const _c1 = ["publicRules"];
function PathManagerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You have not added any assignments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Please add one to continue. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CREATE ASSIGNMENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PathManagerComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathManagerComponent_span_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.resetChainingUI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.activeAssignment.assignment_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.activeAssignment.assignment_owner_name);
} }
const _c2 = function (a0) { return { "list-group-item-primary": a0 }; };
function PathManagerComponent_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const personal_assignment_r7 = ctx.$implicit;
    const idx_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", personal_assignment_r7.assignment_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, idx_r8 % 2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", personal_assignment_r7.assignment_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](personal_assignment_r7.assignment_owner_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due ", ctx_r6.helpers.plainDateify(personal_assignment_r7.assignment_due), "");
} }
function PathManagerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pick an Assignment to edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PathManagerComponent_div_2_li_6_Template, 11, 7, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.userAssignments);
} }
function PathManagerComponent_div_3_div_22_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ruleItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r18.rule_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r18.rule_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r18.rule_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r18.rule_path);
} }
function PathManagerComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PathManagerComponent_div_3_div_22_mat_card_1_Template, 11, 4, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.gradingRules.public);
} }
function PathManagerComponent_div_3_div_28_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ruleItem_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r20.rule_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r20.rule_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r20.rule_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r20.rule_path);
} }
function PathManagerComponent_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PathManagerComponent_div_3_div_28_mat_card_1_Template, 11, 4, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.gradingRules.owned);
} }
function PathManagerComponent_div_3_div_34_mat_card_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ruleItem_r22 = ctx_r25.$implicit;
    const idx_r23 = ctx_r25.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ruleItem_r22.rule_id, "-", idx_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Parents: ", ruleItem_r22.parent_rules.join(","), " ");
} }
function PathManagerComponent_div_3_div_34_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PathManagerComponent_div_3_div_34_mat_card_1_span_13_Template, 2, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ruleItem_r22 = ctx.$implicit;
    const idx_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", ruleItem_r22.rule_id, "-", idx_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r22.rule_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ruleItem_r22.rule_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r22.rule_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ruleItem_r22.rule_path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ruleItem_r22.parent_rules[0]);
} }
function PathManagerComponent_div_3_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PathManagerComponent_div_3_div_34_mat_card_1_Template, 14, 7, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.gradingSchema);
} }
function PathManagerComponent_div_3_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PathManagerComponent_div_3_div_40_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.saveGradingScheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SAVE GRADING SETUP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return [a0]; };
const _c4 = function (a0, a1, a2) { return [a0, a1, a2]; };
function PathManagerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Grading Rule Setup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "`Owned`");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " rules are those that are primarily tied to this assignment whereas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "`Public`");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " rules refer to those owned/tied by/to other assignments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function PathManagerComponent_div_3_Template_div_cdkDropListDropped_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onDrop($event, false, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PathManagerComponent_div_3_div_22_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function PathManagerComponent_div_3_Template_div_cdkDropListDropped_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onDrop($event, false, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PathManagerComponent_div_3_div_28_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function PathManagerComponent_div_3_Template_div_cdkDropListDropped_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onDrop($event, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Grading Definition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PathManagerComponent_div_3_div_34_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function PathManagerComponent_div_3_Template_div_cdkDropListDropped_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onDrop($event, true, true, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "TRASH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PathManagerComponent_div_3_div_40_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r3.gradingRules.public)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.gradingRules.public.length || 0, " Public Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.gradingRules.public[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r3.gradingRules.owned)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.gradingRules.owned.length || 0, " Owned Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.gradingRules.owned[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r3.gradingSchema)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](18, _c4, _r9, _r11, _r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.gradingSchema[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r3.ruleBin)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, _r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.gradingSchema[0]);
} }
class PathManagerComponent {
    constructor(http, helpers, router, ngZone, assignmentsUpdater) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.assignmentsUpdater = assignmentsUpdater;
        this.gradingSchema = [];
        this.ruleBin = [];
    }
    ngOnDestroy() {
        this.assignmentsSubscription.unsubscribe();
    }
    ngOnInit() {
        this.userProfile = this.helpers.getUserInfo();
        this.assignmentsSubscription = this.assignmentsUpdater.assignmentsUpdated.subscribe((assignments) => {
            this.assignments = assignments;
            this.userAssignments = assignments.filter(assignment => assignment.assignment_owner == this.userProfile.id);
        });
        this.fetchAssignments();
        $(document).on('click', '.assignmentPicker', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            this.ngZone.run(() => this.setActiveAssignment(this.userAssignments.filter(assgnmnt => assgnmnt.assignment_id == identifier)[0]));
        });
        $(document).on('dblclick', '.parentRuleList', (evt) => {
            evt.stopPropagation();
            const identifier = $(evt.currentTarget).attr('id');
            const idxs = identifier.split('-');
            const item_position = parseInt(idxs[1], 10);
            let removeParentRules = confirm(`Do you want to reset the dependencies for this grading rule?`);
            if (removeParentRules)
                this.ngZone.run(() => this.gradingSchema[item_position].parent_rules = []);
        });
        $(document).on('click', '.idParent', (d) => {
            d.stopPropagation();
            const identifier = $(d.currentTarget).attr('id');
            const idxs = identifier.split('-');
            const item_idx = parseInt(idxs[1], 10);
            const item_id = parseInt(idxs[0], 10);
            const default_id = this.gradingRules.ids[0];
            //@ Capture the parent rules
            const parent_rule = prompt(`Enter this Item's parent id. If multiple, separate by a comma`, `${default_id},`);
            if (!parent_rule)
                return;
            //@ Handle internal rule mapping
            this.ngZone.run(() => {
                parent_rule.split(',')
                    .map(a => parseInt(a, 10))
                    .filter(b => (!isNaN(b)) && (this.gradingRules.ids.indexOf(b) != -1) && (b != item_id))
                    .forEach(rule_id => {
                    //@ Add the parent rule dependency
                    this.gradingSchema[item_idx].parent_rules.push(rule_id);
                });
                // alert(`${identifier} clicked === ${item_idx}`);
                this.gradingSchema[item_idx].parent_rules = this.gradingSchema[item_idx].parent_rules.filter((a, idx) => (this.gradingSchema[item_idx].parent_rules.lastIndexOf(a) == idx));
            });
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    setActiveAssignment(assignment) {
        this.activeAssignment = assignment;
        if (!this.activeAssignment)
            return;
        this.fetchAssignmentRules(this.activeAssignment.assignment_id);
    }
    hasActiveAssignment() {
        return this.activeAssignment != undefined;
    }
    clearActiveAssignment() {
        this.activeAssignment = undefined;
    }
    stringify(data) {
        return this.helpers.str(data);
    }
    fetchAssignments() {
        this.http.getAssignments().subscribe((d) => {
            if (d.response == 200) {
                // console.dir(d.data.message);
                this.assignmentsUpdater.resetAssignments(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    fetchAssignmentRules(assignmentId) {
        this.http.getRules(assignmentId, true, true).subscribe((d) => {
            if (d.response == 200) {
                this.setGradingRules(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        });
    }
    onDrop(evt, copy = false, noDrop = false, bin = false) {
        if (evt.previousContainer == evt.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(evt.container.data, evt.previousIndex, evt.currentIndex);
        }
        else {
            if (noDrop) {
                if (bin) {
                    //@ remove the item from the array
                    evt.previousContainer.data.splice(evt.previousIndex, 1);
                }
                return;
            }
            if (!copy) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(evt.previousContainer.data, evt.container.data, evt.previousIndex, evt.currentIndex);
            }
            else {
                this.gradingSchema.splice(evt.currentIndex, 0, this.helpers.clone(evt.previousContainer.data[evt.previousIndex]));
                // copyArrayItem(evt.previousContainer.data,evt.container.data, evt.previousIndex, evt.currentIndex);
            }
        }
    }
    saveGradingScheme() {
        // let minimizedGradingScheme = [];
        // this.gradingSchema.forEach((ruleItem: Rule, idx) => {
        //   minimizedGradingScheme[idx] = {
        //     rule: ruleItem.rule_id,
        //     parents: ruleItem.parent_rules,
        //   };
        // });
        let sure = confirm(`Save the grading scheme for the assignment ${this.activeAssignment.assignment_name}?`);
        if (!sure)
            return;
        let rule_chaining = {
            chaining_type: 'explicit',
            chaining_assignment: this.activeAssignment.assignment_id,
            chaining_rules: this.gradingSchema,
        };
        this.http.addChaining(rule_chaining).subscribe((d) => {
            if (d.response == 200) {
                alert(`Grading rule chaining added for the assignment ${this.activeAssignment.assignment_name}.`);
                this.ngZone.run(() => this.resetChainingUI());
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        });
    }
    resetChainingUI() {
        this.ngZone.run(() => {
            this.setActiveAssignment(undefined);
            this.setGradingRules(undefined);
            this.gradingSchema = [];
            this.ruleBin = [];
        });
    }
    setGradingRules(bundledObj) {
        //@ don't waste time
        if (!bundledObj || !bundledObj.owned || !bundledObj.public || !bundledObj.ids) {
            this.gradingRules = bundledObj;
            return;
        }
        //@ setup the base object
        this.gradingRules = {
            owned: [],
            public: [],
            ids: [],
        };
        //@ convert to object
        let props = ["owned", "public", "ids"];
        props.forEach(prop => {
            this.gradingRules[prop] = (Array.isArray(bundledObj[prop]))
                ? bundledObj[prop]
                : Object.keys(bundledObj[prop]).map(vl => bundledObj[prop][vl]);
        });
    }
}
PathManagerComponent.ɵfac = function PathManagerComponent_Factory(t) { return new (t || PathManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_3__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsStoreService"])); };
PathManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PathManagerComponent, selectors: [["app-path-manager"]], viewQuery: function PathManagerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ownedRules = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.publicRules = _t.first);
    } }, decls: 4, vars: 4, consts: [["style", "text-align: center !important;", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [2, "text-align", "center !important"], ["routerLink", "/assignments/new", "routerLinkActive", "active", 1, "btn", "btn-block", "btn-success"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-times"], [1, "dropdown"], [1, "list-group"], ["class", "list-group-item assignmentPicker clickable", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], [1, "list-group-item", "assignmentPicker", "clickable", 3, "ngClass", "id"], [1, "pull-right"], [1, "text-sm", "text-bold", "bg-warning", "text-dark", "row"], [1, "list-container"], [1, "done-container", "column-container", "col-lg-3", "col-sm-12"], ["cdkDropList", "", 1, "list", "bg-warning", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["publicList", "cdkDropList"], [1, "todo-container", "column-container", "col-lg-3", "col-sm-12"], ["cdkDropList", "", 1, "list", "bg-success", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["ownedList", "cdkDropList"], ["cdkDropList", "", 1, "list", "bg-primary", 2, "min-height", "10vw !important", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["mappingList", "cdkDropList"], [1, "text-white"], ["cdkDropList", "", 1, "list", "bg-danger", 2, "min-height", "10vw !important", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["trashList", "cdkDropList"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [1, "idBox"], [1, "idParent", "float-right", "button", 3, "id"], ["class", "parentRuleList", 3, "id", 4, "ngIf"], [1, "parentRuleList", 3, "id"], [1, "btn", "btn-block", "btn-success", "padding", 3, "click"]], template: function PathManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PathManagerComponent_div_0_Template, 13, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PathManagerComponent_span_1_Template, 11, 2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PathManagerComponent_div_2_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PathManagerComponent_div_3_Template, 41, 24, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userAssignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasActiveAssignment());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userAssignments && !ctx.hasActiveAssignment());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gradingRules);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"]], styles: [".clickable[_ngcontent-%COMP%] {\n    transition-duration: .1s;\n    cursor: pointer;\n}\n\n.clickable[_ngcontent-%COMP%]:hover {\n    transition-duration: .1s;\n    background-color: #2D2D2D !important;\n    color: #ffffff !important;\n}\n\n\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n    font-family: \" American Typewriter \", serif;\n    background-color: RGBA(46, 49, 49, 1);\n    color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.list-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-around;\n    margin-top: 2em;\n}\n\n.column-container[_ngcontent-%COMP%] {\n    \n    display: inline-block;\n    vertical-align: top;\n    background-color: RGBA(255, 255, 255, 0.05);\n}\n\nmat-card[_ngcontent-%COMP%] {\n    min-height: 100px !important;\n    margin: 1em;\n    cursor: pointer;\n}\n\n.list[_ngcontent-%COMP%] {\n    border: RGBA(46, 49, 49, .7) solid 1px;\n    border-radius: 2px;\n    overflow: auto;\n    max-height: 70vh !important;\n}\n\n.list-item[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n    border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: dodgerblue;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n    font-size: small !important;\n    font-weight: bold !important;\n}\n\nspan.idBox[_ngcontent-%COMP%] {\n    padding: 0.01em !important;\n    margin: 0 .2em 0 0 !important;\n    border-radius: 20% !important;\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bold !important;\n    color: black !important;\n    font-size: large !important;\n    text-shadow: .5px 0.5px green !important;\n    background-color: #ffffff !important;\n    border: 1px solid;\n    border-color: red !important;\n}\n\nspan.idParent[_ngcontent-%COMP%] {\n    \n    padding: .01em !important;\n    background-color: #fff !important;\n    \n    color: green !important;\n    border-radius: 20% !important;\n    border: 1px solid;\n    border-color: purple !important;\n}\n\nspan.parentRuleList[_ngcontent-%COMP%] {\n    padding: .3em !important;\n    cursor: pointer !important;\n    background-color: white;\n    font-weight: bold;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: small !important;\n    color: #E10A0A !important;\n    border: 1px solid;\n    border-color: crimson !important;\n    border-radius: 10% !important;\n}\n\napp-alert-dialogue-confirm[_ngcontent-%COMP%] {\n    position: -webkit-sticky !important;\n    position: sticky !important;\n    z-index: 100 !important;\n    color: white !important;\n    background-color: #E10A0A !important;\n}\n\napp-alert-dialogue-confirm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    position: relative !important;\n    top: 30px !important;\n    left: -10px !important;\n    width: 150px !important;\n    height: 30px !important;\n    background: #942911 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1nZW5lcmF0b3IvcGF0aC1tYW5hZ2VyL3BhdGgtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3Qjs7QUFHQSxrRUFBa0U7O0FBRWxFOzs7Ozs7SUFNSSwyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJOzs0QkFFd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFIQUFxSDtBQUN6SDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDhDQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDhDQUE4QztJQUM5QywyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1nZW5lcmF0b3IvcGF0aC1tYW5hZ2VyL3BhdGgtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWNrYWJsZSB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDJEMkQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiOyAqL1xuXG5ib2R5LFxuaHRtbCxcbi5tYXQtY2FyZCxcbm1hdC1jYXJkLXRpdGxlLFxubWF0LWNhcmQtc3VidGl0bGUsXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIiBBbWVyaWNhbiBUeXBld3JpdGVyIFwiLCBzZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0JBKDQ2LCA0OSwgNDksIDEpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmNvbHVtbi1jb250YWluZXIge1xuICAgIC8qIHdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDI1cHggMjVweCAwOyAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQkEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpc3Qge1xuICAgIGJvcmRlcjogUkdCQSg0NiwgNDksIDQ5LCAuNykgc29saWQgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG5zcGFuLmlkQm94IHtcbiAgICBwYWRkaW5nOiAwLjAxZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgLjJlbSAwIDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAuNXB4IDAuNXB4IGdyZWVuICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4uaWRQYXJlbnQge1xuICAgIC8qIGZsb2F0OiByaWdodCAhaW1wb3J0YW50OyAqL1xuICAgIHBhZGRpbmc6IC4wMWVtICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAgIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ucGFyZW50UnVsZUxpc3Qge1xuICAgIHBhZGRpbmc6IC4zZW0gIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0UxMEEwQSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogY3JpbXNvbiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJSAhaW1wb3J0YW50O1xufVxuXG5hcHAtYWxlcnQtZGlhbG9ndWUtY29uZmlybSB7XG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMTBBMEEgIWltcG9ydGFudDtcbn1cblxuYXBwLWFsZXJ0LWRpYWxvZ3VlLWNvbmZpcm0+ZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM5NDI5MTEgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-path-manager',
                templateUrl: './path-manager.component.html',
                styleUrls: ['./path-manager.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_3__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsStoreService"] }]; }, { ownedRules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ownedRules', { static: true }]
        }], publicRules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['publicRules', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/assignments/assignment-generator/route-manager/route-manager.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/assignments/assignment-generator/route-manager/route-manager.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RouteManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteManagerComponent", function() { return RouteManagerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_static_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/static-data.service */ "./src/app/services/static-data.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function RouteManagerComponent_datalist_21_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asgnt_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", asgnt_r15.assignment_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](asgnt_r15.assignment_name);
} }
function RouteManagerComponent_datalist_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RouteManagerComponent_datalist_21_option_1_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.assignments);
} }
function RouteManagerComponent_datalist_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Refresh to Load Assignments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_datalist_30_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const statCode_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", statCode_r17.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](statCode_r17.description);
} }
function RouteManagerComponent_datalist_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RouteManagerComponent_datalist_30_option_1_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.statusCodes);
} }
function RouteManagerComponent_datalist_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Refresh to Load Status Codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_datalist_64_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const typ_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", typ_r19.mime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](typ_r19.description);
} }
function RouteManagerComponent_datalist_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RouteManagerComponent_datalist_64_option_1_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.mimeTypes);
} }
function RouteManagerComponent_datalist_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Refresh to Load Response Formats");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_div_88_datalist_9_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hdr_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hdr_r25);
} }
function RouteManagerComponent_div_88_datalist_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RouteManagerComponent_div_88_datalist_9_option_1_Template, 2, 1, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.headers);
} }
function RouteManagerComponent_div_88_datalist_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Refresh to Load Header Types Formats");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RouteManagerComponent_div_88_datalist_9_Template, 2, 1, "datalist", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RouteManagerComponent_div_88_datalist_10_Template, 3, 0, "datalist", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_div_88_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const idx_r21 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.removeValuePair("headers", idx_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r21 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", idx_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.headers);
} }
function RouteManagerComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_div_98_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const pidx_r29 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.removeValuePair("parameters", pidx_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pidx_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", pidx_r29);
} }
function RouteManagerComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Alternate Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "No Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_div_127_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const pathidx_r33 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.removeGradingCriteria("path", pathidx_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pathidx_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formGroupName", pathidx_r33);
} }
function RouteManagerComponent_div_151_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Alternate verb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "POST");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "PUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "OPTIONS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "No Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_div_151_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const verbidx_r37 = ctx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.removeGradingCriteria("verb", verbidx_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verbidx_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formGroupName", verbidx_r37);
} }
function RouteManagerComponent_div_175_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Alternate status_code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "No Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_div_175_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const status_codeidx_r41 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.removeGradingCriteria("status_code", status_codeidx_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_codeidx_r41 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formGroupName", status_codeidx_r41);
} }
function RouteManagerComponent_div_199_datalist_9_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const typ_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", typ_r49.mime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](typ_r49.description);
} }
function RouteManagerComponent_div_199_datalist_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RouteManagerComponent_div_199_datalist_9_option_1_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.mimeTypes);
} }
function RouteManagerComponent_div_199_datalist_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datalist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Refresh to Load Response Formats");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RouteManagerComponent_div_199_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Alternate mime_type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RouteManagerComponent_div_199_datalist_9_Template, 2, 1, "datalist", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RouteManagerComponent_div_199_datalist_10_Template, 3, 0, "datalist", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "sup", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "No Match Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_div_199_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const mime_typeidx_r45 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.removeGradingCriteria("mime_type", mime_typeidx_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mime_typeidx_r45 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formGroupName", mime_typeidx_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.mimeTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.mimeTypes);
} }
class RouteManagerComponent {
    constructor(staticData, http, calendar) {
        this.staticData = staticData;
        this.http = http;
        this.calendar = calendar;
        this.isDisabled = (date, current) => date.month !== current.month;
        this.isWeekend = (date) => this.calendar.getWeekday(date) >= 6;
        this.available_positions = ["headers", "parameters"];
        this.available_match_positions = {
            "verb": 'rule_grading.verb.matches',
            "path": 'rule_grading.path.matches',
            "status_code": 'rule_grading.status_code.matches',
            "mime_type": 'rule_grading.mime_type.matches'
        };
    }
    keyValueFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
    }
    gradingSubFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            alternative: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            match: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](100),
            no_match: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0)
        });
    }
    gradingSubFormArray() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([
        // this.gradingSubFormGroup()
        ]);
    }
    gradingForm() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](100, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            match: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](100, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            no_match: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0),
            matches: this.gradingSubFormArray(),
        });
    }
    ngOnInit() {
        //@ Load the list of available mime types
        this.mimeTypes = this.staticData.MimeTypes();
        this.headers = this.staticData.Headers();
        this.statusCodes = this.staticData.StatusCodes();
        //@ Fetch and load a list of assignments
        this.http.getAssignments().subscribe(d => {
            if (d.response != 200)
                alert(d.data.message);
            this.assignments = d.data.message;
        });
        //@ Define the reactive form structure
        this.newRouteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            rule_method: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_assignment: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_expected_status_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('200', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_expected_data_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('text/html', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            rule_expected_data: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            rule_headers: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            rule_parameters: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([
            // this.keyValueFormGroup()
            ]),
            rule_grading: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                verb: this.gradingForm(),
                path: this.gradingForm(),
                status_code: this.gradingForm(),
                mime_type: this.gradingForm()
            }),
        });
    }
    //@ The form submission handler
    saveRoute() {
        // console.dir(this.newRouteForm);
        /**
         * @ Format the data into the proper format
         *
         * rule_grading {verb,path,status_ced,mime_type}
         *
         */
        //@ Match & assign grading related parameters
        let gradingControls = this.newRouteForm.controls['rule_grading']['controls'];
        let grading_keys = Object.keys(this.newRouteForm.controls['rule_grading']['controls']);
        grading_keys.forEach(gradingKey => {
            // console.log(`\n${gradingKey}`);
            // console.dir(gradingControls[gradingKey]);
            let gradingSubMatchControls = gradingControls[gradingKey]['controls']['matches'];
            let gradingSubMatchControlValues = gradingSubMatchControls['controls'].map(a => a.value);
            //@ Add 'value' to the 'value.matches' Array field
            this.newRouteForm.controls['rule_grading']['value'][gradingKey]['matches'].push(...gradingSubMatchControlValues);
            // gradingControls['value']['matches']
        });
        //@ Match & Assign 'rule_header' related parameters
        let ruleHeaderValues = this.newRouteForm.controls['rule_headers']['controls'].map(a => a.value);
        this.newRouteForm.controls['rule_headers']['value'].push(...ruleHeaderValues);
        //@ Match & Assign 'rule_parameters' related parameters
        let ruleParameterValues = this.newRouteForm.controls['rule_parameters']['controls'].map(a => a.value);
        this.newRouteForm.controls['rule_parameters']['value'].push(...ruleParameterValues);
        //  console.dir(this.newRouteForm);
        //@ Send the data over to the server for storage
        this.http.post(`${this.http.applicationHost}?command=add&table=rule`, this.newRouteForm.value).subscribe((resp) => {
            if (resp.response != 200) {
                alert(resp.data.message);
            }
            else {
                this.newRouteForm.reset();
                alert("Grading rule Saved!");
            }
        });
        //  this.newRouteForm.controls['rule_grading']['value'][gradingKey]['matches']
    }
    newGradingPair() {
    }
    newValuePair(formDesignation) {
        if (this.available_positions.indexOf(formDesignation.toLowerCase()) != -1) {
            this.newRouteForm.get(`rule_${formDesignation.toLowerCase()}`)['controls'].push(this.keyValueFormGroup());
        }
        else {
            console.log(`\n_____________________\nINVALID VALUE PAIR POSITION\n_____________________\nTry ${this.available_positions.join('\n')}\n_____________________\n`);
        }
    }
    removeValuePair(formDesignation, idx) {
        if (this.available_positions.indexOf(formDesignation.toLowerCase()) != -1) {
            this.newRouteForm.get(`rule_${formDesignation.toLowerCase()}`)['controls'].splice(idx, 1);
        }
        else {
            console.log(`\n_____________________\nINVALID VALUE PAIR POSITION\n_____________________\nTry ${this.available_positions.join('\n')}\n_____________________\n`);
        }
    }
    newGradingCriteria(gradingPosition) {
        if (this.available_match_positions[gradingPosition.toLowerCase()]) {
            this.newRouteForm.get(this.available_match_positions[gradingPosition.toLowerCase()])['controls'].push(this.gradingSubFormGroup());
        }
        else {
            console.log(`\n_____________________\nINVALID GRADING POSITION\n_____________________\nTry ${Object.keys(this.available_match_positions).join('\n')}\n_____________________\n`);
        }
    }
    removeGradingCriteria(gradingPosition, idx) {
        if (this.available_match_positions[gradingPosition.toLowerCase()]) {
            this.newRouteForm.get(this.available_match_positions[gradingPosition.toLowerCase()])['controls'].splice(idx, 1);
        }
        else {
            console.log(`\n_____________________\nINVALID GRADING POSITION\n_____________________\nTry ${this.available_positions.join('\n')}\n_____________________\n`);
        }
    }
}
RouteManagerComponent.ɵfac = function RouteManagerComponent_Factory(t) { return new (t || RouteManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_static_data_service__WEBPACK_IMPORTED_MODULE_2__["StaticDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCalendar"])); };
RouteManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RouteManagerComponent, selectors: [["app-route-manager"]], decls: 202, vars: 16, consts: [[1, "card"], [1, "border", "border-light", "p-5", 3, "formGroup", "ngSubmit"], [1, "h4", "mb-4", "text-center"], ["id", "sortable-form", 1, "droptrue", "drop-list", "ui-sortable"], [1, "row", "col-12", "bg-black", "padding"], [1, "col-md-4"], ["data-template", "dTextInputTemp", "data-popover", "input", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "rule_name"], [2, "color", "crimson"], ["type", "text", "id", "rule_name", "name", "rule_name", "formControlName", "rule_name", "placeholder", "Rule name", 1, "form-control", "form-control-lg", "mb-4"], [1, "col-md-3"], ["data-template", "dSelectTemp", "data-popover", "select", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "rule_assignment"], ["list", "rule_assignment", "name", "rule_assignment", "formControlName", "rule_assignment", "placeholder", "Assignment ", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["id", "rule_assignment", 4, "ngIf"], ["for", "rule_expected_status_code"], ["list", "rule_expected_status_code", "name", "rule_expected_status_code", "formControlName", "rule_expected_status_code", "placeholder", "Expected Status Code", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["id", "rule_expected_status_code", 4, "ngIf"], ["for", "rule_method"], ["name", "rule_method", "formControlName", "rule_method", "id", "rule_method", 1, "custom-select", "custom-select-lg", "mb-4"], ["selected", ""], [1, "col-md-6"], ["for", "rule_path"], ["type", "text", "id", "rule_path", "name", "rule_path", "formControlName", "rule_path", "placeholder", "/path", 1, "form-control", "form-control-lg", "mb-4"], ["for", "rule_expected_data_type"], ["placeholder", "Response Type", "list", "rule_expected_data_type", "formControlName", "rule_expected_data_type", "name", "rule_expected_data_type", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["id", "rule_expected_data_type", 4, "ngIf"], ["data-template", "dTextareaTemp ", "data-popover", "textarea ", "data-original-title", " ", "title", " ", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "rule_description "], ["id", "rule_description ", "name", "rule_description", "formControlName", "rule_description", "placeholder", "Assignment Description ", 1, "form-control", "form-control-lg", "mb-4"], [1, "col-md-5"], ["data-template", "dTextareaTemp ", "data-popover", "textarea", "data-original-title", " ", "title", " ", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "rule_expected_data "], ["id", "rule_expected_data ", "name", "rule_expected_data", "formControlName", "rule_expected_data", "placeholder", "Expected response data ", 1, "form-control", "form-control-lg", "mb-4"], [1, "row", "col-12", "bg-black"], [1, "row", "col-12", 2, "background-color", "white !important"], [1, "col-md-4", "col-sm-6"], [1, "col-md-2", "col-sm-6"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["formArrayName", "rule_headers", 1, "row", "col-12", "bg-black", "padding"], ["class", "col-12 d-none d-xs-none d-sm-none d-md-block d-l-block d-xl-block", 4, "ngIf"], ["class", "col-12 row", 4, "ngFor", "ngForOf"], ["formArrayName", "rule_parameters", 1, "row", "col-12", "bg-black", "padding"], ["class", "col-12 row form-group", 4, "ngFor", "ngForOf"], ["formGroupName", "rule_grading", 1, "row", "col-12", "bg-black"], ["formGroupName", "path", 1, "col-12", "row"], [1, "col-md-1"], [1, "col-12", "row", "form-group"], [1, ""], ["type", "number", "name", "match", "placeholder", "Marks for positive match", "formControlName", "match", 1, "form-control", "form-control-lg", "mb-4"], ["type", "number", "name", "no_match", "placeholder", "Marks for negative match", "formControlName", "no_match", 1, "form-control", "form-control-lg", "mb-4"], ["formGroupName", "matches", 1, "col-12", "row"], ["formGroupName", "verb", 1, "col-12", "row"], ["formGroupName", "status_code", 1, "col-12", "row"], ["formGroupName", "mime_type", 1, "col-12", "row"], ["type", "submit ", 1, "btn", "btn-lg", "btn-info", "btn-block", "my-4", 3, "disabled"], ["id", "rule_assignment"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["value", "", "selected", ""], ["id", "rule_expected_status_code"], ["id", "rule_expected_data_type"], ["value", " ", "selected", ""], [1, "col-12", "d-none", "d-xs-none", "d-sm-none", "d-md-block", "d-l-block", "d-xl-block"], [1, "row", "col-12"], [1, "col-4"], [1, "col-12", "row"], [1, "col-12", "row", "form-group", 3, "formGroupName"], [1, "d-sm-block", "d-md-none", "d-lg-none", "d-l-none", "d-xl-none"], ["formControlName", "key", "placeholder", "Header", "list", "rule_headers", "name", "key", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["id", "rule_headers", 4, "ngIf"], ["formControlName", "value", "type", "text", "name", "value", "placeholder", "Value", 1, "form-control", "form-control-lg", "mb-4"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger", "btn-lg", 3, "click"], ["id", "rule_headers"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "key", "placeholder", "Parameter", "formControlName", "key", 1, "form-control", "form-control-lg", "mb-4"], ["type", "text", "name", "value", "placeholder", "Value", "formControlName", "value", 1, "form-control", "form-control-lg", "mb-4"], ["type", "text", "name", "alternative", "placeholder", "Parameter", "formControlName", "alternative", 1, "form-control", "form-control-lg", "mb-4"], [2, "margin-top", "1.8em !important"], ["name", "alternative", "id", "alternative", "formControlName", "alternative", 1, "custom-select", "custom-select-lg", "mb-4"], ["type", "text", "name", "alternative", "placeholder", "Alternate Status Code", "formControlName", "alternative", 1, "form-control", "form-control-lg", "mb-4"], ["name", "alternative", "placeholder", "Alternate Mime Type", "formControlName", "alternative", "list", "rule_expected_data_type", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["data-template", "dTextInputTemp ", "data-popover", "input ", "data-original-title", " ", "title", " ", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["type", "number ", "name", "match", "placeholder", "Marks for positive match ", "formControlName", "match", 1, "form-control", "form-control-lg", "mb-4"], ["type", "number ", "name", "no_match ", "placeholder", "Marks for negative match", "formControlName", "no_match", 1, "form-control", "form-control-lg", "mb-4"], ["type", "button ", 1, "btn", "btn-block", "btn-outline-danger", "btn-lg", 3, "click"]], template: function RouteManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RouteManagerComponent_Template_form_ngSubmit_1_listener() { return ctx.saveRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "NEW GRADING RULE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Rule Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RouteManagerComponent_datalist_21_Template, 2, 1, "datalist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RouteManagerComponent_datalist_22_Template, 3, 0, "datalist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Expected Status Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RouteManagerComponent_datalist_30_Template, 2, 1, "datalist", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RouteManagerComponent_datalist_31_Template, 3, 0, "datalist", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " HTTP Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "GET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "PUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "OPTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Response Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, RouteManagerComponent_datalist_64_Template, 2, 1, "datalist", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, RouteManagerComponent_datalist_65_Template, 3, 0, "datalist", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Expected Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " HEADERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_Template_button_click_84_listener() { return ctx.newValuePair("headers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, RouteManagerComponent_div_87_Template, 8, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, RouteManagerComponent_div_88_Template, 21, 3, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " BODY PARAMETERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_Template_button_click_94_listener() { return ctx.newValuePair("parameters"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, RouteManagerComponent_div_97_Template, 8, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, RouteManagerComponent_div_98_Template, 19, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " GRADING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Path ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_Template_button_click_111_listener() { return ctx.newGradingCriteria("path"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "No Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, RouteManagerComponent_div_127_Template, 25, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " Verb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_Template_button_click_135_listener() { return ctx.newGradingCriteria("verb"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "No Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, RouteManagerComponent_div_151_Template, 35, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Status Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_Template_button_click_159_listener() { return ctx.newGradingCriteria("status_code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "No Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, RouteManagerComponent_div_175_Template, 25, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "hr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " MIME Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RouteManagerComponent_Template_button_click_183_listener() { return ctx.newGradingCriteria("mime_type"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "No Match Marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](199, RouteManagerComponent_div_199_Template, 27, 3, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Add Grading Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newRouteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.assignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.assignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statusCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.statusCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mimeTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mimeTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newRouteForm.get("rule_headers")["controls"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newRouteForm.get("rule_headers")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newRouteForm.get("rule_parameters")["controls"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newRouteForm.get("rule_parameters")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newRouteForm.get("rule_grading.path.matches")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newRouteForm.get("rule_grading.verb.matches")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newRouteForm.get("rule_grading.status_code.matches")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newRouteForm.get("rule_grading.mime_type.matches")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.newRouteForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: ["option.padding[_ngcontent-%COMP%] {\n    margin: 200px !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n    cursor: pointer !important;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    border-radius: 0.25rem;\n    display: inline-block;\n    width: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%]:hover, .custom-day.focused[_ngcontent-%COMP%] {\n    background-color: #e6e6e6;\n}\n\n.weekend[_ngcontent-%COMP%] {\n    background-color: #f0ad4e;\n    border-radius: 1rem;\n    color: white;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1nZW5lcmF0b3Ivcm91dGUtbWFuYWdlci9yb3V0ZS1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ25tZW50cy9hc3NpZ25tZW50LWdlbmVyYXRvci9yb3V0ZS1tYW5hZ2VyL3JvdXRlLW1hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm9wdGlvbi5wYWRkaW5nIHtcbiAgICBtYXJnaW46IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5OmhvdmVyLFxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLndlZWtlbmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouteManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-route-manager',
                templateUrl: './route-manager.component.html',
                styleUrls: ['./route-manager.component.css']
            }]
    }], function () { return [{ type: _services_static_data_service__WEBPACK_IMPORTED_MODULE_2__["StaticDataService"] }, { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCalendar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-grading/assignment-grading.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/assignments/assignment-grading/assignment-grading.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssignmentGradingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentGradingComponent", function() { return AssignmentGradingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AssignmentGradingComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssignmentGradingComponent.ɵfac = function AssignmentGradingComponent_Factory(t) { return new (t || AssignmentGradingComponent)(); };
AssignmentGradingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentGradingComponent, selectors: [["app-assignment-grading"]], decls: 2, vars: 0, template: function AssignmentGradingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "assignment-grading works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtZ3JhZGluZy9hc3NpZ25tZW50LWdyYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentGradingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-grading',
                templateUrl: './assignment-grading.component.html',
                styleUrls: ['./assignment-grading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-placeholder/assignment-placeholder.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/assignments/assignment-placeholder/assignment-placeholder.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AssignmentPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentPlaceholderComponent", function() { return AssignmentPlaceholderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class AssignmentPlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssignmentPlaceholderComponent.ɵfac = function AssignmentPlaceholderComponent_Factory(t) { return new (t || AssignmentPlaceholderComponent)(); };
AssignmentPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentPlaceholderComponent, selectors: [["app-assignment-placeholder"]], decls: 56, vars: 2, consts: [[2, "color", "red", "text-align", "center", "margin", "0 auto", "width", "100%"], [1, "col-12"], [1, "row"], [1, "col-3"], [1, "card", "bg-dark"], ["id", "headingZero", 1, "card-header"], [1, "mb-0"], ["routerLink", "/assignments/new", "routerLinkActive", "active", 1, "extra-padded"], ["id", "headingZeroAlpha", 1, "card-header"], ["routerLink", "/assignments/browse", "routerLinkActive", "active", 1, "extra-padded"], ["routerLink", "/assignments/generator/routes", "routerLinkActive", "active", 1, "extra-padded"], ["routerLink", "/assignments/generator/review", "routerLinkActive", "active", 1, "extra-padded"], ["routerLink", "/assignments/generator/chaining", "routerLinkActive", "active", 1, "extra-padded", 3, "routerLinkActiveOptions"], ["routerLink", "/assignments/browse/chainings", "routerLinkActive", "active", 1, "extra-padded"], ["routerLink", "/assignments/submit", "routerLinkActive", "active", 1, "extra-padded"], ["routerLink", "/assignments/browse/submissions", "routerLinkActive", "active", 1, "extra-padded"]], template: function AssignmentPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome to your grading assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ADD A NEW ASSIGNMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " VIEW EXISTING ASSIGNMENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " ADD GRADING RULE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " VIEW GRADING RULES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " BUNDLE/GROUP RULES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " VIEW BUNDLED RULES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " SUBMIT AN ASSIGNMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " VIEW ASSIGNMENT SUBMISSIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".extra-padded[_ngcontent-%COMP%] {\n    padding: 3em !important;\n    font-weight: bold;\n    cursor: pointer;\n    color: white;\n    text-align: center;\n}\n\n.card[_ngcontent-%COMP%] {\n    border-radius: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1wbGFjZWhvbGRlci9hc3NpZ25tZW50LXBsYWNlaG9sZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudC1wbGFjZWhvbGRlci9hc3NpZ25tZW50LXBsYWNlaG9sZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0cmEtcGFkZGVkIHtcbiAgICBwYWRkaW5nOiAzZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-placeholder',
                templateUrl: './assignment-placeholder.component.html',
                styleUrls: ['./assignment-placeholder.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-submission-browser/assignment-submission-browser.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/assignments/assignment-submission-browser/assignment-submission-browser.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AssignmentSubmissionBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionBrowserComponent", function() { return AssignmentSubmissionBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stor/attempts.stor.service */ "./src/app/services/stor/attempts.stor.service.ts");







const _c0 = ["assignmentSubmissionBrowser"];
class AssignmentSubmissionBrowserComponent {
    constructor(http, helpers, router, ngZone, attemptsUpdater) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.attemptsUpdater = attemptsUpdater;
        // (window as any).pdfMake.vfs = (window as any).pdfFonts.pdfMake.vfs;
        // console.dir(window)
    }
    ngOnInit() {
        //  this.http.countAllRecords().then(console.dir)
        this.initializeDataTable();
        this.attemptsSubscription = this.attemptsUpdater.attemptsUpdated.subscribe((attempts) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.attempts = attempts;
            this.dataTable.DataTable().destroy();
            ;
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
        //@ Attempt to get the simple report
        $(document).on('click', '.simpleReport', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            //@ Navigate to the relevant route 
            let targetUrl = `${this.http.applicationHost}?command=get&table=gradereport&attempt_id=${identifier}`;
            window.open(targetUrl, "_blank");
        });
        // @ Attempt to get the complex report
        $(document).on('click', '.complexReport', (d) => {
            d.stopPropagation();
            let identifier = $(d.currentTarget).attr('id');
            //@ Navigate to the relevant route 
            let targetUrl = `${this.http.applicationHost}?command=get&table=gradereport&attempt_id=${identifier}&technical=true`;
            window.open(targetUrl, "_blank");
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    formOptions() {
        return {
            scrollY: this.helpers.getPageHeight(),
            data: this.attempts,
            columns: [
                { title: 'ID', data: 'attempt_id' },
                { title: 'Name', data: 'attempt_name', className: 'editable',
                    render: (data, type, row) => this.helpers.stringify(data, 'teal')
                },
                { title: 'Submitor\'s ID', data: 'attempt_student_identifier', className: 'editable', sortable: false,
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                { title: 'App URL', data: 'attempt_main_path', className: 'editable', sortable: false,
                    render: (data, type, row) => this.helpers.stringify(data, undefined)
                },
                { title: 'Assignment', data: 'attempt_assignment',
                    render: (data, type, row) => this.helpers.stringify(row.attempt_assignment, 'blue')
                },
                {
                    title: 'Grade Report',
                    sortable: false,
                    data: null,
                    render: (data, type, row) => `
            <button class='btn btn-primary simpleReport' id="${row.attempt_id}" data="${this.helpers.str(row).replace(/'/ig, '&apos;').replace(/"/ig, "'")}"> Simple </button> 
            &nbsp;&nbsp;
            <button class='btn btn-danger complexReport' id="${row.attempt_id}" data="${this.helpers.str(row).replace(/'/ig, '&apos;').replace(/"/ig, "'")}"> Detailed </button>
          `
                },
                {
                    title: 'Submitted',
                    data: 'attempt_submission_time', className: 'editable',
                    render: (data, type, row) => this.helpers.stringify(data, 'crimson')
                },
                {
                    title: 'Created', data: 'created_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'green')
                },
                {
                    title: 'Last Modified',
                    data: 'updated_at',
                    render: (data, type, row) => this.helpers.dateify(data, undefined)
                },
            ],
            dom: 'Bfrtip',
            select: true,
            responsive: true,
            altEditor: true,
            buttons: [
                'excel',
                'pdf',
                {
                    extend: 'selected',
                    text: 'Edit',
                    name: 'edit' // do not change name
                },
                // {
                //     extend: 'selected', // Bind to Selected row
                //     text: 'Delete',
                //     name: 'delete'      // do not change name
                // },
                {
                    text: 'Refresh',
                    action: (e, dt, node, config) => {
                        this.fetchAssignmentAttempts();
                    }
                }
            ],
            onAddRow: function (datatable, rowdata, success, error) {
                $.ajax({
                    // a tipycal url would be / with type='PUT'
                    url: `/`,
                    type: 'GET',
                    data: rowdata,
                    success: success,
                    error: error
                });
            },
            onDeleteRow: function (datatable, rowdata, success, error) {
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
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting the textArea from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting Files from the modal
                var numFilesQueued = 0;
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function (i) {
                    if ($(this).prop('files')[0]) {
                        ++numFilesQueued;
                        that.getBase64($(this).prop('files')[0], function (filecontent) {
                            rowDataArray[$(this).attr('id')] = filecontent;
                            --numFilesQueued;
                        });
                    }
                });
                // Getting the checkbox from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = i; //this?.checked;
                });
                const { attempt_id, attempt_name, attempt_student_identifier, attempt_main_path, attempt_submission_time, attempt_grading_time, attempt_grade_breakdown, attempt_grade_complete, attempt_assignment, updated_at } = rowDataArray;
                this.http.postLocal({
                    table: 'attempt',
                    command: 'update',
                    attempt_id,
                    attempt_name,
                    attempt_student_identifier,
                    attempt_main_path,
                    attempt_submission_time,
                    attempt_grading_time,
                    attempt_grade_breakdown,
                    attempt_grade_complete,
                    attempt_assignment,
                    updated_at
                }).subscribe((d) => {
                    if (d.response == 200)
                        this.fetchAssignmentAttempts();
                    console.log(`Assignment Submission Data update attempted!\nProof:`);
                    console.dir(d);
                }, err => {
                    console.error();
                }, () => {
                    $('.modal,.modal-backdrop').hide();
                });
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
    fetchAssignmentAttempts() {
        this.http.getAttempts().subscribe((d) => {
            if (d.response == 200) {
                // console.dir(d.data.message);
                this.attemptsUpdater.resetAttempts(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    ngOnDestroy() {
        this.attemptsSubscription.unsubscribe();
    }
}
AssignmentSubmissionBrowserComponent.ɵfac = function AssignmentSubmissionBrowserComponent_Factory(t) { return new (t || AssignmentSubmissionBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__["AttemptStoreService"])); };
AssignmentSubmissionBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentSubmissionBrowserComponent, selectors: [["app-assignment-submission-browser"]], viewQuery: function AssignmentSubmissionBrowserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "h4", "mb-4", "text-center"], [1, "display", "table", "table-responsive", "table-sm", "nowrap", 2, "width", "100%"], ["assignmentSubmissionBrowser", ""]], template: function AssignmentSubmissionBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submitted Assignment Attempts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 1, 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtc3VibWlzc2lvbi1icm93c2VyL2Fzc2lnbm1lbnQtc3VibWlzc2lvbi1icm93c2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentSubmissionBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-submission-browser',
                templateUrl: './assignment-submission-browser.component.html',
                styleUrls: ['./assignment-submission-browser.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__["AttemptStoreService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['assignmentSubmissionBrowser', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/assignments/assignment-submission/assignment-submission.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/assignments/assignment-submission/assignment-submission.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AssignmentSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionComponent", function() { return AssignmentSubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/stor/assignments.stor.service */ "./src/app/services/stor/assignments.stor.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AssignmentSubmissionComponent_datalist_28_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asgnt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", asgnt_r3.assignment_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asgnt_r3.assignment_name);
} }
function AssignmentSubmissionComponent_datalist_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datalist", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssignmentSubmissionComponent_datalist_28_option_1_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.assignments);
} }
function AssignmentSubmissionComponent_datalist_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datalist", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Refresh to Load Assignments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AssignmentSubmissionComponent {
    constructor(http, assignmentsUpdater) {
        this.http = http;
        this.assignmentsUpdater = assignmentsUpdater;
    }
    ngOnInit() {
        this.assignmentsSubscription = this.assignmentsUpdater.assignmentsUpdated.subscribe((assignments) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.assignments = assignments;
        });
        this.newAttemptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            attempt_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            attempt_student_identifier: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            attempt_assignment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            attempt_main_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(14)]),
        });
        this.fetchAssignments();
    }
    fetchAssignments() {
        this.http.getAssignments().subscribe((d) => {
            if (d.response == 200) {
                // console.dir(d.data.message);
                this.assignmentsUpdater.resetAssignments(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    saveAttempt() {
        // console.dir(this.newAttemptForm)
        this.http.addAttempt(this.newAttemptForm.value).subscribe((d) => {
            if (d.response != 200) {
                alert(d.data.message);
            }
            else {
                this.newAttemptForm.reset();
                alert("Assignment Attempt Submitted!");
            }
        });
    }
    ngOnDestroy() {
        this.assignmentsSubscription.unsubscribe();
    }
}
AssignmentSubmissionComponent.ɵfac = function AssignmentSubmissionComponent_Factory(t) { return new (t || AssignmentSubmissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentsStoreService"])); };
AssignmentSubmissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentSubmissionComponent, selectors: [["app-assignment-submission"]], decls: 42, vars: 4, consts: [[1, "card"], [1, "border", "border-light", "p-5", 3, "formGroup", "ngSubmit"], [1, "h4", "mb-12", "text-left", "font-weight-bold"], ["id", "sortable-form", 1, "droptrue", "drop-list", "ui-sortable"], [1, "col-12", "row"], [1, "col-md-4"], ["data-template", "dTextInputTemp", "data-popover", "input", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "attempt_name"], [2, "color", "crimson"], ["type", "text", "id", "attempt_name", "formControlName", "attempt_name", "name", "attempt_name", "placeholder", "Submitor's Name", 1, "form-control", "form-control-lg", "mb-4"], ["for", "attempt_student_identifier"], ["type", "text", "id", "attempt_student_identifier", "formControlName", "attempt_student_identifier", "name", "attempt_student_identifier", "placeholder", "Student Id", 1, "form-control", "form-control-lg", "mb-4"], ["data-template", "dSelectTemp", "data-popover", "select", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "attempt_assignment"], ["list", "attempt_assignment", "name", "attempt_assignment", "formControlName", "attempt_assignment", "placeholder", "Assignment ", 1, "browser-default", "form-control", "form-control-lg", "mb-4"], ["id", "attempt_assignment", 4, "ngIf"], [1, "row", "col-12"], [1, "col-md-12"], ["data-template", "dTextareaTemp", "data-popover", "textarea", "data-original-title", "", "title", "", 1, "", 2, "position", "relative", "left", "0px", "top", "0px"], ["for", "attempt_main_path"], ["type", "text", "id", "attempt_main_path", "formControlName", "attempt_main_path", "name", "attempt_main_path", "placeholder", "Your Application's URL", 1, "form-control", "mb-4", "form-control-lg"], ["type", "submit", 1, "btn", "btn-info", "btn-block", "my-4", "btn-lg", 3, "disabled"], ["id", "attempt_assignment"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["value", "", "selected", ""]], template: function AssignmentSubmissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AssignmentSubmissionComponent_Template_form_ngSubmit_1_listener() { return ctx.saveAttempt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SUBMIT AN ASSIGNMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Student Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AssignmentSubmissionComponent_datalist_28_Template, 2, 1, "datalist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AssignmentSubmissionComponent_datalist_29_Template, 3, 0, "datalist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Main Application URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "sup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "         \n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newAttemptForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.assignments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.newAttemptForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtc3VibWlzc2lvbi9hc3NpZ25tZW50LXN1Ym1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentSubmissionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-submission',
                templateUrl: './assignment-submission.component.html',
                styleUrls: ['./assignment-submission.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentsStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignment-viewer/assignment-viewer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/assignments/assignment-viewer/assignment-viewer.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssignmentViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentViewerComponent", function() { return AssignmentViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_chainings_stor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stor/chainings.stor.service */ "./src/app/services/stor/chainings.stor.service.ts");






const _c0 = ["ruleChainingBrowser"];
class AssignmentViewerComponent {
    constructor(http, helpers, router, ngZone, chainingsUpdater) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.chainingsUpdater = chainingsUpdater;
    }
    ngOnInit() {
        this.initializeDataTable();
        this.fetchRoutes();
        this.chainingsSubscription = this.chainingsUpdater.chainingsUpdateWatcher.subscribe((chainings) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.routes = chainings;
            this.dataTable.DataTable().destroy();
            ;
            this.initializeDataTable();
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    formOptions() {
        return {
            scrollY: this.helpers.getPageHeight(),
            data: this.routes,
            columns: [
                { title: "Id", data: 'chaining_id' },
                {
                    title: "Assignment",
                    data: 'chaining_assignment',
                    render: (data, type, row) => this.helpers.stringify(`${row.assignment_name} <sub>(${row.assignment_owner_name})</sub>`, 'teal')
                },
                { title: "Created At", data: 'created_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'green')
                },
                { title: "Updated At", data: 'updated_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'orange')
                },
                {
                    title: "Bundling Data", data: "chaining_rules",
                    render: (data, type, row) => this.helpers.jsonify(data)
                }
            ],
            dom: 'Bfrtip',
            select: true,
            responsive: true,
            altEditor: true,
            buttons: [
                'excel',
                'pdf',
                {
                    extend: 'selected',
                    text: 'Edit',
                    name: 'edit' // do not change name
                },
                // {
                //     extend: 'selected', // Bind to Selected row
                //     text: 'Delete',
                //     name: 'delete'      // do not change name
                // },
                {
                    text: 'Refresh',
                    action: (e, dt, node, config) => {
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
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting the textArea from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting Files from the modal
                var numFilesQueued = 0;
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function (i) {
                    if ($(this).prop('files')[0]) {
                        ++numFilesQueued;
                        that.getBase64($(this).prop('files')[0], function (filecontent) {
                            rowDataArray[$(this).attr('id')] = filecontent;
                            --numFilesQueued;
                        });
                    }
                });
                // Getting the checkbox from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = i; // this.checked;
                });
                const { chaining_id, chaining_assignment, chaining_rules } = rowDataArray;
                this.http.postLocal({
                    table: 'chaining',
                    command: 'update',
                    chaining_id,
                    chaining_assignment,
                    chaining_rules
                }).subscribe((d) => {
                    if (d.response == 200)
                        this.fetchRoutes();
                    console.log(`Rule Bundling Data update attempted!\nProof:`);
                    console.dir(d);
                }, err => {
                    console.error();
                }, () => {
                    $('.modal,.modal-backdrop').hide();
                });
            }
        };
    }
    initializeDataTable() {
        this.dataTable = $(this.table.nativeElement);
        // console.dir(this.dataTable);
        this.dataTable.DataTable(this.formOptions());
    }
    fetchRoutes() {
        this.http.getChaining().subscribe((d) => {
            if (d.response == 200) {
                this.chainingsUpdater.resetChainings(d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    ngOnDestroy() {
        this.chainingsSubscription.unsubscribe();
    }
}
AssignmentViewerComponent.ɵfac = function AssignmentViewerComponent_Factory(t) { return new (t || AssignmentViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_chainings_stor_service__WEBPACK_IMPORTED_MODULE_4__["ChainingsStoreService"])); };
AssignmentViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentViewerComponent, selectors: [["app-assignment-viewer"]], viewQuery: function AssignmentViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "h4", "mb-4", "text-center"], [1, "display", "table", "table-responsive", "table-sm", 2, "width", "100%"], ["ruleChainingBrowser", ""]], template: function AssignmentViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Grading Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 1, 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnQtdmlld2VyL2Fzc2lnbm1lbnQtdmlld2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment-viewer',
                templateUrl: './assignment-viewer.component.html',
                styleUrls: ['./assignment-viewer.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_chainings_stor_service__WEBPACK_IMPORTED_MODULE_4__["ChainingsStoreService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ruleChainingBrowser', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/assignments/assignments-menu/assignments-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/assignments/assignments-menu/assignments-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: AssignmentsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsMenuComponent", function() { return AssignmentsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class AssignmentsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssignmentsMenuComponent.ɵfac = function AssignmentsMenuComponent_Factory(t) { return new (t || AssignmentsMenuComponent)(); };
AssignmentsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentsMenuComponent, selectors: [["app-assignments-menu"]], decls: 39, vars: 2, consts: [["id", "accordion"], [1, "card"], ["id", "headingZero", 1, "card-header"], [1, "mb-0"], ["routerLink", "/assignments/new", "routerLinkActive", "active", 1, "btn", "btn-block"], ["id", "headingZeroAlpha", 1, "card-header"], ["routerLink", "/assignments/browse", "routerLinkActive", "active", 1, "btn", "btn-block"], ["id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "btn-block"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse", "show"], [1, "card-body"], [1, "list-group"], ["type", "button", "routerLink", "/assignments/generator/routes", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "btn-sm"], ["type", "button", "routerLink", "/assignments/generator/review", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "btn-sm"], ["type", "button", "routerLink", "/assignments/generator/chaining", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "btn-sm", 3, "routerLinkActiveOptions"], ["type", "button", "routerLink", "/assignments/browse/chainings", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "btn-sm"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "btn", "btn-block", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"], ["type", "button", "routerLink", "/assignments/submit", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "btn-block", "btn-sm"], ["type", "button", "routerLink", "/assignments/browse/submissions", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "btn-block", "btn-sm"]], template: function AssignmentsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " NEW ASSIGNMENT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " VIEW ASSIGNMENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " GRADING RULES & LINKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " ADD RULE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " VIEW RULES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " BUNDLE/GROUP RULES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " BUNDLED RULES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " SUBMISSIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " NEW SUBMISSION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " VIEW SUBMISSIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".noLink[_ngcontent-%COMP%] {\n    text-decoration: none !important;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudHMtbWVudS9hc3NpZ25tZW50cy1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzLW1lbnUvYXNzaWdubWVudHMtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vTGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentsMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignments-menu',
                templateUrl: './assignments-menu.component.html',
                styleUrls: ['./assignments-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/assignments/assignments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/assignments/assignments.component.ts ***!
  \******************************************************/
/*! exports provided: AssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function() { return AssignmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assignments_menu_assignments_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignments-menu/assignments-menu.component */ "./src/app/assignments/assignments-menu/assignments-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AssignmentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssignmentsComponent.ɵfac = function AssignmentsComponent_Factory(t) { return new (t || AssignmentsComponent)(); };
AssignmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentsComponent, selectors: [["app-assignments"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-md-2"], [1, "col-md-10"]], template: function AssignmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-assignments-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_assignments_menu_assignments_menu_component__WEBPACK_IMPORTED_MODULE_1__["AssignmentsMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudHMvYXNzaWdubWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ25tZW50cy9hc3NpZ25tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignments',
                templateUrl: './assignments.component.html',
                styleUrls: ['./assignments.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/grades/grades-browser/grades-browser.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/grades/grades-browser/grades-browser.component.ts ***!
  \*******************************************************************/
/*! exports provided: GradesBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesBrowserComponent", function() { return GradesBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stor/attempts.stor.service */ "./src/app/services/stor/attempts.stor.service.ts");






const _c0 = ["gradesBrowser"];
class GradesBrowserComponent {
    constructor(http, helpers, router, ngZone, attemptUpdater) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.attemptUpdater = attemptUpdater;
    }
    ngOnInit() {
        this.initializeDataTable();
        this.fetchAttempts();
        this.attemptsSubscription = this.attemptUpdater.attemptsUpdated.subscribe((chainings) => {
            console.log(`\n\nReceived new data .... redrawing table!`);
            this.attempts = chainings;
            this.dataTable.DataTable().destroy();
            ;
            this.initializeDataTable();
        });
    }
    navigate(commands, pars = {}) {
        this.ngZone.run(() => this.router.navigate(commands, pars)).then();
    }
    formOptions() {
        return {
            scrollY: this.helpers.getPageHeight(),
            data: this.attempts,
            columns: [
                { title: "Id", data: 'attempt_id' },
                {
                    title: "Assignment",
                    data: 'assignment_name',
                    render: (data, type, row) => this.helpers.stringify(`${row.assignment_name} <sub>(${row.assignment_owner_name})</sub>`, 'teal')
                },
                {
                    title: "Student",
                    data: 'attempt_name',
                    render: (data, type, row) => this.helpers.stringify(`${row.attempt_name} <sub>(${row.attempt_student_identifier})</sub>`, 'deepskyblue')
                },
                {
                    title: "Application host",
                    data: 'attempt_main_path'
                },
                {
                    title: "Grade", data: "attempt_grade",
                    render: (data, type, row) => {
                        data = this.helpers.json(data || {});
                        return (data.possible) ?
                            this.helpers.stringify(`${data.total} of ${data.possible} <sub>(${data.percentage}%)</sub>`, 'teal')
                            : this.helpers.stringify(`No data`, 'red');
                    },
                },
                {
                    title: "Is Graded",
                    data: 'attempt_grade_complete',
                    render: (data, type, row) => (data) ? 'true' : 'false'
                },
                {
                    title: "Submitted At",
                    data: 'created_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'green')
                },
                {
                    title: "Last graded at",
                    data: 'updated_at',
                    render: (data, type, row) => this.helpers.dateify(data, 'orange')
                },
            ],
            dom: 'Bfrtip',
            select: true,
            responsive: true,
            altEditor: true,
            buttons: [
                'excel',
                'pdf',
                {
                    extend: 'selected',
                    text: 'Edit',
                    name: 'edit' // do not change name
                },
                // {
                //     extend: 'selected', // Bind to Selected row
                //     text: 'Delete',
                //     name: 'delete'      // do not change name
                // },
                {
                    text: 'Refresh',
                    action: (e, dt, node, config) => {
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
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type!="file"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting the textArea from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter('textarea').each(function (i) {
                    rowDataArray[$(this).attr('id')] = $(this).val();
                });
                //Getting Files from the modal
                var numFilesQueued = 0;
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="file"]').each(function (i) {
                    if ($(this).prop('files')[0]) {
                        ++numFilesQueued;
                        that.getBase64($(this).prop('files')[0], function (filecontent) {
                            rowDataArray[$(this).attr('id')] = filecontent;
                            --numFilesQueued;
                        });
                    }
                });
                // Getting the checkbox from the modal
                $('form[name="altEditor-edit-form-' + datatable.random_id + '"] *').filter(':input[type="checkbox"]').each(function (i) {
                    rowDataArray[$(this).attr('id')] = i; // this.checked;
                });
                const { attempt_id, attempt_name, attempt_student_identifier, attempt_main_path, attempt_assignment } = rowDataArray;
                this.http.postLocal({
                    table: 'attempts',
                    command: 'update',
                    attempt_id,
                    attempt_name,
                    attempt_student_identifier,
                    attempt_main_path,
                    attempt_assignment,
                }).subscribe((d) => {
                    if (d.response == 200)
                        this.fetchAttempts();
                    console.log(`Assignment Submission Data update attempted!\nProof:`);
                    console.dir(d);
                }, err => {
                    console.error();
                }, () => {
                    $('.modal,.modal-backdrop').hide();
                });
            }
        };
    }
    initializeDataTable() {
        this.dataTable = $(this.table.nativeElement);
        // console.dir(this.dataTable);
        this.dataTable.DataTable(this.formOptions());
    }
    fetchAttempts() {
        this.http.getAttempts().subscribe((d) => {
            if (d.response == 200) {
                this.attemptUpdater.resetAttempts(d.data.message);
                // this.chainingsUpdater.resetChainings(<Chaining[]>d.data.message);
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        }, err => { });
    }
    ngOnDestroy() {
        this.attemptsSubscription.unsubscribe();
    }
}
GradesBrowserComponent.ɵfac = function GradesBrowserComponent_Factory(t) { return new (t || GradesBrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__["AttemptStoreService"])); };
GradesBrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradesBrowserComponent, selectors: [["app-grades-browser"]], viewQuery: function GradesBrowserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "h4", "mb-4", "text-center"], [1, "display", "table", "table-responsive", "table-sm", 2, "width", "100%"], ["gradesBrowser", ""]], template: function GradesBrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assignment Grades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table", 1, 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlcy9ncmFkZXMtYnJvd3Nlci9ncmFkZXMtYnJvd3Nlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradesBrowserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grades-browser',
                templateUrl: './grades-browser.component.html',
                styleUrls: ['./grades-browser.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_2__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_stor_attempts_stor_service__WEBPACK_IMPORTED_MODULE_4__["AttemptStoreService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gradesBrowser', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/grades/grades-placeholder/grades-placeholder.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/grades/grades-placeholder/grades-placeholder.component.ts ***!
  \***************************************************************************/
/*! exports provided: FileNode, FileFlatNode, RuleNode, RuleFlatNode, FileAndRuleDatabase, GradesPlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFlatNode", function() { return FileFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleNode", function() { return RuleNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleFlatNode", function() { return RuleFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileAndRuleDatabase", function() { return FileAndRuleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesPlaceholderComponent", function() { return GradesPlaceholderComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/byte-grader-helper.service */ "./src/app/services/byte-grader-helper.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/stor/assignments.stor.service */ "./src/app/services/stor/assignments.stor.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-grades-placeholder',
//   templateUrl: './grades-placeholder.component.html',
//   styleUrls: ['./grades-placeholder.component.css']
// })
// export class GradesPlaceholderComponent implements OnInit {
//   constructor() { }
//   ngOnInit(): void {
//   }
// }












const _c0 = ["class", "component"];
function GradesPlaceholderComponent_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function GradesPlaceholderComponent_mat_tree_node_3_Template_mat_tree_node_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const node_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.dragHover(node_r2); })("mouseleave", function GradesPlaceholderComponent_mat_tree_node_3_Template_mat_tree_node_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.dragHoverEnd(); })("cdkDragStarted", function GradesPlaceholderComponent_mat_tree_node_3_Template_mat_tree_node_cdkDragStarted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.dragStart(); })("cdkDragReleased", function GradesPlaceholderComponent_mat_tree_node_3_Template_mat_tree_node_cdkDragReleased_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.dragEnd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", node_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", node_r2.filename, " : ", node_r2.type, " ");
} }
function GradesPlaceholderComponent_mat_tree_node_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function GradesPlaceholderComponent_mat_tree_node_4_Template_mat_tree_node_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const node_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.dragHover(node_r8); })("mouseleave", function GradesPlaceholderComponent_mat_tree_node_4_Template_mat_tree_node_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.dragHoverEnd(); })("cdkDragStarted", function GradesPlaceholderComponent_mat_tree_node_4_Template_mat_tree_node_cdkDragStarted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.dragStart(); })("cdkDragReleased", function GradesPlaceholderComponent_mat_tree_node_4_Template_mat_tree_node_cdkDragReleased_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.dragEnd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", node_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r8.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r8) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", node_r8.filename, " : ", node_r8.type, " ");
} }
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
class FileNode {
}
/** Flat node with expandable and level information */
class FileFlatNode {
    constructor(expandable, filename, level, type, id) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
        this.id = id;
    }
}
class RuleNode {
}
class RuleFlatNode {
    constructor(expandable, title, level, type, id) {
        this.expandable = expandable;
        this.title = title;
        this.level = level;
        this.type = type;
        this.id = id;
    }
}
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
class FileAndRuleDatabase {
    // ***********************************
    constructor(helper) {
        this.helper = helper;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        // +++++++++++++++++++++++++++++++++++
        this.dataRuleChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize();
    }
    get data() { return this.dataChange.value; }
    get dataRule() { return this.dataRuleChange.value; }
    initialize() {
        // Parse the string to json object.    
        const dataObject = this.helper.json(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    // +++++++++++++++++++++++++++++++++++
    initializeRule(TREE_RULE_DATA) {
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.dir(this.helper.json(TREE_RULE_DATA));
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        // Parse the string to json object.
        const dataRuleObject = this.helper.json(TREE_RULE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        const dataRule = this.buildRuleTree(dataRuleObject, 0);
        // Notify the change.
        this.dataRuleChange.next(dataRule);
    }
    // ***********************************
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(obj, level, parentId = '0') {
        return Object.keys(obj).reduce((accumulator, key, idx) => {
            const value = obj[key];
            const node = new FileNode();
            node.filename = key;
            /**
             * Make sure your node has an id so we can properly rearrange the tree during drag'n'drop.
             * By passing parentId to buildFileTree, it constructs a path of indexes which make
             * it possible find the exact sub-array that the node was grabbed from when dropped.
             */
            node.id = `${parentId}/${idx}`;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1, node.id);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
    // +++++++++++++++++++++++++++++++++++
    buildRuleTree(obj, level, parentId = '0') {
        console.info(`---------------------------`);
        console.dir(obj);
        console.info(`---------------------------`);
        return Object.keys(obj).reduce((accumulator, key, idx) => {
            const val = obj[key];
            const node = new RuleNode();
            node.ruleName = key;
            node.id = `${parentId}/${idx}`;
            if (val != null) {
                if (typeof val === 'object') {
                    node.children = this.buildRuleTree(val, level + 1, node.id);
                }
                else {
                    node.ruleData = val;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
}
FileAndRuleDatabase.ɵfac = function FileAndRuleDatabase_Factory(t) { return new (t || FileAndRuleDatabase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__["ByteGraderHelperService"])); };
FileAndRuleDatabase.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileAndRuleDatabase, factory: FileAndRuleDatabase.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileAndRuleDatabase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__["ByteGraderHelperService"] }]; }, null); })();
/**
 * @title Tree with flat nodes
 */
class GradesPlaceholderComponent {
    constructor(database, http, helpers, router, ngZone, assignmentsUpdater) {
        this.http = http;
        this.helpers = helpers;
        this.router = router;
        this.ngZone = ngZone;
        this.assignmentsUpdater = assignmentsUpdater;
        this.expandedNodeSet = new Set();
        this.dragging = false;
        this.expandDelay = 1000;
        this.expandedRuleNodeSet = new Set();
        this.transformer = (node, level) => {
            return new FileFlatNode(!!node.children, node.filename, level, node.type, node.id);
        };
        this._getLevel = (node) => node.level;
        this._isExpandable = (node) => node.expandable;
        this._getChildren = (node) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children);
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        // +++++++++++++++++++++++++++++++++++
        this.transformerRule = (node, level) => {
            return new RuleFlatNode(!!node.children, node.ruleName, level, node.ruleData, node.id);
        };
        this._getRuleLevel = (node) => node.level;
        this._isRuleExpandable = (node) => node.expandable;
        this._getRuleChildren = (node) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children);
        this.hasRuleChild = (_, _nodeData) => _nodeData.expandable;
        this.dataStorObj = database;
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this._getLevel, this._isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => this.rebuildTreeForData(data));
        // +++++++++++++++++++++++++++++++++++
        this.treeRuleFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformerRule, this._getRuleLevel, this._isRuleExpandable, this._getRuleChildren);
        this.treeRuleControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this._getRuleLevel, this._isRuleExpandable);
        this.dataRuleSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeRuleControl, this.treeRuleFlattener);
        // database.dataRuleChange.subscribe(this.rebuildRuleTreeForData);
        // ***********************************
    }
    ngOnInit() {
        this.fetchAssignmentRules(10004);
    }
    // ***********************************
    /**
     * This constructs an array of nodes that matches the DOM,
     * and calls rememberExpandedTreeNodes to persist expand state
     */
    visibleNodes() {
        this.rememberExpandedTreeNodes(this.treeControl, this.expandedNodeSet);
        const result = [];
        function addExpandedChildren(node, expanded) {
            result.push(node);
            if (expanded.has(node.id)) {
                node.children.map(child => addExpandedChildren(child, expanded));
            }
        }
        this.dataSource.data.forEach(node => {
            addExpandedChildren(node, this.expandedNodeSet);
        });
        return result;
    }
    // +++++++++++++++++++++++++++++++++++
    visibleRuleNodes() {
        this.rememberRuleExpandedTreeNodes(this.treeRuleControl, this.expandedRuleNodeSet);
        const result = [];
        function addExpandedRuleChildren(node, expanded) {
            result.push(node);
            if (expanded.has(node.id)) {
                node.children.map(child => addExpandedRuleChildren(child, expanded));
            }
        }
        this.dataRuleSource.data.forEach(node => {
            addExpandedRuleChildren(node, this.expandedRuleNodeSet);
        });
        return result;
    }
    // ***********************************
    /**
     * Handle the drop - here we rearrange the data based on the drop event,
     * then rebuild the tree.
     * */
    drop(event) {
        // console.log('origin/destination', event.previousIndex, event.currentIndex);
        // ignore drops outside of the tree
        if (!event.isPointerOverContainer)
            return;
        // construct a list of visible nodes, this will match the DOM.
        // the cdkDragDrop event.currentIndex jives with visible nodes.
        // it calls rememberExpandedTreeNodes to persist expand state
        const visibleNodes = this.visibleNodes();
        // deep clone the data source so we can mutate it
        const changedData = this.helpers.json(this.helpers.str(this.dataSource.data));
        // recursive find function to find siblings of node
        function findNodeSiblings(arr, id) {
            let result, subResult;
            arr.forEach(item => {
                if (item.id === id) {
                    result = arr;
                }
                else if (item.children) {
                    subResult = findNodeSiblings(item.children, id);
                    if (subResult)
                        result = subResult;
                }
            });
            return result;
        }
        // remove the node from its old place
        const node = event.item.data;
        const siblings = findNodeSiblings(changedData, node.id);
        const siblingIndex = siblings.findIndex(n => n.id === node.id);
        const nodeToInsert = siblings.splice(siblingIndex, 1)[0];
        // determine where to insert the node
        const nodeAtDest = visibleNodes[event.currentIndex];
        if (nodeAtDest.id === nodeToInsert.id)
            return;
        // determine drop index relative to destination array
        let relativeIndex = event.currentIndex; // default if no parent
        const nodeAtDestFlatNode = this.treeControl.dataNodes.find(n => nodeAtDest.id === n.id);
        const parent = this.getParentNode(nodeAtDestFlatNode);
        if (parent) {
            const parentIndex = visibleNodes.findIndex(n => n.id === parent.id) + 1;
            relativeIndex = event.currentIndex - parentIndex;
        }
        // insert node 
        const newSiblings = findNodeSiblings(changedData, nodeAtDest.id);
        if (!newSiblings)
            return;
        newSiblings.splice(relativeIndex, 0, nodeToInsert);
        // rebuild tree with mutated data
        this.rebuildTreeForData(changedData);
    }
    // +++++++++++++++++++++++++++++++++++
    dropRule(event) {
        // console.log('origin/destination', event.previousIndex, event.currentIndex);
        // ignore drops outside of the tree
        if (!event.isPointerOverContainer)
            return;
        // construct a list of visible nodes, this will match the DOM.
        // the cdkDragDrop event.currentIndex jives with visible nodes.
        // it calls rememberExpandedTreeNodes to persist expand state
        const visibleNodes = this.visibleRuleNodes();
        // deep clone the data source so we can mutate it
        const changedData = this.helpers.json(this.helpers.str(this.dataRuleSource.data));
        // recursive find function to find siblings of node
        function findNodeSiblings(arr, id) {
            let result, subResult;
            arr.forEach(item => {
                if (item.id === id) {
                    result = arr;
                }
                else if (item.children) {
                    subResult = findNodeSiblings(item.children, id);
                    if (subResult)
                        result = subResult;
                }
            });
            return result;
        }
        // remove the node from its old place
        const node = event.item.data;
        const siblings = findNodeSiblings(changedData, node.id);
        const siblingIndex = siblings.findIndex(n => n.id === node.id);
        const nodeToInsert = siblings.splice(siblingIndex, 1)[0];
        // determine where to insert the node
        const nodeAtDest = visibleNodes[event.currentIndex];
        if (nodeAtDest.id === nodeToInsert.id)
            return;
        // determine drop index relative to destination array
        let relativeIndex = event.currentIndex; // default if no parent
        const nodeAtDestFlatNode = this.treeRuleControl.dataNodes.find(n => nodeAtDest.id === n.id);
        const parent = this.getRuleParentNode(nodeAtDestFlatNode);
        if (parent) {
            const parentIndex = visibleNodes.findIndex(n => n.id === parent.id) + 1;
            relativeIndex = event.currentIndex - parentIndex;
        }
        // insert node 
        const newSiblings = findNodeSiblings(changedData, nodeAtDest.id);
        if (!newSiblings)
            return;
        newSiblings.splice(relativeIndex, 0, nodeToInsert);
        // rebuild tree with mutated data
        this.rebuildRuleTreeForData(changedData);
    }
    // ***********************************
    /**
     * Experimental - opening tree nodes as you drag over them
     */
    dragStart() {
        this.dragging = true;
    }
    dragEnd() {
        this.dragging = false;
    }
    dragHover(node) {
        if (this.dragging) {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(() => {
                this.treeControl.expand(node);
            }, this.expandDelay);
        }
    }
    // +++++++++++++++++++++++++++++++++++
    dragRuleHover(node) {
        if (this.dragging) {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = setTimeout(() => {
                this.treeRuleControl.expand(node);
            }, this.expandDelay);
        }
    }
    // ***********************************
    dragHoverEnd() {
        if (this.dragging) {
            clearTimeout(this.expandTimeout);
        }
    }
    // +++++++++++++++++++++++++++++++++++
    dragRuleHoverEnd() {
        if (this.dragging) {
            clearTimeout(this.expandTimeout);
        }
    }
    // ***********************************
    /**
     * The following methods are for persisting the tree expand state
     * after being rebuilt
     */
    rebuildTreeForData(data) {
        this.rememberExpandedTreeNodes(this.treeControl, this.expandedNodeSet);
        this.dataSource.data = data;
        this.forgetMissingExpandedNodes(this.treeControl, this.expandedNodeSet);
        this.expandNodesById(this.treeControl.dataNodes, Array.from(this.expandedNodeSet));
    }
    // +++++++++++++++++++++++++++++++++++
    rebuildRuleTreeForData(data) {
        this.rememberRuleExpandedTreeNodes(this.treeRuleControl, this.expandedRuleNodeSet);
        this.dataRuleSource.data = data;
        this.forgetRuleMissingExpandedNodes(this.treeRuleControl, this.expandedRuleNodeSet);
        this.expandNodesById(this.treeRuleControl.dataNodes, Array.from(this.expandedRuleNodeSet));
    }
    // ***********************************
    rememberRuleExpandedTreeNodes(treeControl, expandedNodeSet) {
        if (treeControl.dataNodes) {
            treeControl.dataNodes.forEach((node) => {
                if (treeControl.isExpandable(node) && treeControl.isExpanded(node)) {
                    // capture latest expanded state
                    expandedNodeSet.add(node.id);
                }
            });
        }
    }
    rememberExpandedTreeNodes(treeControl, expandedNodeSet) {
        if (treeControl.dataNodes) {
            treeControl.dataNodes.forEach((node) => {
                if (treeControl.isExpandable(node) && treeControl.isExpanded(node)) {
                    // capture latest expanded state
                    expandedNodeSet.add(node.id);
                }
            });
        }
    }
    forgetMissingExpandedNodes(treeControl, expandedNodeSet) {
        if (treeControl.dataNodes) {
            expandedNodeSet.forEach((nodeId) => {
                // maintain expanded node state
                if (!treeControl.dataNodes.find((n) => n.id === nodeId)) {
                    // if the tree doesn't have the previous node, remove it from the expanded list
                    expandedNodeSet.delete(nodeId);
                }
            });
        }
    }
    forgetRuleMissingExpandedNodes(treeControl, expandedNodeSet) {
        if (treeControl.dataNodes) {
            expandedNodeSet.forEach((nodeId) => {
                // maintain expanded node state
                if (!treeControl.dataNodes.find((n) => n.id === nodeId)) {
                    // if the tree doesn't have the previous node, remove it from the expanded list
                    expandedNodeSet.delete(nodeId);
                }
            });
        }
    }
    expandNodesById(flatNodes, ids) {
        if (!flatNodes || flatNodes.length === 0)
            return;
        const idSet = new Set(ids);
        return flatNodes.forEach((node) => {
            if (idSet.has(node.id)) {
                this.treeControl.expand(node);
                let parent = this.getParentNode(node);
                while (parent) {
                    this.treeControl.expand(parent);
                    parent = this.getParentNode(parent);
                }
            }
        });
    }
    getParentNode(node) {
        const currentLevel = node.level;
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    // +++++++++++++++++++++++++++++++++++
    getRuleParentNode(node) {
        const currentLevel = node.level;
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeRuleControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeRuleControl.dataNodes[i];
            if (currentNode.level < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    cnvRule(obj) {
        console.dir(obj);
        let kys = Object.keys(obj);
        return kys.reduce((cm, cr) => { cm[cr] = this.cnvRuleChild(obj[cr]); return cm; }, {});
    }
    cnvRuleChild(ths) {
        return ths.reduce((cum, cur, idx) => { cum[cur.rule_name] = `(${cur.rule_id}) ${cur.rule_method} ${cur.rule_path}`; return cum; }, {});
    }
    fetchAssignmentRules(assignmentId) {
        this.http.getRules(assignmentId, true, true).subscribe((d) => {
            if (d.response == 200) {
                this.gradingRules = this.cnvRule(this.helpers.json(d.data.message));
                this.dataStorObj.initializeRule(this.helpers.str(this.gradingRules));
            }
            else {
                alert(`${d.data.message.toString()}`);
            }
        });
    }
}
GradesPlaceholderComponent.ɵfac = function GradesPlaceholderComponent_Factory(t) { return new (t || GradesPlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileAndRuleDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__["ByteGraderHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_7__["AssignmentsStoreService"])); };
GradesPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GradesPlaceholderComponent, selectors: [["grades-placeholder", 8, "component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([FileAndRuleDatabase])], attrs: _c0, decls: 10, vars: 3, consts: [["cdkDropList", "", 3, "dataSource", "treeControl", "cdkDropListDropped"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", "cdkDrag", "", 3, "cdkDragData", "mouseenter", "mouseleave", "cdkDragStarted", "cdkDragReleased", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", "cdkDrag", "", 3, "cdkDragData", "mouseenter", "mouseleave", "cdkDragStarted", "cdkDragReleased", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["href", "https://medium.com/briebug-blog/angular-implementing-drag-and-drop-in-a-material-tree-f96b9fe40f81", "target", "_blank"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", "cdkDrag", "", 3, "cdkDragData", "mouseenter", "mouseleave", "cdkDragStarted", "cdkDragReleased"], ["mat-icon-button", "", "disabled", ""], ["matTreeNodePadding", "", "cdkDrag", "", 3, "cdkDragData", "mouseenter", "mouseleave", "cdkDragStarted", "cdkDragReleased"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function GradesPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Drag and drop the tree nodes. Move them within the same level, or across different levels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tree", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function GradesPlaceholderComponent_Template_mat_tree_cdkDropListDropped_2_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GradesPlaceholderComponent_mat_tree_node_3_Template, 3, 3, "mat-tree-node", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GradesPlaceholderComponent_mat_tree_node_4_Template, 5, 5, "mat-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Check out the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "complete write-up here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDropList"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodePadding"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDrag"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: Roboto, Arial, sans-serif;\n    margin: 0;\n}\n\n\n.basic-container[_ngcontent-%COMP%] {\n    padding: 30px;\n}\n\n\n.version-info[_ngcontent-%COMP%] {\n    font-size: 8pt;\n    float: right;\n}\n\n\n\n\n\n.mat-tree-node[_ngcontent-%COMP%] {\n    background-color: rgb(66, 157, 253);\n    color: white;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: move;\n    &.cdk-drag-preview {\n        @include mat-elevation(12);\n    }\n    &.cdk-drag-placeholder {\n        opacity: 0;\n    }\n}\n\n\n\n\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n\n\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\nbutton[_ngcontent-%COMP%] {\n    color: white !important;\n    background-color: black !important;\n    border-radius: 50% !important;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZGVzL2dyYWRlcy1wbGFjZWhvbGRlci9ncmFkZXMtcGxhY2Vob2xkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7OztBQUcxRSwrRkFBK0Y7OztBQUcvRiwwREFBMEQ7OztBQUUxRDtJQUNJLHNDQUFzQztJQUN0QyxTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7O0FBR0E7O0VBRUU7OztBQUVGO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7O0FBR0EsNENBQTRDOzs7QUFFNUM7SUFDSSxzREFBc0Q7QUFDMUQ7OztBQUdBLHVCQUF1Qjs7O0FBRXZCO0lBQ0ksc0RBQXNEO0FBQzFEOzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlcy9ncmFkZXMtcGxhY2Vob2xkZXIvZ3JhZGVzLXBsYWNlaG9sZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0ICcvbm9kZWFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzJzsgKi9cblxuXG4vKiBAaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzJzsgKi9cblxuXG4vKiBAaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwnOyAqL1xuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5iYXNpYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi52ZXJzaW9uLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogOHB0O1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuXG4vKipcbiAqIFRSRUUgRFJBRyBBTkQgRFJPUCBTVFlMSU5HXG4gKi9cblxuLm1hdC10cmVlLW5vZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTU3LCAyNTMpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgJi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICAgICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigxMik7XG4gICAgfVxuICAgICYuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuXG4vKiBpdGVtcyBtb3ZpbmcgYXdheSB0byBtYWtlIHJvb20gZm9yIGRyb3AgKi9cblxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLm1hdC10cmVlLW5vZGU6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuXG4vKiBpdGVtIGJlaW5nIGRyb3BwZWQgKi9cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GradesPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'grades-placeholder.component',
                templateUrl: 'grades-placeholder.component.html',
                styleUrls: ['grades-placeholder.component.css'],
                providers: [FileAndRuleDatabase]
            }]
    }], function () { return [{ type: FileAndRuleDatabase }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: _services_byte_grader_helper_service__WEBPACK_IMPORTED_MODULE_4__["ByteGraderHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: src_app_services_stor_assignments_stor_service__WEBPACK_IMPORTED_MODULE_7__["AssignmentsStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/grades/grades-reviewer/grades-reviewer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/grades/grades-reviewer/grades-reviewer.component.ts ***!
  \*********************************************************************/
/*! exports provided: GradesReviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesReviewerComponent", function() { return GradesReviewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GradesReviewerComponent {
    constructor() { }
    ngOnInit() {
    }
}
GradesReviewerComponent.ɵfac = function GradesReviewerComponent_Factory(t) { return new (t || GradesReviewerComponent)(); };
GradesReviewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradesReviewerComponent, selectors: [["app-grades-reviewer"]], decls: 2, vars: 0, template: function GradesReviewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grades-reviewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlcy9ncmFkZXMtcmV2aWV3ZXIvZ3JhZGVzLXJldmlld2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradesReviewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grades-reviewer',
                templateUrl: './grades-reviewer.component.html',
                styleUrls: ['./grades-reviewer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/grades/grades-viewer/grades-viewer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/grades/grades-viewer/grades-viewer.component.ts ***!
  \*****************************************************************/
/*! exports provided: GradesViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesViewerComponent", function() { return GradesViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GradesViewerComponent {
    constructor() { }
    ngOnInit() {
    }
}
GradesViewerComponent.ɵfac = function GradesViewerComponent_Factory(t) { return new (t || GradesViewerComponent)(); };
GradesViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradesViewerComponent, selectors: [["app-grades-viewer"]], decls: 2, vars: 0, template: function GradesViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "grades-viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlcy9ncmFkZXMtdmlld2VyL2dyYWRlcy12aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradesViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grades-viewer',
                templateUrl: './grades-viewer.component.html',
                styleUrls: ['./grades-viewer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/grades/grades.component.ts":
/*!********************************************!*\
  !*** ./src/app/grades/grades.component.ts ***!
  \********************************************/
/*! exports provided: GradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesComponent", function() { return GradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GradesComponent {
    constructor() { }
    ngOnInit() {
    }
}
GradesComponent.ɵfac = function GradesComponent_Factory(t) { return new (t || GradesComponent)(); };
GradesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradesComponent, selectors: [["app-grades"]], decls: 1, vars: 0, template: function GradesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWRlcy9ncmFkZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grades',
                templateUrl: './grades.component.html',
                styleUrls: ['./grades.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-button/menu-button.component */ "./src/app/header/menu-button/menu-button.component.ts");
/* harmony import */ var _menu_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-dropdown/menu-dropdown.component */ "./src/app/header/menu-dropdown/menu-dropdown.component.ts");





class HeaderComponent {
    constructor() {
        this.selectedPath = "Assignments";
        this.title = (this.title) ? this.title : "ByteGrader";
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { title: "title" }, decls: 12, vars: 1, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "bg-black", 2, "background-color", "#E10A0A"], ["href", "#", 1, "navbar-brand", "bg-main", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["customClass", "", "title", "Assignments", "targetUrl", "/assignments"], ["customClass", "", "title", "Grades", "targetUrl", "/grades"], ["customClass", "", "title", "Submit Assignment", "targetUrl", "/submissions"], [1, "navbar-nav"], ["isAlignedRight", "true", "title", "Manage", "targetUrl", "/", "customClass", "", "subMenuItems", "[\n              { 'customClass': '', 'targetUrl': '/nada', 'title': 'Save Data', 'isolated': false, 'action': null },\n              { 'customClass': '', 'targetUrl': '/nada', 'title': 'Fetch Data', 'isolated': false, 'action': null },\n              {'customClass': '', 'targetUrl': '/nada', 'title': 'Something Else Here', 'isolated': true, 'action': null }\n              ]"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "byte-menu-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "byte-menu-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "byte-menu-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "byte-menu-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_2__["MenuButtonComponent"], _menu_dropdown_menu_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["MenuDropdownComponent"]], styles: ["byte-menu-dropdown[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n\n.active[_ngcontent-%COMP%] {\n    font-weight: bold !important;\n    color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ5dGUtbWVudS1kcm9wZG93biB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/header/menu-button/menu-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/header/menu-button/menu-button.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButtonComponent", function() { return MenuButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuButtonComponent.ɵfac = function MenuButtonComponent_Factory(t) { return new (t || MenuButtonComponent)(); };
MenuButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuButtonComponent, selectors: [["byte-menu-button"]], inputs: { customClass: "customClass", targetUrl: "targetUrl", title: "title" }, decls: 2, vars: 5, consts: [["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "innerText"]], template: function MenuButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-item ", ctx.customClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.targetUrl)("innerText", ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'byte-menu-button',
                templateUrl: './menu-button.component.html',
                styleUrls: ['./menu-button.component.css']
            }]
    }], function () { return []; }, { customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/header/menu-dropdown/menu-dropdown.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/header/menu-dropdown/menu-dropdown.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDropdownComponent", function() { return MenuDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MenuDropdownComponent_span_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
function MenuDropdownComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuDropdownComponent_span_3_div_1_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuDropdownComponent_span_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const menuItem_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigateTo(menuItem_r1.targetUrl); })("click", function MenuDropdownComponent_span_3_Template_a_click_2_listener() { const menuItem_r1 = ctx.$implicit; return menuItem_r1.action; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.isolated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r0.customClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.title);
} }
const _c0 = function (a0) { return { "dropdown-menu-right": a0 }; };
class MenuDropdownComponent {
    constructor(router) {
        this.router = router;
        this.customClass = "";
        this.targetUrl = "";
        this.title = "";
        this.subMenuItems = "";
        this.isAlignedRight = "";
    }
    ngOnInit() {
        let rgx = new RegExp(/\{(.*?)\}/ig);
        this.subMenuItems = this.subMenuItems
            .replace(/\'/ig, '"')
            .match(rgx)
            .map(itm => JSON.parse(itm), []);
    }
    doDisplayElements() {
        console.dir(this.subMenuItems);
    }
    getAlignment() {
        let v = this.isAlignedRight.toLowerCase();
        return (v == "true" || v == "y" || v == "1" || v == "yes") ? true : false;
    }
    navigateTo(navigationPath = '/') {
        let navRoute = navigationPath.split('/').filter(a => a);
        navRoute[0] = `${navRoute[0] ? '/' + navRoute[0] : '/'}`;
        this.router.navigate(navRoute);
    }
}
MenuDropdownComponent.ɵfac = function MenuDropdownComponent_Factory(t) { return new (t || MenuDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuDropdownComponent, selectors: [["byte-menu-dropdown"]], inputs: { customClass: "customClass", targetUrl: "targetUrl", title: "title", subMenuItems: "subMenuItems", isAlignedRight: "isAlignedRight" }, decls: 4, vars: 5, consts: [[1, "nav-item", "dropdown"], ["routerLinkActive", "active", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 3, "innerText", "click"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "bg-black", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "dropdown-divider", 4, "ngIf"], [3, "click"], [1, "dropdown-divider"]], template: function MenuDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuDropdownComponent_Template_a_click_1_listener() { return ctx.navigateTo(ctx.targetUrl); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuDropdownComponent_span_3_Template, 4, 5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.getAlignment()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subMenuItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".bg-black[_ngcontent-%COMP%] {\n    background-color: #2D2D2D !important;\n    color: white !important;\n    transition-duration: 100ms;\n}\n\n.bg-black[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%] {\n    color: white !important;\n    transition-duration: 100ms;\n}\n\n.bg-black[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]:hover {\n    color: #E10A0A !important;\n    transform: skewY(-1.5deg);\n    font-weight: bold;\n    transition-duration: 100ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUtZHJvcGRvd24vbWVudS1kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL21lbnUtZHJvcGRvd24vbWVudS1kcm9wZG93bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQyRDJEICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG59XG5cbi5iZy1ibGFjaz4qPi5kcm9wZG93bi1pdGVtIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbn1cblxuLmJnLWJsYWNrPio+LmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiAjRTEwQTBBICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMS41ZGVnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'byte-menu-dropdown',
                templateUrl: './menu-dropdown.component.html',
                styleUrls: ['./menu-dropdown.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subMenuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAlignedRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/header/menu-right/menu-right.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/header/menu-right/menu-right.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRightComponent", function() { return MenuRightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class MenuRightComponent {
    constructor() {
        this.searchString = "";
    }
    ngOnInit() {
    }
    onInputChange(event) {
        this.searchString = event.target.value;
    }
    onSearchClick(event) {
        event.preventDefault();
        console.log("search clicked!");
    }
}
MenuRightComponent.ɵfac = function MenuRightComponent_Factory(t) { return new (t || MenuRightComponent)(); };
MenuRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuRightComponent, selectors: [["byte-menu-right"]], inputs: { customClass: "customClass", targetUrl: "targetUrl", title: "title" }, decls: 4, vars: 4, consts: [["type", "search", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "input"], ["type", "submit", 1, "btn", "btn-outline-light", "my-2", "my-sm-0", 3, "disabled", "click"]], template: function MenuRightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MenuRightComponent_Template_input_input_1_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuRightComponent_Template_button_click_2_listener($event) { return ctx.onSearchClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("form-inline ", ctx.customClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.searchString.length <= 2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".btn[_ngcontent-%COMP%]:disabled {\n    cursor: not-allowed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21lbnUtcmlnaHQvbWVudS1yaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL21lbnUtcmlnaHQvbWVudS1yaWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'byte-menu-right',
                templateUrl: './menu-right.component.html',
                styleUrls: ['./menu-right.component.css']
            }]
    }], function () { return []; }, { customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 16, vars: 0, consts: [[1, "page-wrap", "d-flex", "flex-row", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-12", "text-center"], [1, "display-1", "d-block"], [1, "uno"], [1, "dos"], [1, "tres"], [1, "mb-4", "lead", "not-found-text"], [1, "homing-button"], ["routerLink", "/", 1, "btn", "btn-link"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The page you are looking for was not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to Earth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".uno[_ngcontent-%COMP%] {\n    color: #2D2D2D;\n    text-shadow: .04em .02em lightgrey;\n}\n\n.dos[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    \n    text-shadow: .04em .02em #2D2D2D;\n}\n\n.tres[_ngcontent-%COMP%] {\n    color: #E11808;\n    text-shadow: .04em .02em #2D2D2D;\n}\n\nspan[_ngcontent-%COMP%] {\n    border-bottom: .02em solid #2d2d2d;\n    transform: skewY(5.5deg);\n    margin: 0 0 .7em 0 !important;\n}\n\n.not-found-text[_ngcontent-%COMP%] {\n    color: white !important;\n    background-color: black !important;\n    margin: 0.3em !important;\n    text-shadow: .05em .04em gray !important;\n    font-size: 1.3em !important;\n    font-style: italic !important;\n    box-shadow: 0.1em 0.2em lightgrey !important;\n    padding: 0.4em !important;\n    border-radius: .25em .5em .75em 1em;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 2em;\n}\n\n.homing-button[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 9em;\n    min-width: 9em;\n    min-height: 9em;\n    max-height: 9em;\n    text-align: center;\n    padding: 1em;\n    border-radius: 10em;\n    box-shadow: 0.4em 0.4em #2D2D2D !important;\n    transition-duration: 1s;\n}\n\n.homing-button[_ngcontent-%COMP%]:hover {\n    transition-duration: 1s;\n    box-shadow: 0.4em 0.4em #E11808 !important;\n}\n\na[_ngcontent-%COMP%] {\n    margin-top: 3.5em;\n    text-decoration: none !important;\n    font-size: .8em;\n    color: black !important;\n    font-weight: bold;\n    text-shadow: .05em .04em lightgrey !important;\n    border: .2em solid #2d2d2d;\n}\n\na[_ngcontent-%COMP%]:hover {\n    text-decoration: none !important;\n    color: #2D2D2D !important;\n    text-shadow: .05em .04em #2D2D2D !important;\n    border: .2em solid #E11808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsd0NBQXdDO0lBQ3hDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bm8ge1xuICAgIGNvbG9yOiAjMkQyRDJEO1xuICAgIHRleHQtc2hhZG93OiAuMDRlbSAuMDJlbSBsaWdodGdyZXk7XG59XG5cbi5kb3Mge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIC8qIHRleHQtc2hhZG93OiAycHggMnB4ICNFMTE4MDg7ICovXG4gICAgdGV4dC1zaGFkb3c6IC4wNGVtIC4wMmVtICMyRDJEMkQ7XG59XG5cbi50cmVzIHtcbiAgICBjb2xvcjogI0UxMTgwODtcbiAgICB0ZXh0LXNoYWRvdzogLjA0ZW0gLjAyZW0gIzJEMkQyRDtcbn1cblxuc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogLjAyZW0gc29saWQgIzJkMmQyZDtcbiAgICB0cmFuc2Zvcm06IHNrZXdZKDUuNWRlZyk7XG4gICAgbWFyZ2luOiAwIDAgLjdlbSAwICFpbXBvcnRhbnQ7XG59XG5cbi5ub3QtZm91bmQtdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAuM2VtICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1zaGFkb3c6IC4wNWVtIC4wNGVtIGdyYXkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMC4xZW0gMC4yZW0gbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMC40ZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbSAuNWVtIC43NWVtIDFlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uaG9taW5nLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA5ZW07XG4gICAgbWluLXdpZHRoOiA5ZW07XG4gICAgbWluLWhlaWdodDogOWVtO1xuICAgIG1heC1oZWlnaHQ6IDllbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwZW07XG4gICAgYm94LXNoYWRvdzogMC40ZW0gMC40ZW0gIzJEMkQyRCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4uaG9taW5nLWJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYm94LXNoYWRvdzogMC40ZW0gMC40ZW0gI0UxMTgwOCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBtYXJnaW4tdG9wOiAzLjVlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1zaGFkb3c6IC4wNWVtIC4wNGVtIGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogLjJlbSBzb2xpZCAjMmQyZDJkO1xufVxuXG5hOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzJEMkQyRCAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAuMDVlbSAuMDRlbSAjMkQyRDJEICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAuMmVtIHNvbGlkICNFMTE4MDg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-intercept.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/auth-intercept.service.ts ***!
  \****************************************************/
/*! exports provided: AuthInterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptService", function() { return AuthInterceptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");



// @Injectable()
class AuthInterceptService {
    constructor(_localStorage) {
        this._localStorage = _localStorage;
    }
    intercept(req, next) {
        const authToken = this._localStorage.get("auth");
        if (!authToken)
            return next.handle(req);
        const modifiedRequest = req.clone({
            headers: req.headers.set('Grader-Authorization', `Bearer ${authToken}`),
        });
        return next.handle(modifiedRequest);
    }
}
AuthInterceptService.ɵfac = function AuthInterceptService_Factory(t) { return new (t || AuthInterceptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
AuthInterceptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptService, factory: AuthInterceptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // canActivate(): boolean {
    //   if (!this.auth.isAuthenticated()) {
    //     this.router.navigate(['auth']);
    //     return false;
    //   }
    //   return true;
    // }
    canActivate(next, state) {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['auth']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");




class AuthService {
    constructor(_localStorage) {
        this._localStorage = _localStorage;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
    }
    // ...
    isAuthenticated() {
        const token = this._localStorage.get('auth');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/byte-grader-helper.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/byte-grader-helper.service.ts ***!
  \********************************************************/
/*! exports provided: ByteGraderHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteGraderHelperService", function() { return ByteGraderHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");






class ByteGraderHelperService {
    constructor(_localStorage) {
        this._localStorage = _localStorage;
        this.jsonPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-GB');
    }
    printPDF(elementID, target) {
        const domElement = document.getElementById(elementID);
        const ideal_height = 2040;
        alert(domElement.clientHeight);
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(domElement, { onclone: (document) => {
                document.getElementById('unprintable').style.visibility = 'hidden';
            } }).then(canvas => {
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('p', 'mm', 'letter');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save(`${target}.pdf`);
        });
    }
    clone(data) {
        try {
            return this.json(this.str(data));
        }
        catch (error) {
            return data;
        }
    }
    colorize(method) {
        switch (method.toLowerCase().replace(/\s/ig, '')) {
            case 'get':
                return 'green';
                break;
            case 'post':
                return 'brown';
                break;
            case 'put':
                return 'orange';
                break;
            case 'delete':
                return 'crimson';
                break;
            default:
                return 'yellow';
                break;
        }
    }
    jsonify(data) {
        //@ Format the data to prettified JSON
        return `<pre>${this.jsonPipe.transform(this.json(data))}</pre>`;
    }
    plainJsonify(data) {
        return this.jsonPipe.transform(this.json(data));
    }
    dateify(data, color) {
        //@ Format the data into a date
        color = color ? `style='color:${color}'` : '';
        return `<pre ${color}>${data ? this.pipe.transform(data.replace(/\s\+/ig, '+'), 'medium') : 'not specified'}</pre>`;
    }
    plainDateify(data) {
        return data ? this.pipe.transform(data.replace(/\s\+/ig, '+'), 'medium') : 'not specified';
    }
    stringify(data, color) {
        color = color ? `style='color:${color}'` : '';
        return `<pre ${color}>${data}</pre>`;
    }
    plainStringify(data) {
        return this.str(data);
    }
    json(obj) {
        try {
            return (typeof (obj) === 'object') ? obj : JSON.parse(obj.replace(/&quot;/ig, '"'));
        }
        catch (e) {
            return obj;
        }
    }
    str(obj) {
        try {
            return (typeof (obj) === "object") ? JSON.stringify(obj) : obj;
        }
        catch (error) {
            return obj;
        }
    }
    getPageHeight() {
        const body = document.body, html = document.documentElement;
        return Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 500;
    }
    getUserInfo() {
        const userToken = this._localStorage.get('auth');
        if (!userToken)
            return {};
        return this.json(atob(userToken.split('.')[1]));
    }
}
ByteGraderHelperService.ɵfac = function ByteGraderHelperService_Factory(t) { return new (t || ByteGraderHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
ByteGraderHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ByteGraderHelperService, factory: ByteGraderHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ByteGraderHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class HttpService {
    constructor(http) {
        this.http = http;
        this.tableNames = ['users', 'routes', 'chainings', 'attempts', 'assignments'];
        this.applicationHost = "/618985/api.php/"; // `${window.location.href}/api.php/`; //"http://localhost/"; 
    }
    post(url, data) {
        return this.http.post(url, data);
    }
    getLocal(data) {
        return this.http.get(this.applicationHost, { params: data });
    }
    postLocal(data) {
        return this.http.post(this.applicationHost, data);
    }
    //=============================================================================
    //# COUNT SUMMARY
    //=============================================================================
    countAllRecords() {
        return Promise.all(this.tableNames.map(tableName => new Promise((resolve, reject) => this.http.post(this.applicationHost, { command: 'count', table: tableName })
            .subscribe((fieldData) => {
            resolve(fieldData.data.message);
        }, err => {
            reject(err);
        }))));
    }
    //=============================================================================
    //# USERS
    //=============================================================================
    login(userCredentials) {
        return this.http.post(`${this.applicationHost}?command=auth`, userCredentials, { headers: { "content-type": "application/json" } });
    }
    addUser(userData) {
        return this.http.post(`${this.applicationHost}?command=add&table=user`, userData, { headers: { "content-type": "application/json" } });
    }
    getUsers() {
        return this.http.get(`${this.applicationHost}?command=get&table=users`);
    }
    //=============================================================================
    //# ASSIGNMENTS
    //=============================================================================
    addAssignment(assignmentData) {
        assignmentData['assignment_due'] = new Date(parseInt(assignmentData['assignment_due']['year']), parseInt(assignmentData['assignment_due']['month']), parseInt(assignmentData['assignment_due']['day'])).toISOString();
        return this.http.post(`${this.applicationHost}?command=add&table=assignment`, assignmentData, { headers: { "content-type": "application/json" } });
    }
    getAssignments(id) {
        return this.http.get(`${this.applicationHost}?command=get&table=assignments${id ? '&id=' + id : ''}`);
    }
    //=============================================================================
    //# RULES
    //=============================================================================
    addRule(ruleData) {
        return this.http.post(`${this.applicationHost}?command=add&table=route`, ruleData, { headers: { "content-type": "application/json" } });
    }
    getRules(id, isIdAssignment = false, grouped = false) {
        return this.http.get(`${this.applicationHost}?command=get&table=routes${id ? '&id=' + id + '&byAssignment=' + isIdAssignment + '&grouped=' + grouped : ''}`);
    }
    //=============================================================================
    //# CHAINING
    //=============================================================================
    addChaining(chaining) {
        return this.http.post(`${this.applicationHost}?command=add&table=chaining`, chaining, { headers: { "content-type": "application/json" } });
    }
    getChaining() {
        return this.http.get(`${this.applicationHost}?command=get&table=chaining`);
    }
    //=============================================================================
    //# ATTEMPTS
    //=============================================================================
    addAttempt(attempt) {
        return this.http.post(`${this.applicationHost}?command=add&table=attempt`, attempt, { headers: { "content-type": "application/json" } });
    }
    getAttempts(assignment, id) {
        return this.http.get(`${this.applicationHost}?command=get&table=attempts${assignment ? '&assignment=' + assignment : ''}${id ? '&id=' + id : ''}`);
    }
    //=============================================================================
    //# GRADING
    //=============================================================================
    doGrading(referenceObject) {
        return this.http.post(`${this.applicationHost}?command=grade`, referenceObject, { headers: { "content-type": "application/json" } });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/static-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/static-data.service.ts ***!
  \*************************************************/
/*! exports provided: StaticDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataService", function() { return StaticDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StaticDataService {
    constructor() {
        this.mime_types = [{ "extension": ".abw", "description": "AbiWord document", "mime": "application/x-abiword" }, { "extension": ".arc", "description": "Archive document (multiple files embedded)", "mime": "application/x-freearc" }, { "extension": ".avi", "description": "AVI: Audio Video Interleave", "mime": "video/x-msvideo" }, { "extension": ".azw", "description": "Amazon Kindle eBook format", "mime": "application/vnd.amazon.ebook" }, { "extension": ".bin", "description": "Any kind of binary data", "mime": "application/octet-stream" }, { "extension": ".bmp", "description": "Windows OS/2 Bitmap Graphics", "mime": "image/bmp" }, { "extension": ".bz", "description": "BZip archive", "mime": "application/x-bzip" }, { "extension": ".bz2", "description": "BZip2 archive", "mime": "application/x-bzip2" }, { "extension": ".csh", "description": "C-Shell script", "mime": "application/x-csh" }, { "extension": ".css", "description": "Cascading Style Sheets (CSS)", "mime": "text/css" }, { "extension": ".csv", "description": "Comma-separated values (CSV)", "mime": "text/csv" }, { "extension": ".doc", "description": "Microsoft Word", "mime": "application/msword" }, { "extension": ".docx", "description": "Microsoft Word (OpenXML)", "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }, { "extension": ".eot", "description": "MS Embedded OpenType fonts", "mime": "application/vnd.ms-fontobject" }, { "extension": ".epub", "description": "Electronic publication (EPUB)", "mime": "application/epub+zip" }, { "extension": ".gz", "description": "GZip Compressed Archive", "mime": "application/gzip" }, { "extension": ".gif", "description": "Graphics Interchange Format (GIF)", "mime": "image/gif" }, { "extension": ".html", "description": "HyperText Markup Language (HTML)", "mime": "text/html" }, { "extension": ".ico", "description": "Icon format", "mime": "image/vnd.microsoft.icon" }, { "extension": ".ics", "description": "iCalendar format", "mime": "text/calendar" }, { "extension": ".jar", "description": "Java Archive (JAR)", "mime": "application/java-archive" }, { "extension": ".jpg", "description": "JPEG images", "mime": "image/jpeg" }, { "extension": ".json", "description": "JSON format", "mime": "application/json" }, { "extension": ".jsonld", "description": "JSON-LD format", "mime": "application/ld+json" }, { "extension": ".midi", "description": "Musical Instrument Digital Interface (MIDI)", "mime": "audio/midi audio/x-midi" }, { "extension": ".mjs", "description": "JavaScript module", "mime": "text/javascript" }, { "extension": ".mp3", "description": "MP3 audio", "mime": "audio/mpeg" }, { "extension": ".mpeg", "description": "MPEG Video", "mime": "video/mpeg" }, { "extension": ".mpkg", "description": "Apple Installer Package", "mime": "application/vnd.apple.installer+xml" }, { "extension": ".odp", "description": "OpenDocument presentation document", "mime": "application/vnd.oasis.opendocument.presentation" }, { "extension": ".ods", "description": "OpenDocument spreadsheet document", "mime": "application/vnd.oasis.opendocument.spreadsheet" }, { "extension": ".odt", "description": "OpenDocument text document", "mime": "application/vnd.oasis.opendocument.text" }, { "extension": ".oga", "description": "OGG audio", "mime": "audio/ogg" }, { "extension": ".ogv", "description": "OGG video", "mime": "video/ogg" }, { "extension": ".ogx", "description": "OGG", "mime": "application/ogg" }, { "extension": ".opus", "description": "Opus audio", "mime": "audio/opus" }, { "extension": ".otf", "description": "OpenType font", "mime": "font/otf" }, { "extension": ".png", "description": "Portable Network Graphics", "mime": "image/png" }, { "extension": ".pdf", "description": "Adobe Portable Document Format (PDF)", "mime": "application/pdf" }, { "extension": ".php", "description": "Hypertext Preprocessor (Personal Home Page)", "mime": "application/x-httpd-php" }, { "extension": ".ppt", "description": "Microsoft PowerPoint", "mime": "application/vnd.ms-powerpoint" }, { "extension": ".pptx", "description": "Microsoft PowerPoint (OpenXML)", "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation" }, { "extension": ".rar", "description": "RAR archive", "mime": "application/vnd.rar" }, { "extension": ".rtf", "description": "Rich Text Format (RTF)", "mime": "application/rtf" }, { "extension": ".sh", "description": "Bourne shell script", "mime": "application/x-sh" }, { "extension": ".svg", "description": "Scalable Vector Graphics (SVG)", "mime": "image/svg+xml" }, { "extension": ".swf", "description": "Small web format (SWF) or Adobe Flash document", "mime": "application/x-shockwave-flash" }, { "extension": ".tar", "description": "Tape Archive (TAR)", "mime": "application/x-tar" }, { "extension": ".tiff", "description": "Tagged Image File Format (TIFF)", "mime": "image/tiff" }, { "extension": ".ts", "description": "MPEG transport stream", "mime": "video/mp2t" }, { "extension": ".ttf", "description": "TrueType Font", "mime": "font/ttf" }, { "extension": ".txt", "description": "Text, (generally ASCII or ISO 8859-n)", "mime": "text/plain" }, { "extension": ".vsd", "description": "Microsoft Visio", "mime": "application/vnd.visio" }, { "extension": ".wav", "description": "Waveform Audio Format", "mime": "audio/wav" }, { "extension": ".weba", "description": "WEBM audio", "mime": "audio/webm" }, { "extension": ".webm", "description": "WEBM video", "mime": "video/webm" }, { "extension": ".webp", "description": "WEBP image", "mime": "image/webp" }, { "extension": ".woff", "description": "Web Open Font Format (WOFF)", "mime": "font/woff" }, { "extension": ".woff2", "description": "Web Open Font Format (WOFF)", "mime": "font/woff2" }, { "extension": ".xhtml", "description": "XHTML", "mime": "application/xhtml+xml" }, { "extension": ".xls", "description": "Microsoft Excel", "mime": "application/vnd.ms-excel" }, { "extension": ".xlsx", "description": "Microsoft Excel (OpenXML)", "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }, { "extension": ".xml", "description": "XML", "mime": "application/xml if not readable from casual users (RFC 3023, section 3)" }, { "extension": ".xul", "description": "XUL", "mime": "application/vnd.mozilla.xul+xml" }, { "extension": ".zip", "description": "ZIP archive", "mime": "application/zip" }, { "extension": ".3gp", "description": "3GPP audio/video container", "mime": "video/3gpp" }, { "extension": ".3g2", "description": "3GPP2 audio/video container", "mime": "video/3gpp2" }, { "extension": ".7z", "description": "7-zip archive", "mime": "application/x-7z-compressed" }];
        this.headers = ["A-IM", "Accept", "Accept-Charset", "Accept-Datetime", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Access-Control-Allow-Credentials", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Method", "Age", "Allow", "Authorization", "Cache-Control", "Connection", "Content-Encoding", "Content-Language", "Content-Length", "Content-Location", "Content-Range", "Content-Security-Policy", "Content-Type", "Cookie", "Date", "Delta-Base", "ETag", "Expect", "Expires", "Forwarded", "From", "Host", "IM", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Last-Modified", "Link", "Location", "Max-Forwards", "Permanent", "Pragma", "Proxy-Authenticate", "Proxy-Authorization", "Range", "Referer ", "Refresh", "Retry-After", "Save-Data", "Server", "Set-Cookie", "Status", "Strict-Transport-Security", "TE", "Timing-Allow-Origin", "Tk", "Trailer", "Transfer-Encoding", "Upgrade", "User-Agent", "Vary", "Via", "WWW-Authenticate", "Warning", "X-Content-Security-Policy", "X-Request-ID", "X-Requested-With"];
        this.status_codes = [{ "code": 100, "description": " Continue" }, { "code": 101, "description": " Switching Protocols" }, { "code": 102, "description": " Processing" }, { "code": 200, "description": " OK" }, { "code": 201, "description": " Created" }, { "code": 202, "description": " Accepted" }, { "code": 203, "description": " Non-authoritative Information" }, { "code": 204, "description": " No Content" }, { "code": 205, "description": " Reset Content" }, { "code": 206, "description": " Partial Content" }, { "code": 207, "description": " Multi-Status" }, { "code": 208, "description": " Already Reported" }, { "code": 226, "description": " IM Used" }, { "code": 300, "description": " Multiple Choices" }, { "code": 301, "description": " Moved Permanently" }, { "code": 302, "description": " Found" }, { "code": 303, "description": " See Other" }, { "code": 304, "description": " Not Modified" }, { "code": 305, "description": " Use Proxy" }, { "code": 307, "description": " Temporary Redirect" }, { "code": 308, "description": " Permanent Redirect" }, { "code": 400, "description": " Bad Request" }, { "code": 401, "description": " Unauthorized" }, { "code": 402, "description": " Payment Required" }, { "code": 403, "description": " Forbidden" }, { "code": 404, "description": " Not Found" }, { "code": 405, "description": " Method Not Allowed" }, { "code": 406, "description": " Not Acceptable" }, { "code": 407, "description": " Proxy Authentication Required" }, { "code": 408, "description": " Request Timeout" }, { "code": 409, "description": " Conflict" }, { "code": 410, "description": " Gone" }, { "code": 411, "description": " Length Required" }, { "code": 412, "description": " Precondition Failed" }, { "code": 413, "description": " Payload Too Large" }, { "code": 414, "description": " Request-URI Too Long" }, { "code": 415, "description": " Unsupported Media Type" }, { "code": 416, "description": " Requested Range Not Satisfiable" }, { "code": 417, "description": " Expectation Failed" }, { "code": 418, "description": " I'm a teapot" }, { "code": 421, "description": " Misdirected Request" }, { "code": 422, "description": " Unprocessable Entity" }, { "code": 423, "description": " Locked" }, { "code": 424, "description": " Failed Dependency" }, { "code": 426, "description": " Upgrade Required" }, { "code": 428, "description": " Precondition Required" }, { "code": 429, "description": " Too Many Requests" }, { "code": 431, "description": " Request Header Fields Too Large" }, { "code": 444, "description": " Connection Closed Without Response" }, { "code": 451, "description": " Unavailable For Legal Reasons" }, { "code": 499, "description": " Client Closed Request" }, { "code": 500, "description": " Internal Server Error" }, { "code": 501, "description": " Not Implemented" }, { "code": 502, "description": " Bad Gateway" }, { "code": 503, "description": " Service Unavailable" }, { "code": 504, "description": " Gateway Timeout" }, { "code": 505, "description": " HTTP Version Not Supported" }, { "code": 506, "description": " Variant Also Negotiates" }, { "code": 507, "description": " Insufficient Storage" }, { "code": 508, "description": " Loop Detected" }, { "code": 510, "description": " Not Extended" }, { "code": 511, "description": " Network Authentication Required" }, { "code": 599, "description": " Network Connect Timeout Error" }];
    }
    MimeTypes() {
        return this.mime_types.slice();
    }
    Headers() {
        return this.headers.slice();
    }
    StatusCodes() {
        return this.status_codes.slice();
    }
}
StaticDataService.ɵfac = function StaticDataService_Factory(t) { return new (t || StaticDataService)(); };
StaticDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaticDataService, factory: StaticDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stor/assignment.stor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/stor/assignment.stor.service.ts ***!
  \**********************************************************/
/*! exports provided: AssignmentStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentStoreService", function() { return AssignmentStoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class AssignmentStoreService {
    constructor() {
        this.assignmentUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.current_assignments = [];
    }
    registerChanges() {
        this.assignmentUpdated.next(this.getAssignments());
    }
    getAssignments() {
        return this.current_assignments.slice();
    }
    addAssignment(assignment) {
        this.current_assignments.push(assignment);
        this.registerChanges();
    }
    // addAssignments(current_assignments:Assignment[])
    // {
    //    this.current_assignments.push(...current_assignments);
    //    this.registerChanges();
    // }
    registerRoutes(routes, id = undefined) {
        if (id) {
            this.current_assignments.filter(asg => asg.assignment_id == id)[0].routes = routes;
        }
        else {
            this.current_assignments[0].routes = routes;
        }
    }
}
AssignmentStoreService.ɵfac = function AssignmentStoreService_Factory(t) { return new (t || AssignmentStoreService)(); };
AssignmentStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssignmentStoreService, factory: AssignmentStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssignmentStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stor/assignments.stor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/stor/assignments.stor.service.ts ***!
  \***********************************************************/
/*! exports provided: AssignmentsStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsStoreService", function() { return AssignmentsStoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class AssignmentsStoreService {
    constructor() {
        this.assignmentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.current_assignments = [];
    }
    registerChanges() {
        this.assignmentsUpdated.next(this.getAssignments());
    }
    getAssignments() {
        return this.current_assignments.slice();
    }
    addAssignment(assignment) {
        this.current_assignments.push(assignment);
        this.registerChanges();
    }
    // addAssignments(current_assignments:Assignment[])
    // {
    //    this.current_assignments.push(...current_assignments);
    //    this.registerChanges();
    // }
    resetAssignments(assignments) {
        this.current_assignments = assignments;
        this.registerChanges();
    }
}
AssignmentsStoreService.ɵfac = function AssignmentsStoreService_Factory(t) { return new (t || AssignmentsStoreService)(); };
AssignmentsStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AssignmentsStoreService, factory: AssignmentsStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssignmentsStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stor/attempts.stor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/stor/attempts.stor.service.ts ***!
  \********************************************************/
/*! exports provided: AttemptStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttemptStoreService", function() { return AttemptStoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class AttemptStoreService {
    constructor() {
        this.attemptsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.current_attempts = [];
    }
    registerChanges() {
        this.attemptsUpdated.next(this.getAssignments());
    }
    getAssignments() {
        return this.current_attempts.slice();
    }
    addAttempt(attempt) {
        this.current_attempts.push(attempt);
        this.registerChanges();
    }
    resetAttempts(attempts) {
        this.current_attempts = attempts;
        this.registerChanges();
    }
}
AttemptStoreService.ɵfac = function AttemptStoreService_Factory(t) { return new (t || AttemptStoreService)(); };
AttemptStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AttemptStoreService, factory: AttemptStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttemptStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stor/chainings.stor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/stor/chainings.stor.service.ts ***!
  \*********************************************************/
/*! exports provided: ChainingsStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainingsStoreService", function() { return ChainingsStoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class ChainingsStoreService {
    constructor() {
        this.chainingsUpdateWatcher = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.current_chainings = [];
    }
    registerChanges() {
        this.chainingsUpdateWatcher.next(this.getChainings());
    }
    getChainings() {
        return this.current_chainings.slice();
    }
    addChaining(rule) {
        this.current_chainings.push(rule);
        this.registerChanges();
    }
    resetChainings(chainings) {
        this.current_chainings = chainings;
        this.registerChanges();
    }
}
ChainingsStoreService.ɵfac = function ChainingsStoreService_Factory(t) { return new (t || ChainingsStoreService)(); };
ChainingsStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChainingsStoreService, factory: ChainingsStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChainingsStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/stor/rules.stor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/stor/rules.stor.service.ts ***!
  \*****************************************************/
/*! exports provided: RulesStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesStoreService", function() { return RulesStoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class RulesStoreService {
    constructor() {
        this.rulesUpdateWatcher = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.current_rules = [];
    }
    registerChanges() {
        this.rulesUpdateWatcher.next(this.getRules());
    }
    getRules() {
        return this.current_rules.slice();
    }
    addRule(rule) {
        this.current_rules.push(rule);
        this.registerChanges();
    }
    resetRules(rules) {
        this.current_rules = rules;
        this.registerChanges();
    }
}
RulesStoreService.ɵfac = function RulesStoreService_Factory(t) { return new (t || RulesStoreService)(); };
RulesStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RulesStoreService, factory: RulesStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RulesStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");






class UserLoginComponent {
    constructor(http, _localStorage) {
        this.http = http;
        this._localStorage = _localStorage;
    }
    ngOnInit() {
        this.authenticate();
        //@ handle logins
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)])
        });
        //@ handle registrations
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
            password_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)])
        });
    }
    clone(d = {}) {
        if (typeof d == "string")
            return {};
        return JSON.parse(JSON.stringify(d));
    }
    authenticate() {
        if (this._localStorage.get("auth") != undefined) {
            window.location.href = window.location.href.replace(/\/auth/ig, '');
        }
    }
    //@ Save the login credentials and perform the login hopping
    setAuthCrededentials(data, _localStorage) {
        if (data["response"] == 200) {
            _localStorage.set("auth", data.data.message);
            this.authenticate();
        }
        else {
            alert(data.data.message);
        }
    }
    registerUser() {
        let newUser = this.clone(this.registrationForm.value);
        delete newUser.password_2;
        this.http.addUser(newUser).subscribe((a) => this.setAuthCrededentials(a, this._localStorage));
    }
    loginUser() {
        let userData = this.loginForm.value;
        ;
        this.http.login(userData).subscribe((a) => this.setAuthCrededentials(a, this._localStorage));
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"])); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 45, vars: 4, consts: [[1, "register", 2, "padding", "0px !important", "margin", "0px !important"], [1, "row", "card"], [1, "col-md-12", "register-right"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], [1, "nav-item"], ["id", "login-tab", "data-toggle", "tab", "href", "#login", "role", "tab", "aria-controls", "login", "aria-selected", "true", 1, "nav-link", "active"], ["id", "registration-tab", "data-toggle", "tab", "href", "#registration", "role", "tab", "aria-controls", "registration", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "login", "role", "tabpanel", "aria-labelledby", "login-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row", "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], [1, "col-md-8", "col-8"], [1, "form-group"], ["type", "text", "formControlName", "username", "placeholder", "Username/Email *", "value", "", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "password", "placeholder", "Password *", "value", "", 1, "form-control", "form-control-lg"], [1, "col-md-8", "justify-content-center"], ["type", "submit", "value", "Login", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"], ["id", "registration", "role", "tabpanel", "aria-labelledby", "registration-tab", 1, "tab-pane", "fade", "show"], [1, "row", "justify-content-center"], ["type", "text", "formControlName", "name", "placeholder", "Name *", "value", "", 1, "form-control", "form-control-lg"], ["type", "email", "formControlName", "email", "placeholder", "Email *", "value", "", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "username", "placeholder", "Username *", "value", "", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "password_2", "placeholder", "Confirm Password *", "value", "", 1, "form-control", "form-control-lg"], ["type", "submit", "value", "Register", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_15_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_29_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registrationForm.valid || (ctx.registrationForm.value.password != ctx.registrationForm.value.password_2 || !ctx.registrationForm.value.password));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".nav-link.active[_ngcontent-%COMP%] {\n    background: #2D2D2D !important;\n    font-weight: bold;\n    color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzJEMkQyRCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html',
                styleUrls: ['./user-login.component.css']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /learn/angular/dissertation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map