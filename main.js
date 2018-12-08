(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--prueba-->\n<app-header></app-header>\n<div class=\"container\" id=\"container\">\n    <div id=\"loader-wrapper\">\n        <div id=\"loader\"></div>\n\n        <div class=\"loader-section section-left\"></div>\n        <div class=\"loader-section section-right\"></div>\n    </div>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService /*, private router: Router*/) {
        var _this = this;
        this.authService = authService;
        this.authService.afAuth.auth.onAuthStateChanged(function (user) {
            if (user != null) {
                // User is logged in, use the user object for its info.
                _this.isLoggedIn = true;
                _this.user_displayName = user.displayName;
                _this.user_email = user.email;
                console.log("logged ON");
                // etc.
            }
            else {
                // User is not logged in, redirect to where you need to.
                _this.isLoggedIn = false;
                console.log("No logged on");
            }
            //document.body.classList.add("loaded");
            document.getElementById("container").classList.add("loaded");
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: 'AIzaSyC6AHmxusZ2-lQYpxY3w-AXsh7enPLuovk',
            authDomain: 'gamingapp-1c9c3.firebaseapp.com'
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"] /*, private router: Router*/])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _servicios_juegos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios/juegos.service */ "./src/app/servicios/juegos.service.ts");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _juegos_addjueg_addjueg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./juegos/addjueg/addjueg.component */ "./src/app/juegos/addjueg/addjueg.component.ts");
/* harmony import */ var _juegos_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./juegos/juegos/juegos.component */ "./src/app/juegos/juegos/juegos.component.ts");
/* harmony import */ var _juegos_editjueg_editjueg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./juegos/editjueg/editjueg.component */ "./src/app/juegos/editjueg/editjueg.component.ts");
/* harmony import */ var _autenticacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./autenticacion/registro/registro.component */ "./src/app/autenticacion/registro/registro.component.ts");
/* harmony import */ var _autenticacion_inises_inises_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./autenticacion/inises/inises.component */ "./src/app/autenticacion/inises/inises.component.ts");
/* harmony import */ var _servicios_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./servicios/guard.service */ "./src/app/servicios/guard.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_19__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"] },
    { path: 'addjueg', component: _juegos_addjueg_addjueg_component__WEBPACK_IMPORTED_MODULE_12__["AddjuegComponent"], canActivate: [_servicios_guard_service__WEBPACK_IMPORTED_MODULE_17__["GuardService"]], data: { breadcrumb: "Añadir Juego" } },
    { path: 'juegos', component: _juegos_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_13__["JuegosComponent"], canActivate: [_servicios_guard_service__WEBPACK_IMPORTED_MODULE_17__["GuardService"]], data: { breadcrumb: "Juegos" } },
    { path: 'editjueg/:id', component: _juegos_editjueg_editjueg_component__WEBPACK_IMPORTED_MODULE_14__["EditjuegComponent"], canActivate: [_servicios_guard_service__WEBPACK_IMPORTED_MODULE_17__["GuardService"]], data: { breadcrumb: "Editar Juego" } },
    { path: 'registro', component: _autenticacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_15__["RegistroComponent"] },
    { path: 'iniciosesion', component: _autenticacion_inises_inises_component__WEBPACK_IMPORTED_MODULE_16__["InisesComponent"] },
    { path: '**', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_10__["InicioComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _juegos_addjueg_addjueg_component__WEBPACK_IMPORTED_MODULE_12__["AddjuegComponent"],
                _juegos_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_13__["JuegosComponent"],
                _juegos_editjueg_editjueg_component__WEBPACK_IMPORTED_MODULE_14__["EditjuegComponent"],
                _autenticacion_registro_registro_component__WEBPACK_IMPORTED_MODULE_15__["RegistroComponent"],
                _autenticacion_inises_inises_component__WEBPACK_IMPORTED_MODULE_16__["InisesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"]
            ],
            providers: [_servicios_juegos_service__WEBPACK_IMPORTED_MODULE_5__["JuegosService"], _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autenticacion/inises/inises.component.css":
/*!***********************************************************!*\
  !*** ./src/app/autenticacion/inises/inises.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGVudGljYWNpb24vaW5pc2VzL2luaXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/autenticacion/inises/inises.component.html":
/*!************************************************************!*\
  !*** ./src/app/autenticacion/inises/inises.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <h4>Introduzca los siguientes datos:</h4>\n      <label>Correo Electrónico</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" required autofocus>\n      <label>Contraseña</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" required>\n      <hr>\n      <button id=\"btn1\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Inicie sesión</button>\n      <p></p>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"signInWithGoogle()\">\n        <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n        Inicia sesión con Google\n      </button>\n    </form>\n    <p class=\"alert alert-danger\" *ngIf=\"mensaje\">\n      El usuario o contraseña no es correcto\n    </p>\n    <p>Si no dispone de cuenta pulse <a routerLink=\"/registro\">aquí</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/autenticacion/inises/inises.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/autenticacion/inises/inises.component.ts ***!
  \**********************************************************/
/*! exports provided: InisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InisesComponent", function() { return InisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InisesComponent = /** @class */ (function () {
    function InisesComponent(formBuilder, autService, router, activatedRouter) {
        this.formBuilder = formBuilder;
        this.autService = autService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.mensaje = false;
    }
    InisesComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ]
            ]
        });
    };
    InisesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userdata = this.saveUserdata();
        document.getElementById('btn1').setAttribute("disabled", "disabled");
        this.autService.inicioSesion(this.userdata)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['/inicio']);
        })
            .catch(function (error) {
            console.log(error);
            _this.mensaje = true;
        });
    };
    InisesComponent.prototype.saveUserdata = function () {
        var saveUserdata = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value,
        };
        return saveUserdata;
    };
    InisesComponent.prototype.isAuth = function () {
        return this.autService.isAuthenticated();
    };
    InisesComponent.prototype.signInWithGoogle = function () {
        this.autService.doGoogleLogin();
    };
    InisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inises',
            template: __webpack_require__(/*! ./inises.component.html */ "./src/app/autenticacion/inises/inises.component.html"),
            styles: [__webpack_require__(/*! ./inises.component.css */ "./src/app/autenticacion/inises/inises.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InisesComponent);
    return InisesComponent;
}());



/***/ }),

/***/ "./src/app/autenticacion/registro/registro.component.css":
/*!***************************************************************!*\
  !*** ./src/app/autenticacion/registro/registro.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGVudGljYWNpb24vcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/autenticacion/registro/registro.component.html":
/*!****************************************************************!*\
  !*** ./src/app/autenticacion/registro/registro.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n    <form [formGroup]=\"registroForm\" (ngSubmit)=\"onSubmit()\">\n      <h4>Introduzca sus datos de registro</h4>\n      <label>Correo Electrónico</label>\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" required autofocus>\n      <p class=\"alert alert-danger\" *ngIf=\"erroresForm.email\">\n        {{ erroresForm.email }}\n      </p>\n      <label>Contraseña</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" required>\n      <p class=\"alert alert-danger\" *ngIf=\"erroresForm.password\">\n        {{ erroresForm.password }}\n      </p>\n      <hr>\n      <button id=\"btnRegistro\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registroForm.valid\">Registrar</button>\n    </form>\n    <p class=\"alert alert-danger\" *ngIf=\"mensajeError\">\n      Este usuario ya está registrado\n    </p>\n    <p>Si ya dispone de cuenta pulse <a routerLink=\"/iniciosesion\">aquí</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/autenticacion/registro/registro.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/autenticacion/registro/registro.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(formBuilder, autService, router, activatedRouter) {
        this.formBuilder = formBuilder;
        this.autService = autService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.mensajeError = false;
        this.erroresForm = {
            'email': '',
            'password': ''
        };
        this.mensajesValidacion = {
            'email': {
                'required': 'Email obligatorio',
                'email': 'Introduzca una dirección email correcta'
            },
            'password': {
                'required': 'Contraseña obligatoria',
                'pattern': 'La contraseña debe tener al menos una letra un número ',
                'minlength': 'y más de 6 caracteres'
            }
        };
    }
    RegistroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registroForm = this.formBuilder.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]
            ]
        });
        this.registroForm.valueChanges.subscribe(function (data) {
            return _this.onValueChanged(data);
        });
        this.onValueChanged();
    };
    RegistroComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userdata = this.saveUserdata();
        document.getElementById('btnRegistro').setAttribute("disabled", "disabled");
        this.autService.registroUsuario(this.userdata)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['/inicio']);
        })
            .catch(function (error) {
            console.log(error);
            _this.mensajeError = true;
            setTimeout(function () {
                _this.mensajeError = false;
            }, 2000);
        });
    };
    RegistroComponent.prototype.saveUserdata = function () {
        var saveUserdata = {
            email: this.registroForm.get('email').value,
            password: this.registroForm.get('password').value,
        };
        return saveUserdata;
    };
    RegistroComponent.prototype.onValueChanged = function (data) {
        if (!this.registroForm) {
            return;
        }
        var form = this.registroForm;
        for (var field in this.erroresForm) {
            this.erroresForm[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.mensajesValidacion[field];
                for (var key in control.errors) {
                    this.erroresForm[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/autenticacion/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/autenticacion/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    margin-bottom: 40px;\r\n   }\r\n\r\n#loadheader{\r\n   height: 50px;\r\n   width: 50px;\r\n   border-radius: 100%;\r\n   margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCOztBQUVKO0dBQ0csYUFBYTtHQUNiLFlBQVk7R0FDWixvQkFBb0I7R0FDcEIsa0JBQWtCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgIH1cclxuXHJcbiNsb2FkaGVhZGVye1xyXG4gICBoZWlnaHQ6IDUwcHg7XHJcbiAgIHdpZHRoOiA1MHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <img id=\"loadheader\" src=\"./assets/images/logo.gif\">\n  <a class=\"navbar-brand\" href=\"#\">GamingApp</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"isAuth()\">\n        <a class=\"nav-link\" routerLink=\"/\">Inicio</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"isAuth()\">\n        <a class=\"nav-link\" routerLink=\"/juegos\">Juegos</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isAuth()\">\n        <button class=\"btn btn-primary float-md-right\" routerLink=\"/iniciosesion\">Inicie sesión</button>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isAuth()\"> \n        <button id=\"btnLogout\" class=\"btn btn-primary float-md-right\" (click)=\"onLogout()\">Cerrar sesión</button>\n      </li>\n    </ul>\n  </div>\n</nav>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(autService, router, activatedRouter) {
        this.autService = autService;
        this.router = router;
        this.activatedRouter = activatedRouter;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isAuth = function () {
        return this.autService.isAuthenticated();
    };
    HeaderComponent.prototype.onLogout = function () {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            this.autService.logout();
            this.router.navigate(['/inicio']);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footerInicio{\r\nposition: fixed;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100% ; \r\n   background-color:darkgrey;\r\n   color: black;\r\n   text-align: center;\r\n   height: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZ0JBQWdCO0dBQ2IsUUFBUTtHQUNSLFVBQVU7R0FDVixhQUFhO0dBQ2IsMEJBQTBCO0dBQzFCLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsY0FBYztDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXJJbmljaW97XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxuICAgbGVmdDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICB3aWR0aDogMTAwJSA7IFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtncmV5O1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgaGVpZ2h0OiAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Bienvenido a GamingApp</h2>\n<br>\n<div class=\"card text-center\">\n    <div class=\"card-header\">\n      ¿Quieres ver tus juegos favoritos?\n    </div>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Guárdalos como quieras</h4>\n      <p class=\"card-text\">Con esta aplicación podrás guardar todos tus juegos favoritos y ver su información cuando quieras.</p>\n      <a class=\"nav-item\" *ngIf=\"isAuth()\" routerLink=\"/juegos\" class=\"btn btn-primary\">Ver lista de juegos</a>\n      <a class=\"nav-item\" *ngIf=\"!isAuth()\" routerLink=\"/iniciosesion\" class=\"btn btn-primary\">Iniciar sesión</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      GamingApp\n    </div>\n  </div>\n\n<footer id=\"footerInicio\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 py-5\">\n        <div class=\"mb-5 flex-center\">\n          <a target=\"_blank\" rel=\"noopener noreferrer\" class=\"fb-ic\" href=\"https://www.facebook.com/fran.romero.549\">\n            <i class=\"fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n          </a>\n          <a target=\"_blank\" rel=\"noopener noreferrer\" class=\"tw-ic\" href=\"http://www.twitter.com/privateChanches\">\n            <i class=\"fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n          </a>\n          <a target=\"_blank\" rel=\"noopener noreferrer\" class=\"ins-ic\" href=\"http://www.instagram.com/chaanchess\">\n            <i class=\"fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioComponent = /** @class */ (function () {
    function InicioComponent(autService) {
        this.autService = autService;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.isAuth = function () {
        return this.autService.isAuthenticated();
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacionService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/juegos/addjueg/addjueg.component.css":
/*!******************************************************!*\
  !*** ./src/app/juegos/addjueg/addjueg.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n    border-left: 5px solid #a94442;\r\n   }\r\ninput.ng-valid.ng-dirty {\r\n    border-left: 5px solid #42A948;\r\n   }\r\n.check {\r\n    color: #42A948;\r\n    padding-left: 5px;\r\n   }\r\n.uncheck {\r\n    color: #a94442;\r\n    padding-left: 5px;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL2FkZGp1ZWcvYWRkanVlZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CO0FBQ0o7SUFDSSwrQkFBK0I7SUFDL0I7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIiLCJmaWxlIjoic3JjL2FwcC9qdWVnb3MvYWRkanVlZy9hZGRqdWVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gICB9XHJcbmlucHV0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICAgfVxyXG4uY2hlY2sge1xyXG4gICAgY29sb3I6ICM0MkE5NDg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgfVxyXG4udW5jaGVjayB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/juegos/addjueg/addjueg.component.html":
/*!*******************************************************!*\
  !*** ./src/app/juegos/addjueg/addjueg.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset 2\">\n    <h2>Añadir nuevo juego</h2>\n    <button class=\"btn btn-success float-md-right\" (click)=\"clearField()\">Limpiar campos</button>\n    <a class=\"btn btn-primary float-md-right\" routerLink=\"/juegos\">Regresar al listado</a>\n    <br>\n    <form [formGroup]=\"this.juegoService.form\" (ngSubmit)=\"onSubmit()\">\n      <input type=\"hidden\" formControlName=\"$key\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.nombre.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.nombre.invalid &&\n        this.juegoService.form.controls.nombre.touched\"></i>\n        <input formControlName=\"nombre\" class=\"form-control\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.nombre.invalid &&\n        this.juegoService.form.controls.nombre.touched\">\n          El campo Nombre es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fecha\">Fecha</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.fecha.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.fecha.invalid &&\n        this.juegoService.form.controls.fecha.touched\"></i>\n        <input type=\"date\" class=\"form-control\" id=\"fecha\" formControlName=\"fecha\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.fecha.invalid &&\n        this.juegoService.form.controls.fecha.touched\">\n          El campo Fecha es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"descripcion\">Descripción</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.descripcion.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.descripcion.invalid &&\n        this.juegoService.form.controls.descripcion.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"descripcion\" formControlName=\"descripcion\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.descripcion.invalid &&\n        this.juegoService.form.controls.descripcion.touched\">\n          El campo Descripción es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"puntuacion\">Puntuación</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.puntuacion.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.puntuacion.invalid &&\n        this.juegoService.form.controls.puntuacion.touched\"></i>\n        <input type=\"number\" class=\"form-control\" id=\"puntuacion\" formControlName=\"puntuacion\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.puntuacion.invalid &&\n        this.juegoService.form.controls.puntuacion.touched\">\n          La Puntuación debe de ser entre 1 y 10.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dificultad\">Dificultad</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.dificultad.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.dificultad.invalid &&\n        this.juegoService.form.controls.dificultad.touched\"></i>\n        <select class=\"form-control\" id=\"dificultad\" formControlName=\"dificultad\">\n          <option value=\"\">Seleccione...</option>\n          <option value=\"Fácil\">Fácil</option>\n          <option value=\"Media\">Media</option>\n          <option value=\"Difícil\">Difícil</option>\n        </select>\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.dificultad.invalid &&\n        this.juegoService.form.controls.dificultad.touched\">\n          El campo Dificultad es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"desarrolladora\">Desarrolladora</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.desarrolladora.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.desarrolladora.invalid &&\n        this.juegoService.form.controls.desarrolladora.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"desarrolladora\" formControlName=\"desarrolladora\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.desarrolladora.invalid &&\n        this.juegoService.form.controls.desarrolladora.touched\">\n          El campo Desarrolladora es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"trailer\">Tráiler</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.trailer.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.trailer.invalid &&\n        this.juegoService.form.controls.trailer.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"trailer\" formControlName=\"trailer\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.trailer.invalid &&\n        this.juegoService.form.controls.trailer.touched\">\n          El campo Trailer es obligatorio.\n        </p>\n      </div>\n      <button id=\"btnAdd\" class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!this.juegoService.form.valid\">Añadir Juego</button>\n      <a class=\"btn btn-danger\" routerLink=\"/juegos\">Cancelar</a>\n      <p class=\"alert alert-success\" *ngIf=\"enviado\">\n        Juego registrado correctamente.\n      </p>\n      <p class=\"alert alert-danger\" *ngIf=\"!this.juegoService.form.valid\">\n        Por favor complete todos los campos\n      </p>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/juegos/addjueg/addjueg.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/juegos/addjueg/addjueg.component.ts ***!
  \*****************************************************/
/*! exports provided: AddjuegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddjuegComponent", function() { return AddjuegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_juegos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/juegos.service */ "./src/app/servicios/juegos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddjuegComponent = /** @class */ (function () {
    function AddjuegComponent(juegoService) {
        this.juegoService = juegoService;
        this.formControls = this.juegoService.form.controls;
        this.enviado = false;
    }
    AddjuegComponent.prototype.ngOnInit = function () {
    };
    AddjuegComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.juegoService.form.valid) {
            (this.juegoService.form.get('$key').value == null);
            this.juegoService.insertJuego(this.juegoService.form.value);
            this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 3000);
            this.submitted = false;
            this.juegoService.form.reset();
            //this is to be done for proper reset operation
            this.juegoService.form.setValue({
                $key: null,
                nombre: '',
                fecha: '',
                descripcion: '',
                puntuacion: '',
                dificultad: '',
                desarrolladora: '',
                trailer: ''
            });
            this.enviado = true;
            setTimeout(function () {
                _this.enviado = false;
            }, 2000);
        }
    };
    AddjuegComponent.prototype.clearField = function () {
        this.juegoService.form.setValue({
            $key: null,
            nombre: '',
            fecha: '',
            descripcion: '',
            puntuacion: '',
            dificultad: '',
            desarrolladora: '',
            trailer: ''
        });
    };
    AddjuegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addjueg',
            template: __webpack_require__(/*! ./addjueg.component.html */ "./src/app/juegos/addjueg/addjueg.component.html"),
            styles: [__webpack_require__(/*! ./addjueg.component.css */ "./src/app/juegos/addjueg/addjueg.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_juegos_service__WEBPACK_IMPORTED_MODULE_1__["JuegosService"]])
    ], AddjuegComponent);
    return AddjuegComponent;
}());



/***/ }),

/***/ "./src/app/juegos/editjueg/editjueg.component.css":
/*!********************************************************!*\
  !*** ./src/app/juegos/editjueg/editjueg.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n    border-left: 5px solid #a94442;\r\n   }\r\n   input.ng-valid.ng-dirty {\r\n    border-left: 5px solid #42A948;\r\n   }\r\n   select.ng-invalid.ng-touched {\r\n    border-left: 5px solid #a94442;\r\n   }\r\n   select.ng-valid.ng-dirty {\r\n    border-left: 5px solid #42A948;\r\n   }\r\n   .check {\r\n    color: #42A948;\r\n   }\r\n   .uncheck {\r\n    color: #a94442;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVlZ29zL2VkaXRqdWVnL2VkaXRqdWVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0I7R0FDRDtJQUNDLCtCQUErQjtJQUMvQjtHQUNEO0lBQ0MsK0JBQStCO0lBQy9CO0dBQ0Q7SUFDQywrQkFBK0I7SUFDL0I7R0FDRDtJQUNDLGVBQWU7SUFDZjtHQUNEO0lBQ0MsZUFBZTtJQUNmIiwiZmlsZSI6InNyYy9hcHAvanVlZ29zL2VkaXRqdWVnL2VkaXRqdWVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gICB9XHJcbiAgIGlucHV0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICAgfVxyXG4gICBzZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICAgfVxyXG4gICBzZWxlY3QubmctdmFsaWQubmctZGlydHkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gICB9XHJcbiAgIC5jaGVjayB7XHJcbiAgICBjb2xvcjogIzQyQTk0ODtcclxuICAgfVxyXG4gICAudW5jaGVjayB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/juegos/editjueg/editjueg.component.html":
/*!*********************************************************!*\
  !*** ./src/app/juegos/editjueg/editjueg.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset 2\">\n    <h2>Editar juego</h2>\n    <a class=\"btn btn-primary float-md-right\" routerLink=\"/juegos\">Regresar al listado</a>\n    <br>\n    <form [formGroup]=\"this.juegoService.form\" (ngSubmit)=\"onSubmit()\">\n      <input type=\"hidden\" formControlName=\"$key\">\n      <div class=\"form-group\">\n        <label>Nombre</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.nombre.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.nombre.invalid &&\n        this.juegoService.form.controls.nombre.touched\"></i>\n        <input formControlName=\"nombre\" class=\"form-control\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.nombre.invalid &&\n        this.juegoService.form.controls.nombre.touched\">\n          El campo Nombre es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"fecha\">Fecha</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.fecha.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.fecha.invalid &&\n        this.juegoService.form.controls.fecha.touched\"></i>\n        <input type=\"date\" class=\"form-control\" id=\"fecha\" formControlName=\"fecha\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.fecha.invalid &&\n        this.juegoService.form.controls.fecha.touched\">\n          El campo Fecha es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"descripcion\">Descripción</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.descripcion.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.descripcion.invalid &&\n        this.juegoService.form.controls.descripcion.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"descripcion\" formControlName=\"descripcion\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.descripcion.invalid &&\n        this.juegoService.form.controls.descripcion.touched\">\n          El campo Descripción es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"puntuacion\">Puntuación</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.puntuacion.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.puntuacion.invalid &&\n        this.juegoService.form.controls.puntuacion.touched\"></i>\n        <input type=\"number\" class=\"form-control\" id=\"puntuacion\" formControlName=\"puntuacion\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.puntuacion.invalid &&\n        this.juegoService.form.controls.puntuacion.touched\">\n          La Puntuación debe de ser entre 1 y 10.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"dificultad\">Dificultad</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.dificultad.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.dificultad.invalid &&\n        this.juegoService.form.controls.dificultad.touched\"></i>\n        <select class=\"form-control\" id=\"dificultad\" formControlName=\"dificultad\">\n          <option value=\"\">Seleccione...</option>\n          <option value=\"Fácil\">Fácil</option>\n          <option value=\"Media\">Media</option>\n          <option value=\"Difícil\">Difícil</option>\n        </select>\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.dificultad.invalid &&\n        this.juegoService.form.controls.dificultad.touched\">\n          El campo Dificultad es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"desarrolladora\">Desarrolladora</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.desarrolladora.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.desarrolladora.invalid &&\n        this.juegoService.form.controls.desarrolladora.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"desarrolladora\" formControlName=\"desarrolladora\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.desarrolladora.invalid &&\n        this.juegoService.form.controls.desarrolladora.touched\">\n          El campo Desarrolladora es obligatorio.\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"trailer\">Tráiler</label>\n        <i class=\"fa fa-check-circle check\" *ngIf=\"this.juegoService.form.controls.trailer.valid\"></i>\n        <i class=\"fa fa-exclamation-circle uncheck\" *ngIf=\"this.juegoService.form.controls.trailer.invalid &&\n        this.juegoService.form.controls.trailer.touched\"></i>\n        <input type=\"text\" class=\"form-control\" id=\"trailer\" formControlName=\"trailer\">\n        <p class=\"alert alert-danger\" *ngIf=\"this.juegoService.form.controls.trailer.invalid &&\n        this.juegoService.form.controls.trailer.touched\">\n          El campo Trailer es obligatorio.\n        </p>\n      </div>\n      <button id=\"btnAdd\" class=\"btn btn-primary\" (click)=\"saveEdit()\" [disabled]=\"!this.juegoService.form.valid\">Guardar cambios</button>\n      <a class=\"btn btn-danger\" routerLink=\"/juegos\" (click)=\"clearField()\">Cancelar</a>\n      <p class=\"alert alert-danger\" *ngIf=\"!this.juegoService.form.valid\">\n        Por favor complete todos los campos\n      </p>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/juegos/editjueg/editjueg.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/juegos/editjueg/editjueg.component.ts ***!
  \*******************************************************/
/*! exports provided: EditjuegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditjuegComponent", function() { return EditjuegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_juegos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/juegos.service */ "./src/app/servicios/juegos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditjuegComponent = /** @class */ (function () {
    function EditjuegComponent(router, juegoService) {
        this.router = router;
        this.juegoService = juegoService;
        this.formControls = this.juegoService.form.controls;
    }
    EditjuegComponent.prototype.ngOnInit = function () {
    };
    EditjuegComponent.prototype.saveEdit = function () {
        this.juegoService.updateJuego(this.juegoService.form.value);
        this.router.navigate(['/juegos']);
        this.juegoService.form.setValue({
            $key: null,
            nombre: '',
            fecha: '',
            descripcion: '',
            puntuacion: '',
            dificultad: '',
            desarrolladora: '',
            trailer: ''
        });
    };
    EditjuegComponent.prototype.clearField = function () {
        this.juegoService.form.setValue({
            $key: null,
            nombre: '',
            fecha: '',
            descripcion: '',
            puntuacion: '',
            dificultad: '',
            desarrolladora: '',
            trailer: ''
        });
    };
    EditjuegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editjueg',
            template: __webpack_require__(/*! ./editjueg.component.html */ "./src/app/juegos/editjueg/editjueg.component.html"),
            styles: [__webpack_require__(/*! ./editjueg.component.css */ "./src/app/juegos/editjueg/editjueg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servicios_juegos_service__WEBPACK_IMPORTED_MODULE_1__["JuegosService"]])
    ], EditjuegComponent);
    return EditjuegComponent;
}());



/***/ }),

/***/ "./src/app/juegos/juegos/juegos.component.css":
/*!****************************************************!*\
  !*** ./src/app/juegos/juegos/juegos.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1ZWdvcy9qdWVnb3MvanVlZ29zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/juegos/juegos/juegos.component.html":
/*!*****************************************************!*\
  !*** ./src/app/juegos/juegos/juegos.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Listado de Juegos</h3>\n<a class=\"btn btn-primary float-md-right\" routerLink=\"/addjueg\">Añadir nuevo juego</a>\n<br>\n<form class=\"form-inline\">\n  <input class=\"form-control\" name=\"searchInput\" placeholder=\"Buscar...\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\"\n    style=\"width: 80%;\">\n  <button class=\"btn btn-outline-primary\" (click)=\"searchText=''\">X</button>\n</form>\n<table class=\"table table-bordered table-striped tabla\" style=\"margin-top:\n  40px;\">\n  <thead>\n    <tr class=\"filters\">\n      <th>Nombre</th>\n      <th>Fecha de salida</th>\n      <th>Descripción</th>\n      <th>Puntuación</th>\n      <th>Dificultad</th>\n      <th>Desarrolladora</th>\n      <th>Tráiler</th>\n      <th>Editar</th>\n      <th>Eliminar</th>\n    </tr>\n  </thead>\n  <ng-container *ngFor=\"let juego of juegoArray; let i = index\">\n    <tbody>\n      <tr *ngIf=\"filterCondition(juego)\">\n        <td>{{ juego.nombre }}</td>\n        <td>{{ juego.fecha }}</td>\n        <td>{{ juego.descripcion }}</td>\n        <td>{{ juego.puntuacion }}</td>\n        <td>{{ juego.dificultad }}</td>\n        <td>{{ juego.desarrolladora }}</td>\n        <td>\n          <a target=\"_blank\" rel=\"noopener noreferrer\" type=\"button\" class=\"btn btn-primary\" href=\"{{juego.trailer}}\"><i\n              style=\"font-size:20px\" class=\"fa fa-youtube-play\"></i></a>\n        </td>\n        <td>\n          <button type=\"button\" class=\"btn btn-success\" routerLink=\"/editjueg/{{ juego.$key }}\" (click)=\"juegosService.populateForm(juego)\"><i\n              class=\"material-icons\">mode_edit</i></button>\n        </td>\n        <td>\n          <button id=\"btnDelete{{i}}\" class=\"btn btn-danger\" (click)=\"onDelete(juego.$key)\"><i class=\"material-icons\">delete</i></button>\n        </td>\n      </tr>\n    </tbody>\n  </ng-container>\n</table>\n<div *ngIf=\"!juegoArray || juegoArray.length === 0\">\n  <div class=\"alert alert-primary\" *ngIf=\"shownoGamesMessage\">\n    No hay ningún juego.\n  </div>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">\n  Juego borrado correctamente.\n</div>\n<div *ngIf=\"cargando\" class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-primary\" role=\"progressbar\" aria-valuenow=\"100\"\n    aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\"></div>\n</div>"

/***/ }),

/***/ "./src/app/juegos/juegos/juegos.component.ts":
/*!***************************************************!*\
  !*** ./src/app/juegos/juegos/juegos.component.ts ***!
  \***************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_juegos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/juegos.service */ "./src/app/servicios/juegos.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JuegosComponent = /** @class */ (function () {
    function JuegosComponent(juegosService) {
        this.juegosService = juegosService;
        this.juegoArray = [];
        this.searchText = "";
        this.cargando = false;
    }
    JuegosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.juegosService.getJuegos().subscribe(function (list) {
            _this.juegoArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            _this.shownoGamesMessage = true;
            _this.cargando = false;
        });
    };
    JuegosComponent.prototype.onDelete = function ($key, miboton) {
        var _this = this;
        if (confirm('¿Estás seguro de que deseas borrar este juego?')) {
            this.juegosService.deleteJuego($key);
            this.showDeletedMessage = true;
            setTimeout(function () { return _this.showDeletedMessage = false; }, 3000);
        }
    };
    JuegosComponent.prototype.filterCondition = function (juego) {
        return juego.nombre.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    };
    JuegosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-juegos',
            template: __webpack_require__(/*! ./juegos.component.html */ "./src/app/juegos/juegos/juegos.component.html"),
            styles: [__webpack_require__(/*! ./juegos.component.css */ "./src/app/juegos/juegos/juegos.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_juegos_service__WEBPACK_IMPORTED_MODULE_1__["JuegosService"]])
    ], JuegosComponent);
    return JuegosComponent;
}());



/***/ }),

/***/ "./src/app/servicios/autenticacion.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/autenticacion.service.ts ***!
  \****************************************************/
/*! exports provided: AutenticacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionService", function() { return AutenticacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutenticacionService = /** @class */ (function () {
    function AutenticacionService(router, activatedRouter, afAuth) {
        var _this = this;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.afAuth = afAuth;
        this.userDetails = null;
        this.user = afAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                console.log("NO entiendo nada, si dentro");
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                console.log("fuera");
                _this.userDetails = null;
            }
        });
    }
    AutenticacionService.prototype.registroUsuario = function (userdata) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(userdata.email, userdata.password);
    };
    AutenticacionService.prototype.inicioSesion = function (userdata) {
        return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(userdata.email, userdata.password);
    };
    AutenticacionService.prototype.isAuthenticated = function () {
        var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AutenticacionService.prototype.logout = function () {
        this.userDetails = null;
        this.user = null;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AutenticacionService.prototype.isLogged = function () {
        return this.afAuth.authState;
    };
    AutenticacionService.prototype.getUser = function () {
        if (firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser)
            return firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.email;
        else
            return null;
    };
    AutenticacionService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
                _this.router.navigate(['/inicio']);
            });
        });
    };
    AutenticacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AutenticacionService);
    return AutenticacionService;
}());



/***/ }),

/***/ "./src/app/servicios/guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/servicios/guard.service.ts ***!
  \********************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/autenticacion.service */ "./src/app/servicios/autenticacion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GuardService = /** @class */ (function () {
    function GuardService(autenticacionService) {
        this.autenticacionService = autenticacionService;
        this.res = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.res = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
    GuardService.prototype.canActivate = function (route, state) {
        return this.autenticacionService.isLogged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user)
                return true;
            else
                return false;
        }));
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_servicios_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__["AutenticacionService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/servicios/juegos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/juegos.service.ts ***!
  \*********************************************/
/*! exports provided: JuegosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosService", function() { return JuegosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuegosService = /** @class */ (function () {
    function JuegosService(firebase, router) {
        this.firebase = firebase;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            puntuacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]),
            dificultad: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            desarrolladora: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            trailer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    JuegosService.prototype.getJuegos = function () {
        this.juegosList = this.firebase.list('juegos');
        return this.juegosList.snapshotChanges();
    };
    JuegosService.prototype.insertJuego = function (juego) {
        this.juegosList.push({
            nombre: juego.nombre,
            fecha: juego.fecha,
            descripcion: juego.descripcion,
            puntuacion: juego.puntuacion,
            dificultad: juego.dificultad,
            desarrolladora: juego.desarrolladora,
            trailer: juego.trailer,
        });
    };
    JuegosService.prototype.populateForm = function (juego) {
        this.form.setValue(juego);
    };
    JuegosService.prototype.updateJuego = function (juego) {
        this.juegosList.update(juego.$key, {
            nombre: juego.nombre,
            fecha: juego.fecha,
            descripcion: juego.descripcion,
            puntuacion: juego.puntuacion,
            dificultad: juego.dificultad,
            desarrolladora: juego.desarrolladora,
            trailer: juego.trailer,
        });
    };
    JuegosService.prototype.deleteJuego = function ($key) {
        this.juegosList.remove($key);
    };
    JuegosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JuegosService);
    return JuegosService;
}());



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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC6AHmxusZ2-lQYpxY3w-AXsh7enPLuovk",
        authDomain: "gamingapp-1c9c3.firebaseapp.com",
        databaseURL: "https://gamingapp-1c9c3.firebaseio.com",
        projectId: "gamingapp-1c9c3",
        storageBucket: "gamingapp-1c9c3.appspot.com",
        messagingSenderId: "141265412425"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Beep Montalban\Desktop\Ciclo\gamingApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map