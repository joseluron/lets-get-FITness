webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_not_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/not-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_all_routines_all_routines_component__ = __webpack_require__("../../../../../src/app/components/all-routines/all-routines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_routine_edit_routine_component__ = __webpack_require__("../../../../../src/app/components/edit-routine/edit-routine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_see_routine_see_routine_component__ = __webpack_require__("../../../../../src/app/components/see-routine/see-routine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_delete_routine_delete_routine_component__ = __webpack_require__("../../../../../src/app/components/delete-routine/delete-routine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'all-routines',
        component: __WEBPACK_IMPORTED_MODULE_5__components_all_routines_all_routines_component__["a" /* AllRoutinesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_authenticated_guard__["a" /* AuthenticatedGuard */]]
    },
    {
        path: 'edit-routine/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__components_edit_routine_edit_routine_component__["a" /* EditRoutineComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_authenticated_guard__["a" /* AuthenticatedGuard */]]
    },
    {
        path: 'see-routine/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__components_see_routine_see_routine_component__["a" /* SeeRoutineComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_authenticated_guard__["a" /* AuthenticatedGuard */]]
    },
    {
        path: 'delete-routine/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__components_delete_routine_delete_routine_component__["a" /* DeleteRoutineComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_authenticated_guard__["a" /* AuthenticatedGuard */]]
    },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_9__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_not_authenticated_guard__["a" /* NotAuthenticatedGuard */]]
    },
    {
        path: 'sign-in',
        component: __WEBPACK_IMPORTED_MODULE_10__components_sign_in_sign_in_component__["a" /* SignInComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_not_authenticated_guard__["a" /* NotAuthenticatedGuard */]]
    },
    {
        path: 'user-profile',
        component: __WEBPACK_IMPORTED_MODULE_11__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_authenticated_guard__["a" /* AuthenticatedGuard */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_routine_service__ = __webpack_require__("../../../../../src/app/services/routine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_not_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/not-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_all_routines_all_routines_component__ = __webpack_require__("../../../../../src/app/components/all-routines/all-routines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_edit_routine_edit_routine_component__ = __webpack_require__("../../../../../src/app/components/edit-routine/edit-routine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_see_routine_see_routine_component__ = __webpack_require__("../../../../../src/app/components/see-routine/see-routine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_delete_routine_delete_routine_component__ = __webpack_require__("../../../../../src/app/components/delete-routine/delete-routine.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_all_routines_all_routines_component__["a" /* AllRoutinesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_edit_routine_edit_routine_component__["a" /* EditRoutineComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_see_routine_see_routine_component__["a" /* SeeRoutineComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_delete_routine_delete_routine_component__["a" /* DeleteRoutineComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_routine_service__["a" /* RoutineService */],
            __WEBPACK_IMPORTED_MODULE_9__guards_authenticated_guard__["a" /* AuthenticatedGuard */],
            __WEBPACK_IMPORTED_MODULE_10__guards_not_authenticated_guard__["a" /* NotAuthenticatedGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/all-routines/all-routines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    text-decoration: none;\r\n}\r\n\r\n.reload-button {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.routineForm-block-thumbnail {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.seeRoutine-button {\r\n    text-align: center;\r\n}\r\n\r\n.panel-body {\r\n    min-height: 75px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/all-routines/all-routines.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Rutinas</h1>\r\n\r\n<div class=\"row show-hide-message\">\r\n    <div [ngClass]=\"messageClass\">\r\n        {{ message }}\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"row\">\r\n    <div style=\"float: right;\">\r\n        <button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!inRoutineForm\" (click)=\"openRoutineForm()\">Nueva Rutina</button>\r\n        <button type=\"button\" name=\"button\" class=\"btn btn-default reload-button\" *ngIf=\"!inRoutineForm\" (click)=\"reloadAllRoutines()\" [disabled]=\"reloadingRoutines\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Recargar</button>\r\n    </div>\r\n</div> -->\r\n\r\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!inRoutineForm\" (click)=\"openRoutineForm()\">Nueva Rutina</button>\r\n\r\n<div class=\"btn-group\" role=\"group\" *ngIf=\"!inRoutineForm\">\r\n    <button type=\"button\" name=\"button\" class=\"btn btn-default reload-button\" (click)=\"reloadAllRoutines()\" [disabled]=\"reloadingRoutines\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Recargar</button>\r\n    <button type=\"button\" class=\"btn btn-default reload-button\" (click)=\"getRoutinesByDate()\" [disabled]=\"reloadingRoutines || lookForDate\">Ver últimas rutinas</button>\r\n    <button type=\"button\" class=\"btn btn-default reload-button\" (click)=\"getRoutinesByLikes()\" [disabled]=\"reloadingRoutines || !lookForDate\">Ver rutinas más gustadas</button>\r\n</div>\r\n\r\n<div *ngIf=\"inRoutineForm\" class=\"thumbnail routineForm-block-thumbnail\">\r\n    <form [formGroup]=\"routineForm\" name=\"routineForm\" (submit)=\"onCreateRoutine()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"title\">Título</label>\r\n            <div [ngClass]=\"{ 'has-success': !routineForm.controls.title.errors, 'has-error': routineForm.controls.title.errors && routineForm.controls.title.dirty }\">\r\n                <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Título de la rutina\" autocomplete=\"off\" formControlName=\"title\">\r\n                <ul class=\"help-block\">\r\n                    <li *ngIf=\"routineForm.controls.title.errors?.required && routineForm.controls.title.dirty\">Debe introducir un título para la rutina</li>\r\n                    <li *ngIf=\"routineForm.controls.title.errors?.minlength && routineForm.controls.title.dirty\">El título de la rutina debe tener un mínimo de 5 caracteres</li>\r\n                    <li *ngIf=\"routineForm.controls.title.errors?.maxlength && routineForm.controls.title.dirty\">El título de la rutina debe tener un máximo de 50 caracteres</li>\r\n                    <li *ngIf=\"routineForm.controls.title.errors?.notValidTitle && routineForm.controls.title.dirty && !routineForm.controls.title.errors?.required\">El título de la rutina no puede contener caracteres especiales</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Descripción</label>\r\n            <div [ngClass]=\"{ 'has-success': !routineForm.controls.description.errors, 'has-error': routineForm.controls.description.errors && routineForm.controls.description.dirty }\">\r\n                <textarea name=\"description\" cols=\"40\" rows=\"2\" class=\"form-control\" placeholder=\"*Introduzca una breve descripción del contenido de la rutina\" autocomplete=\"off\" formControlName=\"description\"></textarea>\r\n                <ul class=\"help-block\">\r\n                    <li *ngIf=\"routineForm.controls.description.errors?.required && routineForm.controls.description.dirty\">Debe introducir una descripción para la rutina</li>\r\n                    <li *ngIf=\"routineForm.controls.description.errors?.minlength && routineForm.controls.description.dirty\">La descripción de la rutina debe tener un mínimo de 5 caracteres</li>\r\n                    <li *ngIf=\"routineForm.controls.description.errors?.maxlength && routineForm.controls.description.dirty\">La descripción de la rutina debe tener un máximo de 120 caracteres</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"body\">Desarrollo de la Rutina</label>\r\n            <div [ngClass]=\"{ 'has-success': !routineForm.controls.body.errors, 'has-error': routineForm.controls.body.errors && routineForm.controls.body.dirty }\">\r\n                <textarea name=\"body\" cols=\"40\" rows=\"15\" class=\"form-control\" placeholder=\"*Desarrolle la rutina introduciendo los ejercicios, número de series, número de repeticiones...\" autocomplete=\"off\" formControlName=\"body\"></textarea>\r\n                <ul class=\"help-block\">\r\n                    <li *ngIf=\"routineForm.controls.body.errors?.required && routineForm.controls.body.dirty\">Debe introducir el desarrollo de la rutina</li>\r\n                    <li *ngIf=\"routineForm.controls.body.errors?.minlength && routineForm.controls.body.dirty\">El desarrollo de la rutina debe tener un mínimo de 5 caracteres</li>\r\n                    <li *ngIf=\"routineForm.controls.body.errors?.maxlength && routineForm.controls.body.dirty\">El desarrollo de la rutina debe tener un máximo de 1000 caracteres</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <input [disabled]=\"!routineForm.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Enviar\">\r\n        <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove-circle\"></span>&nbsp;&nbsp;Cancelar</button>\r\n\r\n    </form>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n<div *ngIf=\"!inRoutineForm\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\" *ngFor=\"let routine of routines\">\r\n            <div class=\"panel panel-primary\" >\r\n                <div class=\"panel-heading\">\r\n                    <h3 class=\"panel-title\">{{ routine.title }}</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    {{ routine.description }}\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    <p><strong>Creado por: </strong>{{ routine.createdBy }}</p>\r\n                    <p><strong>Fecha: </strong>{{ routine.createdAt | date: 'dd - MM - yyyy'}}</p>\r\n                    <p><strong>Likes: </strong>{{ routine.likes }}</p>\r\n                    <div class=\"seeRoutine-button\">\r\n                        <a [routerLink]=\"['/see-routine', routine._id]\">\r\n                            <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Ver</button>\r\n                        </a>\r\n                        <a [routerLink]=\"['/edit-routine', routine._id]\" *ngIf=\"user === routine.createdBy\">\r\n                            <button type=\"button\" name=\"button\" class=\"btn btn-danger\">Editar</button>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/all-routines/all-routines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllRoutinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routine_service__ = __webpack_require__("../../../../../src/app/services/routine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllRoutinesComponent = (function () {
    function AllRoutinesComponent(formBuilder, routineService, authenticationService) {
        this.formBuilder = formBuilder;
        this.routineService = routineService;
        this.authenticationService = authenticationService;
        this.inRoutineForm = false;
        this.reloadingRoutines = false;
        this.processing = false;
        this.lookForDate = true;
        this.routines = [];
        this.createRoutineForm();
    }
    AllRoutinesComponent.prototype.createRoutineForm = function () {
        this.routineForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50),
                    this.validateTitle
                ])],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(120)
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(1000)
                ])]
        });
    };
    AllRoutinesComponent.prototype.disableRoutineForm = function () {
        this.routineForm.controls['title'].disable();
        this.routineForm.controls['description'].disable();
        this.routineForm.controls['body'].disable();
    };
    AllRoutinesComponent.prototype.enableRoutineForm = function () {
        this.routineForm.controls['title'].enable();
        this.routineForm.controls['description'].enable();
        this.routineForm.controls['body'].enable();
    };
    AllRoutinesComponent.prototype.validateTitle = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'notValidTitle': true };
        }
    };
    AllRoutinesComponent.prototype.openRoutineForm = function () {
        this.inRoutineForm = true;
    };
    AllRoutinesComponent.prototype.reloadAllRoutines = function () {
        var _this = this;
        this.reloadingRoutines = true;
        if (this.lookForDate) {
            this.routineService.getAllRoutines().subscribe(function (data) {
                _this.routines = data.routines;
            });
        }
        else {
            this.routineService.getAllRoutinesByLikes().subscribe(function (data) {
                _this.routines = data.routines;
            });
        }
        setTimeout(function () {
            _this.reloadingRoutines = false;
        }, 2000);
    };
    AllRoutinesComponent.prototype.getRoutinesByDate = function () {
        var _this = this;
        this.reloadingRoutines = true;
        this.lookForDate = true;
        this.routineService.getAllRoutines().subscribe(function (data) {
            _this.routines = data.routines;
        });
        setTimeout(function () {
            _this.reloadingRoutines = false;
        }, 2000);
    };
    AllRoutinesComponent.prototype.getRoutinesByLikes = function () {
        var _this = this;
        this.reloadingRoutines = true;
        this.lookForDate = false;
        this.routineService.getAllRoutinesByLikes().subscribe(function (data) {
            _this.routines = data.routines;
        });
        setTimeout(function () {
            _this.reloadingRoutines = false;
        }, 2000);
    };
    AllRoutinesComponent.prototype.onCreateRoutine = function () {
        var _this = this;
        this.processing = true;
        this.disableRoutineForm();
        var newRoutine = {
            title: this.routineForm.get('title').value,
            description: this.routineForm.get('description').value,
            body: this.routineForm.get('body').value,
            createdBy: this.user
        };
        this.routineService.createRoutine(newRoutine).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableRoutineForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.inRoutineForm = false;
                    _this.processing = false;
                    _this.message = undefined;
                    _this.messageClass = undefined;
                    _this.routineForm.reset();
                    _this.enableRoutineForm();
                    _this.reloadAllRoutines();
                }, 2000);
            }
        });
    };
    AllRoutinesComponent.prototype.goBack = function () {
        window.location.reload();
    };
    AllRoutinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getUserProfile().subscribe(function (data) {
            _this.user = data.user.username;
        });
        this.routineService.getAllRoutines().subscribe(function (data) {
            _this.routines = data.routines;
        });
        // this.routineService.getAllRoutinesByLikes().subscribe(data => {
        //   this.routines = data.routines;
        // });
    };
    return AllRoutinesComponent;
}());
AllRoutinesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all-routines',
        template: __webpack_require__("../../../../../src/app/components/all-routines/all-routines.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/all-routines/all-routines.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_routine_service__["a" /* RoutineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_routine_service__["a" /* RoutineService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], AllRoutinesComponent);

var _a, _b, _c;
//# sourceMappingURL=all-routines.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/delete-routine/delete-routine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete-routine/delete-routine.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"page-header\">Eliminar Rutina</h1>\r\n\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n      {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"foundRoutine\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Confirmar</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <p>¿Está seguro de que quiere eliminar esta rutina?</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"onDeleteRoutine()\" class=\"btn btn-primary\">Si</button>\r\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-danger\">Cancelar</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">{{ routine.title }}</h3>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n      {{ routine.description }}\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <pre>{{ routine.body }}</pre>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n      <p><strong>Creado por: </strong>{{ routine.createdBy }}</p>\r\n      <p><strong>Creado en: </strong>{{ routine.createdAt | date: 'dd - MM - yyyy' }}</p>\r\n      <p><strong>Likes: </strong>{{ routine.likes }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/delete-routine/delete-routine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRoutineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_routine_service__ = __webpack_require__("../../../../../src/app/services/routine.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteRoutineComponent = (function () {
    function DeleteRoutineComponent(activatedRoute, router, routineService, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routineService = routineService;
        this.location = location;
        this.foundRoutine = false;
        this.processing = false;
    }
    DeleteRoutineComponent.prototype.goBack = function () {
        this.location.back();
    };
    DeleteRoutineComponent.prototype.onDeleteRoutine = function () {
        var _this = this;
        this.processing = true;
        this.routineService.deleteRoutine(this.routineId).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/all-routines']);
                }, 2000);
            }
        });
    };
    DeleteRoutineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routineId = this.activatedRoute.snapshot.params.id;
        this.routineService.getRoutineToEdit(this.routineId).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.routine = data.routine;
                _this.foundRoutine = true;
            }
        });
    };
    return DeleteRoutineComponent;
}());
DeleteRoutineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-routine',
        template: __webpack_require__("../../../../../src/app/components/delete-routine/delete-routine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/delete-routine/delete-routine.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_routine_service__["a" /* RoutineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_routine_service__["a" /* RoutineService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object])
], DeleteRoutineComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-routine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-routine/edit-routine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editRoutineForm-block-thumbnail {\r\n    background-color: #f8f8f8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-routine/edit-routine.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Editar Rutina</h1>\r\n\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n      {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!loadingPage\" class=\"thumbnail editRoutineForm-block-thumbnail\">\r\n  <form [formGroup]=\"editRoutineForm\" name=\"editRoutineform\" (submit)=\"onUpdateRoutine()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Título</label>\r\n      <div [ngClass]=\"{ 'has-success': !editRoutineForm.controls.title.errors, 'has-error': editRoutineForm.controls.title.errors && editRoutineForm.controls.title.dirty }\">\r\n        <input type=\"text\" name=\"title\" placeholder=\"*Título de la Rutina\" class=\"form-control\" formControlName=\"title\" autocomplete=\"off\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"editRoutineForm.controls.title.errors?.required && editRoutineForm.controls.title.dirty\">Debe introducir un título para la rutina</li>\r\n          <li *ngIf=\"editRoutineForm.controls.title.errors?.minlength && editRoutineForm.controls.title.dirty\">El título de la rutina debe tener un mínimo de 5 caracteres</li>\r\n          <li *ngIf=\"editRoutineForm.controls.title.errors?.maxlength && editRoutineForm.controls.title.dirty\">El título de la rutina debe tener un máximo de 50 caracteres</li>\r\n          <li *ngIf=\"editRoutineForm.controls.title.errors?.notValidTitle && editRoutineForm.controls.title.dirty && !editRoutineForm.controls.title.errors?.required\">El título de la rutina no puede contener caracteres especiales</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Descripción</label>\r\n      <div [ngClass]=\"{ 'has-success': !editRoutineForm.controls.description.errors, 'has-error': editRoutineForm.controls.description.errors && editRoutineForm.controls.description.dirty }\">\r\n        <textarea name=\"description\" cols=\"40\" rows=\"2\" class=\"form-control\" placeholder=\"*Descripción de la rutina\" formControlName=\"description\" autocomplete=\"off\"></textarea>\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"editRoutineForm.controls.description.errors?.required && editRoutineForm.controls.description.dirty\">Debe introducir una descripción para la rutina</li>\r\n          <li *ngIf=\"editRoutineForm.controls.description.errors?.minlength && editRoutineForm.controls.description.dirty\">La descripción de la rutina debe tener un mínimo de 5 caracteres</li>\r\n          <li *ngIf=\"editRoutineForm.controls.description.errors?.maxlength && editRoutineForm.controls.description.dirty\">La descripción de la rutina debe tener un máximo de 120 caracteres</li>\r\n      </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"body\">Desarrollo de la Rutina</label>\r\n      <div [ngClass]=\"{ 'has-success': !editRoutineForm.controls.body.errors, 'has-error': editRoutineForm.controls.body.errors && editRoutineForm.controls.body.dirty }\">\r\n        <textarea name=\"body\" cols=\"40\" rows=\"15\" class=\"form-control\" placeholder=\"*Desarrollo de la rutina\" formControlName=\"body\" autocomplete=\"off\"></textarea>\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"editRoutineForm.controls.body.errors?.required && editRoutineForm.controls.body.dirty\">Debe introducir el desarrollo de la rutina</li>\r\n          <li *ngIf=\"editRoutineForm.controls.body.errors?.minlength && editRoutineForm.controls.body.dirty\">El desarrollo de la rutina debe tener un mínimo de 5 caracteres</li>\r\n          <li *ngIf=\"editRoutineForm.controls.body.errors?.maxlength && editRoutineForm.controls.body.dirty\">El desarrollo de la rutina debe tener un máximo de 1000 caracteres</li>\r\n      </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <input [disabled]=\"!editRoutineForm.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Modificar\">\r\n    <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-danger\">Cancelar</button>\r\n    <a [routerLink]=\"['/delete-routine', routineId]\">\r\n      <button type=\"button\" name=\"button\" class=\"btn pull-right btn-warning\">Eliminar</button>\r\n    </a>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-routine/edit-routine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRoutineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_routine_service__ = __webpack_require__("../../../../../src/app/services/routine.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditRoutineComponent = (function () {
    function EditRoutineComponent(routineService, formBuilder, activatedRoute, router, location) {
        this.routineService = routineService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.loadingPage = true;
        this.processing = false;
        this.createEditRoutineForm();
    }
    EditRoutineComponent.prototype.createEditRoutineForm = function () {
        this.editRoutineForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50),
                    this.validateTitle
                ])],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(120)
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(1000)
                ])]
        });
    };
    EditRoutineComponent.prototype.disableEditRoutineForm = function () {
        this.editRoutineForm.controls['title'].disable();
        this.editRoutineForm.controls['description'].disable();
        this.editRoutineForm.controls['body'].disable();
    };
    EditRoutineComponent.prototype.enableEditRoutineForm = function () {
        this.editRoutineForm.controls['title'].enable();
        this.editRoutineForm.controls['description'].enable();
        this.editRoutineForm.controls['body'].enable();
    };
    EditRoutineComponent.prototype.validateTitle = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'notValidTitle': true };
        }
    };
    EditRoutineComponent.prototype.onUpdateRoutine = function () {
        var _this = this;
        this.processing = true;
        var toEditRoutine = {
            _id: this.routineId,
            title: this.editRoutineForm.get('title').value,
            description: this.editRoutineForm.get('description').value,
            body: this.editRoutineForm.get('body').value
        };
        this.routineService.editRoutine(toEditRoutine).subscribe(function (data) {
            if (!data.success) {
                _this.processing = false;
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/see-routine', _this.routineId]);
                }, 2000);
            }
        });
    };
    EditRoutineComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditRoutineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routineId = this.activatedRoute.snapshot.params.id;
        this.routineService.getRoutineToEdit(this.routineId).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.loadingPage = false;
                _this.editRoutineForm.controls['title'].setValue(data.routine.title);
                _this.editRoutineForm.controls['description'].setValue(data.routine.description);
                _this.editRoutineForm.controls['body'].setValue(data.routine.body);
            }
        });
    };
    return EditRoutineComponent;
}());
EditRoutineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-routine',
        template: __webpack_require__("../../../../../src/app/components/edit-routine/edit-routine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-routine/edit-routine.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_routine_service__["a" /* RoutineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_routine_service__["a" /* RoutineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object])
], EditRoutineComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-routine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-header {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/home-header.jpg") + ") center bottom;\r\n    background-size: cover;\r\n    background-color: black;\r\n    \r\n    color: #FFFFFF;\r\n    /* text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.90); */\r\n    text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.home-block {\r\n    text-align: center;\r\n}\r\n\r\n.home-block-thumbnail {\r\n    background-color: #f8f8f8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron home-header\">\r\n    <div class=\"caption\">\r\n        <h1>Let's get FITness</h1>\r\n        <p>¡Bienvenid@ a Let's Get FITness! ¡La web para amantes del entrenamiento que quieran compartir sus rutinas o descubrir las de diferentes usuarios!</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-6 home-block\">\r\n        <div class=\"thumbnail home-block-thumbnail\">\r\n            <div class=\"caption\">\r\n                <h3>Para comenzar a ver y/o utilizar la web, regístrese</h3>\r\n                <a routerLink=\"/sign-up\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">Registro</button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  \r\n    <div class=\"col-md-6 home-block\">\r\n        <div class=\"thumbnail home-block-thumbnail\">\r\n            <div class=caption>\r\n                <h3>Si usted no es un nuevo usuario, acceda a la página con sus datos de usuario</h3>\r\n                <a routerLink=\"/sign-in\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">Inicio de Sesión</button>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n         <span class=\"sr-only\">Toggle navigation</span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n       </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">Let's Get FITness</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a routerLink=\"/home\">\r\n            <span class=\"glyphicon glyphicon-home\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authenticationService.userSignedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/all-routines\">Ver Rutinas</a></li>\r\n        <li *ngIf=\"!authenticationService.userSignedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/sign-up\">Registro</a></li>\r\n        <li *ngIf=\"!authenticationService.userSignedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/sign-in\">Inicio de Sesión</a></li>\r\n        <li *ngIf=\"authenticationService.userSignedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/user-profile\">Perfíl de Usuario</a></li>\r\n        <li *ngIf=\"authenticationService.userSignedIn()\"><a routerLink=\"/home\" (click)=\"onSignOut()\">Cerrar Sesión</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authenticationService, router, flashMessagesService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.onSignOut = function () {
        this.authenticationService.signOut();
        this.flashMessagesService.show('Ha cerrado su sesión', { cssClass: 'alert-info' });
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/see-routine/see-routine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/see-routine/see-routine.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Ver Rutina</h1>\r\n\r\n<div class=\"row show-hide-message\">\r\n    <div [ngClass]=\"messageClass\">\r\n        {{ message }}\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!loadingPage\">\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">{{ routine.title }}</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <pre>{{ routine.body }}</pre>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n            <p><strong>Creado por: </strong>{{ routine.createdBy }}</p>\r\n            <p><strong>Fecha: </strong>{{ routine.createdAt | date: 'dd - MM - yyyy' }}</p>\r\n            <p><Strong>Likes: </Strong>{{ routine.likes }}</p>\r\n            <div *ngIf=\"user === routine.createdBy\">\r\n                <a [routerLink]=\"['/edit-routine/', routine._id]\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Editar</a>\r\n                <a [routerLink]=\"['/delete-routine/', routine._id]\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Eliminar</a>\r\n            </div>\r\n            <div *ngIf=\"user !== routine.createdBy\">\r\n                <button type=\"button\" name=\"button\" class=\"btn btn-sm\" [ngClass]=\"{ 'btn-success': likedByUser, 'btn-secondary': !likedByUser }\" (click)=\"likeRoutine()\" [disabled]=\"processing\">\r\n                    <span class=\"glyphicon glyphicon-thumbs-up\"></span>&nbsp;&nbsp;Like\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n                <form [formGroup]=\"newCommentForm\" name=\"newCommentForm\" (submit)=\"onCreateComment()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"comment\">Deje un comentario</label>\r\n                        <div [ngClass]=\"{ 'has-success': !newCommentForm.controls.comment.errors, 'has-error': newCommentForm.controls.comment.errors && newCommentForm.controls.comment.dirty }\">\r\n                            <textarea name=\"comment\" rows=\"3\" cols=\"30\" class=\"form-control\" formControlName=\"comment\" placeholder=\"*Comentario\"></textarea>\r\n                            <ul class=\"help-block\">\r\n                                <li *ngIf=\"newCommentForm.controls.comment.errors?.required && newCommentForm.controls.comment.dirty\">Debe escribir un comentario</li>\r\n                                <li *ngIf=\"newCommentForm.controls.comment.errors?.minlength && newCommentForm.controls.comment.dirty\">El comentario debe tener un mínimo de 5 caracteres</li>\r\n                                <li *ngIf=\"newCommentForm.controls.comment.errors?.maxlength && newCommentForm.controls.comment.dirty\">El comentario debe tener un máximo de 120 caracteres</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <input [disabled]=\"!newCommentForm.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Dejar Comentario\">\r\n                </form>\r\n            </li>\r\n            <li *ngFor=\"let comment of routine.comments\" class=\"list-group-item\">\r\n                <strong>{{comment.commentator}}: </strong> {{ comment.comment }}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/see-routine/see-routine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeeRoutineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_routine_service__ = __webpack_require__("../../../../../src/app/services/routine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SeeRoutineComponent = (function () {
    function SeeRoutineComponent(routineService, authenticationService, formBuilder, activatedRoute) {
        this.routineService = routineService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.loadingPage = true;
        this.likedByUser = false;
        this.processing = false;
        this.createNewCommentForm();
    }
    SeeRoutineComponent.prototype.createNewCommentForm = function () {
        this.newCommentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(120),
                ])]
        });
    };
    SeeRoutineComponent.prototype.enableNewCommentForm = function () {
        this.newCommentForm.get('comment').enable();
    };
    SeeRoutineComponent.prototype.disableNewCommentForm = function () {
        this.newCommentForm.get('comment').disable();
    };
    SeeRoutineComponent.prototype.likeRoutine = function () {
        var _this = this;
        this.processing = true;
        this.routineService.likeRoutine(this.routineId).subscribe(function (data) {
            _this.routineService.getRoutine(_this.routineId).subscribe(function (likedRoutine) {
                _this.routine = likedRoutine.routine;
                if (_this.routine.likedBy.includes(_this.user)) {
                    _this.likedByUser = true;
                }
                else {
                    _this.likedByUser = false;
                }
            });
            _this.messageClass = 'alert alert-success';
            _this.message = data.message;
            setTimeout(function () {
                _this.message = undefined;
                _this.messageClass = undefined;
                _this.processing = false;
            }, 1000);
        });
    };
    SeeRoutineComponent.prototype.onCreateComment = function () {
        var _this = this;
        this.disableNewCommentForm();
        this.processing = true;
        var newCommentBody = this.newCommentForm.get('comment').value;
        this.routineService.createComment(this.routineId, newCommentBody).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'alert alert-success';
                setTimeout(function () {
                    _this.enableNewCommentForm();
                    _this.processing = false;
                }, 2000);
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.routineService.getRoutine(_this.routineId).subscribe(function (commentedRoutine) {
                        _this.routine = commentedRoutine.routine;
                    });
                    _this.message = undefined;
                    _this.messageClass = undefined;
                    _this.enableNewCommentForm();
                    _this.processing = false;
                }, 2000);
            }
        });
    };
    SeeRoutineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getUserProfile().subscribe(function (data) {
            _this.user = data.user.username;
        });
        this.routineId = this.activatedRoute.snapshot.params.id;
        this.routineService.getRoutine(this.routineId).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.loadingPage = false;
                _this.routine = data.routine;
                if (_this.routine.likedBy.includes(_this.user)) {
                    _this.likedByUser = true;
                }
            }
        });
    };
    return SeeRoutineComponent;
}());
SeeRoutineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-see-routine',
        template: __webpack_require__("../../../../../src/app/components/see-routine/see-routine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/see-routine/see-routine.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_routine_service__["a" /* RoutineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_routine_service__["a" /* RoutineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], SeeRoutineComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=see-routine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-block-thumbnail {\r\n    background-color: #f8f8f8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Inicio de Sesión de Usuario</h1>\r\n\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"thumbnail  register-block-thumbnail\">\r\n  <form [formGroup]=\"signInForm\" (submit)=\"onSignIn()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Nombre de Usuario:</label>\r\n      <div [ngClass]=\"{ 'has-success': signInForm.controls.username.valid && signInForm.controls.username.dirty , 'has-error': signInForm.controls.username.errors && signInForm.controls.username.dirty }\">\r\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Nombre de Usuario\" formControlName=\"username\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"signInForm.controls.username.errors?.required && signInForm.controls.username.dirty\">Debe introducir un nombre de usuario</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Contraseña:</label>\r\n      <div [ngClass]=\"{ 'has-success': signInForm.controls.password.valid && signInForm.controls.password.dirty , 'has-error': signInForm.controls.password.errors && signInForm.controls.password.dirty }\">\r\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Contraseña\" formControlName=\"password\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"signInForm.controls.password.errors?.required && signInForm.controls.password.dirty\">Debe introducir una contraseña</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n    <input [disabled]=\"!signInForm.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Enviar\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(formBuilder, authenticationService, authenticatedGuard, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.authenticatedGuard = authenticatedGuard;
        this.router = router;
        this.processing = false;
        this.createSignInForm();
    }
    SignInComponent.prototype.createSignInForm = function () {
        this.signInForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                ])]
        });
    };
    SignInComponent.prototype.disableSignInForm = function () {
        this.signInForm.controls['username'].disable();
        this.signInForm.controls['password'].disable();
    };
    SignInComponent.prototype.enableSignInForm = function () {
        this.signInForm.controls['username'].enable();
        this.signInForm.controls['password'].enable();
    };
    SignInComponent.prototype.onSignIn = function () {
        var _this = this;
        this.processing = true;
        this.disableSignInForm();
        var signInUser = {
            username: this.signInForm.get('username').value,
            password: this.signInForm.get('password').value
        };
        this.authenticationService.signIn(signInUser).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableSignInForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.authenticationService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    if (_this.previousUri) {
                        _this.router.navigate([_this.previousUri]);
                    }
                    else {
                        _this.router.navigate(['/all-routines']);
                    }
                }, 2000);
            }
        });
    };
    SignInComponent.prototype.ngOnInit = function () {
        if (this.authenticatedGuard.redirectUri) {
            this.messageClass = 'alert alert-danger';
            this.message = 'Su sesión ha caducado. Inicie sesión para poder ver esa página';
            this.previousUri = this.authenticatedGuard.redirectUri;
            this.authenticatedGuard.redirectUri = undefined;
        }
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__guards_authenticated_guard__["a" /* AuthenticatedGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__guards_authenticated_guard__["a" /* AuthenticatedGuard */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SignInComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-block-thumbnail {\r\n    background-color: #f8f8f8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Registro de Usuario</h1>\r\n\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"thumbnail  register-block-thumbnail\">\r\n  <form [formGroup]=\"signUpForm\" (submit)=\"onSignUp()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Nombre de Usuario:</label>\r\n      <div [ngClass]=\"{ 'has-success': !signUpForm.controls.username.errors && usernameAvailable , 'has-error': (signUpForm.controls.username.errors && signUpForm.controls.username.dirty) || (!usernameAvailable && signUpForm.controls.username.dirty)}\">\r\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Nombre de Usuario\" formControlName=\"username\" (input)=\"onUsernameChange()\" (blur)=\"checkUsernameAvailability()\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"signUpForm.controls.username.errors?.required && signUpForm.controls.username.dirty\">Debe introducir un nombre de usuario</li>\r\n          <li *ngIf=\"signUpForm.controls.username.errors?.minlength && signUpForm.controls.username.dirty\">El nombre de usuario debe tener un mínimo de 3 caracteres</li>\r\n          <li *ngIf=\"signUpForm.controls.username.errors?.maxlength && signUpForm.controls.username.dirty\">El nombre de usuario debe tener un máximo de 18 caracteres</li>\r\n          <li *ngIf=\"signUpForm.controls.username.errors?.notValidUsername && signUpForm.controls.username.dirty && !signUpForm.controls.username.errors?.required\">El nombre de usuario no puede contener caracteres especiales</li>\r\n          <li *ngIf=\"usernameMessage && !signUpForm.controls.username.errors?.minlength && !signUpForm.controls.username.errors?.maxlength && !signUpForm.controls.username.errors?.notValidUsername\">{{ usernameMessage }}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Correo Electrónico:</label>\r\n      <div [ngClass]=\"{ 'has-success': !signUpForm.controls.email.errors && emailAvailable , 'has-error': (signUpForm.controls.email.errors && signUpForm.controls.email.dirty) || (!emailAvailable && signUpForm.controls.email.dirty)}\">\r\n        <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Correo Electrónico\" formControlName=\"email\" (input)=\"onEmailChange()\" (blur)=\"checkEmailAvailability()\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"signUpForm.controls.email.errors?.required && signUpForm.controls.email.dirty\">Debe introducir un correo electrónico</li>\r\n          <li *ngIf=\"signUpForm.controls.email.errors?.minlength && signUpForm.controls.email.dirty\">El correo electrónico debe tener un mínimo de 5 caracteres</li>\r\n          <li *ngIf=\"signUpForm.controls.email.errors?.maxlength && signUpForm.controls.email.dirty\">El correo electrónico debe tener un máximo de 30 caracteres</li>\r\n          <li *ngIf=\"signUpForm.controls.email.errors?.notValidEmail && signUpForm.controls.email.dirty && !signUpForm.controls.email.errors?.required\">El correo electrónico debe tener un formato adecuado</li>\r\n          <li *ngIf=\"emailMessage && !signUpForm.controls.email.errors?.minlength && !signUpForm.controls.email.errors?.maxlength && !signUpForm.controls.email.errors?.notValidEmail\">{{ emailMessage }}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Contraseña:</label>\r\n      <div [ngClass]=\"{ 'has-success': !signUpForm.controls.password.errors , 'has-error': (signUpForm.controls.password.errors && signUpForm.controls.password.dirty)}\">\r\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Contraseña\" formControlName=\"password\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"signUpForm.controls.password.errors?.required && signUpForm.controls.password.dirty\">Debe introducir una contraseña</li>\r\n          <li *ngIf=\"signUpForm.controls.password.errors?.minlength && signUpForm.controls.password.dirty\">La contraseña debe tener un mínimo de 4 caracteres</li>\r\n          <li *ngIf=\"signUpForm.controls.password.errors?.maxlength && signUpForm.controls.password.dirty\">La contraseña debe tener un máximo de 15 caracteres</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <label for=\"equivalentPassword\">Confirme Contraseña:</label>\r\n      <div [ngClass]=\"{ 'has-success': !signUpForm.controls.equivalentPassword.errors && !signUpForm.errors?.notEquivalentPasswords , 'has-error': (signUpForm.controls.equivalentPassword.errors && signUpForm.controls.equivalentPassword.dirty) || (signUpForm.errors?.notEquivalentPasswords && signUpForm.controls.equivalentPassword.dirty)}\">\r\n        <input type=\"password\" name=\"equivalentPassword\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Contraseña\" formControlName=\"equivalentPassword\">\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"signUpForm.controls.equivalentPassword.errors?.required && signUpForm.controls.equivalentPassword.dirty\">Debe volver a introducir la contraseña anterior</li>\r\n          <li *ngIf=\"signUpForm.errors?.notEquivalentPasswords && signUpForm.controls.equivalentPassword.dirty && !signUpForm.controls.equivalentPassword.errors?.required\">Las contraseñas no coinciden</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  \r\n    <input [disabled]=\"!signUpForm.valid || processing || !emailAvailable || !usernameAvailable\" type=\"submit\" class=\"btn btn-primary\" value=\"Enviar\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = (function () {
    function SignUpComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.processing = false;
        this.createSignUpForm();
    }
    SignUpComponent.prototype.createSignUpForm = function () {
        this.signUpForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(18),
                    this.validateUsername
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateEmail
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15)
                ])],
            equivalentPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
                ])]
        }, { validator: this.comparePasswords('password', 'equivalentPassword') });
    };
    SignUpComponent.prototype.disableSignUpForm = function () {
        this.signUpForm.controls['username'].disable();
        this.signUpForm.controls['email'].disable();
        this.signUpForm.controls['password'].disable();
        this.signUpForm.controls['equivalentPassword'].disable();
    };
    SignUpComponent.prototype.enableSignUpForm = function () {
        this.signUpForm.controls['username'].enable();
        this.signUpForm.controls['email'].enable();
        this.signUpForm.controls['password'].enable();
        this.signUpForm.controls['equivalentPassword'].enable();
    };
    SignUpComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'notValidUsername': true };
        }
    };
    SignUpComponent.prototype.validateEmail = function (controls) {
        // tslint:disable-next-line:max-line-length
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'notValidEmail': true };
        }
    };
    SignUpComponent.prototype.comparePasswords = function (password, equivalentPassword) {
        return function (group) {
            if (group.controls[password].value === group.controls[equivalentPassword].value) {
                return null;
            }
            else {
                return { 'notEquivalentPasswords': true };
            }
        };
    };
    SignUpComponent.prototype.onSignUp = function () {
        var _this = this;
        this.processing = true;
        this.disableSignUpForm();
        var newUser = {
            username: this.signUpForm.get('username').value,
            email: this.signUpForm.get('email').value,
            password: this.signUpForm.get('password').value,
        };
        this.userService.createUser(newUser).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableSignUpForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/sign-in']);
                }, 2000);
            }
        });
    };
    SignUpComponent.prototype.checkUsernameAvailability = function () {
        var _this = this;
        var username = this.signUpForm.get('username').value;
        if (username) {
            this.userService.checkUsernameAvailability(username).subscribe(function (data) {
                if (!data.success) {
                    _this.usernameAvailable = false;
                    _this.usernameMessage = data.message;
                }
                else {
                    _this.usernameAvailable = true;
                    _this.usernameMessage = data.message;
                }
            });
        }
    };
    SignUpComponent.prototype.checkEmailAvailability = function () {
        var _this = this;
        var email = this.signUpForm.get('email').value;
        if (email) {
            this.userService.checkEmailAvailability(email).subscribe(function (data) {
                if (!data.success) {
                    _this.emailAvailable = false;
                    _this.emailMessage = data.message;
                }
                else {
                    _this.emailAvailable = true;
                    _this.emailMessage = data.message;
                }
            });
        }
    };
    SignUpComponent.prototype.onUsernameChange = function () {
        this.usernameMessage = '';
    };
    SignUpComponent.prototype.onEmailChange = function () {
        this.emailMessage = '';
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], SignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.panel-body {\r\n    min-height: 75px;\r\n}\r\n\r\n.seeRoutine-button {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Perfíl de Usuario</h1>\r\n\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\"><strong>Nombre de Usuario: </strong>{{ username }}</li>\r\n    <li class=\"list-group-item\"><strong>Correo Electrónico: </strong>{{ email }}</li>\r\n</ul>\r\n\r\n<h1 class=\"page-header\">Mi Contenido</h1>\r\n\r\n<h3 *ngIf=\"message\">{{ message }}</h3>\r\n\r\n<div class=\"row\" *ngIf=\"!message\">\r\n    <div class=\"col-md-6\" *ngFor=\"let routine of userRoutines\">\r\n        <div class=\"panel panel-primary\" >\r\n            <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">{{ routine.title }}</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                {{ routine.description }}\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <p><strong>Fecha: </strong>{{ routine.createdAt | date: 'dd - MM - yyyy'}}</p>\r\n                <p><strong>Likes: </strong>{{ routine.likes }}</p>\r\n                <div class=\"seeRoutine-button\">\r\n                    <a [routerLink]=\"['/see-routine', routine._id]\">\r\n                        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Ver</button>\r\n                    </a>\r\n                    <a [routerLink]=\"['/edit-routine', routine._id]\" *ngIf=\"username === routine.createdBy\">\r\n                        <button type=\"button\" name=\"button\" class=\"btn btn-danger\">Editar</button>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routine_service__ = __webpack_require__("../../../../../src/app/services/routine.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(authenticationService, routineService) {
        this.authenticationService = authenticationService;
        this.routineService = routineService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.getUserProfile().subscribe(function (data) {
            _this.username = data.user.username;
            _this.email = data.user.email;
        });
        this.routineService.getAllUserRoutines().subscribe(function (data) {
            if (!data.hasRoutines) {
                _this.message = data.message;
            }
            else {
                _this.userRoutines = data.routines;
            }
        });
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_routine_service__["a" /* RoutineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_routine_service__["a" /* RoutineService */]) === "function" && _b || Object])
], UserProfileComponent);

var _a, _b;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticatedGuard = (function () {
    function AuthenticatedGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthenticatedGuard.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnapshot) {
        if (this.authenticationService.userSignedIn()) {
            return true;
        }
        else {
            this.redirectUri = routerStateSnapshot.url;
            this.router.navigate(['/sign-in']);
            return false;
        }
    };
    return AuthenticatedGuard;
}());
AuthenticatedGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticatedGuard);

var _a, _b;
//# sourceMappingURL=authenticated.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/not-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthenticatedGuard = (function () {
    function NotAuthenticatedGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    NotAuthenticatedGuard.prototype.canActivate = function () {
        if (this.authenticationService.userSignedIn()) {
            this.router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    };
    return NotAuthenticatedGuard;
}());
NotAuthenticatedGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NotAuthenticatedGuard);

var _a, _b;
//# sourceMappingURL=not-authenticated.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // uri = 'http://localhost:8080';
        this.uri = '';
    }
    AuthenticationService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'token': this.authenticatedToken
            })
        });
    };
    AuthenticationService.prototype.loadToken = function () {
        this.authenticatedToken = localStorage.getItem('token');
    };
    AuthenticationService.prototype.signOut = function () {
        this.authenticatedToken = null;
        this.authenticatedUser = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authenticatedToken = token;
        this.authenticatedUser = user;
    };
    AuthenticationService.prototype.userSignedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthenticationService.prototype.signIn = function (user) {
        return this.http.post(this.uri + '/authentication/sign-in', user).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getUserProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.uri + '/authentication/getUserProfile', this.requestOptions).map(function (res) { return res.json(); });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/routine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoutineService = (function () {
    function RoutineService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.uri = this.authenticationService.uri;
    }
    RoutineService.prototype.createAuthenticationHeaders = function () {
        this.authenticationService.loadToken();
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'token': this.authenticationService.authenticatedToken
            })
        });
    };
    RoutineService.prototype.createRoutine = function (newRoutine) {
        this.createAuthenticationHeaders();
        return this.http.post(this.uri + '/routines/createRoutine', newRoutine, this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.getAllRoutines = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.uri + '/routines/getAllRoutines', this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.getAllRoutinesByLikes = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.uri + '/routines/getAllRoutinesByLikes', this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.getAllUserRoutines = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.uri + '/routines/getAllUserRoutines', this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.getRoutine = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.uri + '/routines/getRoutine/' + id, this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.getRoutineToEdit = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.uri + '/routines/getRoutineToEdit/' + id, this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.editRoutine = function (routine) {
        this.createAuthenticationHeaders();
        return this.http.put(this.uri + '/routines/editRoutine', routine, this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.deleteRoutine = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.uri + '/routines/deleteRoutine/' + id, this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.likeRoutine = function (id) {
        this.createAuthenticationHeaders();
        var routineId = { _id: id };
        return this.http.put(this.uri + '/routines/likeRoutine', routineId, this.requestOptions).map(function (res) { return res.json(); });
    };
    RoutineService.prototype.createComment = function (_id, comment) {
        this.createAuthenticationHeaders();
        var newComment = {
            _id: _id,
            comment: comment
        };
        return this.http.post(this.uri + '/routines/createComment', newComment, this.requestOptions).map(function (res) { return res.json(); });
    };
    return RoutineService;
}());
RoutineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], RoutineService);

var _a, _b;
//# sourceMappingURL=routine.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.uri = 'http://localhost:8080';
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.uri + '/users/createUser', user).map(function (res) { return res.json(); });
    };
    UserService.prototype.checkUsernameAvailability = function (username) {
        return this.http.get(this.uri + '/users/checkUsernameAvailability/' + username).map(function (res) { return res.json(); });
    };
    UserService.prototype.checkEmailAvailability = function (email) {
        return this.http.get(this.uri + '/users/checkEmailAvailability/' + email).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/home-header.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-header.20a2c2fc08781fe3f3cb.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map