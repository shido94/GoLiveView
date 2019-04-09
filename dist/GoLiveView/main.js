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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videochat/videochat.component */ "./src/app/videochat/videochat.component.ts");
/* harmony import */ var _showvideos_showvideos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showvideos/showvideos.component */ "./src/app/showvideos/showvideos.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_4__["VideochatComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _showvideos_showvideos_component__WEBPACK_IMPORTED_MODULE_5__["ShowvideosComponent"],
                _channel_channel_component__WEBPACK_IMPORTED_MODULE_12__["ChannelComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["routes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videochat/videochat.component */ "./src/app/videochat/videochat.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _showvideos_showvideos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showvideos/showvideos.component */ "./src/app/showvideos/showvideos.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");





var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
    },
    {
        path: 'channel/:channel',
        component: _videochat_videochat_component__WEBPACK_IMPORTED_MODULE_0__["VideochatComponent"],
    },
    {
        path: 'connect',
        component: _showvideos_showvideos_component__WEBPACK_IMPORTED_MODULE_2__["ShowvideosComponent"]
    },
    {
        path: 'channel',
        component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_3__["ChannelComponent"]
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    }
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BASE_URL = 'https://go-live-app.herokuapp.com';
// const BASE_URL = 'localhost:3000';
var ChatService = /** @class */ (function () {
    function ChatService() {
        // public messageSource = new Subject();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(BASE_URL);
    }
    // sendMessage(message: string) {
    //   console.log(message);
    //   this.messageSource.next(message);
    // }
    ChatService.prototype.sendData = function (joinData) {
        this.socket.emit('join', joinData);
    };
    ChatService.prototype.disconnets = function () {
        console.log('reaxdf');
        this.socket.on('disconnect');
        this.socket.emit('pageDisconnected');
    };
    ChatService.prototype.removePeer = function () {
        var _this = this;
        var observables = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('removePeer', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observables;
    };
    ChatService.prototype.recievingAddPeer = function () {
        var _this = this;
        var observables = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('addPeer', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observables;
    };
    ChatService.prototype.relayIceCandidate = function (iceData) {
        this.socket.emit('relayIceCandidate', iceData);
    };
    ChatService.prototype.relaySessionDescription = function (sessionData) {
        this.socket.emit('relaySessionDescription', sessionData);
    };
    ChatService.prototype.recievingSessionDescription = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('sessionDescription', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnets(); };
        });
        return observable;
    };
    ChatService.prototype.recievingIceCandidate = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('iceCandidates', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnets(); };
        });
        return observable;
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/channel/channel.component.css":
/*!***********************************************!*\
  !*** ./src/app/channel/channel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.form-full-width {\n  width: 100%;\n}\n\nform input{\n  color: white;\n  font-size:18pt;\n  height: 30px;\n  /*width:200px;*/\n}\n\nmat-card button{\n  margin-top: 20px;\n}\n\nmat-card h1{\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nmat-card p, h1 {\n  color: white;\n}\n\nmat-card{\n  height: 100%;\n  background-color: #265469;\n  text-align: center;\n}\n\nmat-card mat-hint, mat-error{\n  /*color: white;*/\n}\n\nmat-card .form{\n  text-align: center;\n  align-items: center;\n}\n\nmat-card form{\n  display: inline-block;\n}\n\nmat-card .header{\n  text-align: center;\n  margin-top: 5%;\n  font-size: 2.5em;\n}\n\nmat-card .pHeader p{\n  line-height: 50px;\n  font-size: 1.5em;\n  color: #C6C2C4;\n}\n\nmat-card .pData p{\n  line-height: 50px;\n  font-size: 1.5em;\n}\n\n#about h1{\n  color: #404040;\n  font-size: 3.5rem;\n  font-weight: 300;\n}\n\n#about .Pheader{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/channel/channel.component.html":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"header\">\n    <h1>GoLive</h1>\n  </div>\n  <div class=\"pHeader\">\n    <p>Please use some expressive channel name</p>\n  </div>\n  <mat-card-content>\n    <div class=\"form\">\n      <form class=\"mat-form\" method=\"post\" [formGroup]=\"uploadForm\" enctype=\"multipart/form-data\" (ngSubmit)=\"OnUpload(uploadForm.value)\">\n        <mat-form-field class=\"form-full-width\">\n          <input matInput placeholder=\"Channel Name\" #sub formControlName=\"chatName\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"!this.uploadForm.hasError('required')\">\n            Channel Name is required\n          </mat-error>\n          <mat-error *ngIf=\"this.uploadForm.hasError('required')\">\n            Channel Name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (invalid)=\"!uploadForm\" (click)=\"OnUpload(uploadForm.value)\">GoLive</button>\n      </form>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: MyErrorStateMatcher, ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
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




/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ChannelComponent = /** @class */ (function () {
    function ChannelComponent(_router, _formBuilder, _chatService) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._chatService = _chatService;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        this.uploadForm = this._formBuilder.group({
            chatName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.matcher = new MyErrorStateMatcher();
    };
    ChannelComponent.prototype.OnUpload = function (name) {
        this._router.navigate(['channel', name.chatName]);
    };
    ChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! ./channel.component.html */ "./src/app/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.css */ "./src/app/channel/channel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-container {*/\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  /*}*/\n  /*.example-container > * {*/\n  /*width: 100%;*/\n  /*}*/\n  .button-row{\n  text-align: center;\n  /*display: flex;*/\n  align-items: center;\n}\n  .button-row button{\n  margin: 15px;\n}\n  span{\n  width: 30%;\n}\n  mat-card h1{\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n}\n  mat-card p, h1 {\n  color: white;\n}\n  mat-card{\n  height: 90%;\n  background-color: #265469;\n  text-align: center;\n}\n  mat-card .header{\n  text-align: center;\n  margin-top: 5%;\n  font-size: 2.5em;\n}\n  mat-card .pHeader p{\n  line-height: 50px;\n  font-size: 1.5em;\n  color: #C6C2C4;\n}\n  mat-card .pData p{\n  line-height: 50px;\n  font-size: 1.5em;\n}\n  #about h1{\n  color: #404040;\n  font-size: 3.5rem;\n  font-weight: 300;\n}\n  #about .Pheader{\n  text-align: center;\n  /*margin: 100px 70px;*/\n}\n  #about .space1{\n  margin: 100px 70px 0 70px;\n}\n  #about .space2{\n  margin: 20px 70px 100px 70px;\n}\n  #about .contentData{\n  width: 80%;\n  text-align: center;\n  align-items: center;\n}\n  .footer{\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  line-height: 3em;\n  background-color: #265469;\n  text-align: center;\n  align-items: center;\n  font-family: 'Questrial', sans-serif;\n  font-size: 12pt;\n}\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"header\">\n    <h1>GoLive</h1>\n  </div>\n  <div class=\"pHeader\">\n    <p>Welcome to our live video chatting website</p>\n  </div>\n  <mat-card-content>\n    <div class=\"button-row \">\n      <button mat-raised-button color=\"primary\" (click)=\"goLive()\">GoLive</button>\n      <span></span>\n      <button mat-raised-button color=\"primary\" (click)=\"liveOption()\">Connect</button>\n    </div>\n    <div class=\"pData\">\n      <p>\n        GoLive provides free free video chat option with anyone of your choice.\n      </p>\n    </div>\n  </mat-card-content>\n</mat-card>\n<div id=\"about\">\n  <hr class=\"space1\">\n  <div class=\"container contentData\">\n    <div class=\"Pheader\">\n      <h1>\n        About GoLive\n      </h1>\n    </div>\n      It's free online chat. You are going to chat with any stranger of your respective college.\n      Meet & talk to strangers from your college. You have to only enter your college email-id,\n      and we will never share your private details with anyone.\n      To use our free text chatroom, you are accepting our Terms of Usage below\n  </div>\n  <hr class=\"space2\">\n</div>\n<div class=\"footer\">\n  Copyright © 2018 - Colloque | Design and developed by Rupesh yadav\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(_router) {
        this._router = _router;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.goLive = function () {
        this._router.navigate(['channel']);
    };
    MainComponent.prototype.liveOption = function () {
        this._router.navigate(['list']);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/showvideos/showvideos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/showvideos/showvideos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showvideos/showvideos.component.html":
/*!******************************************************!*\
  !*** ./src/app/showvideos/showvideos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video width=\"400\" controls></video>\n"

/***/ }),

/***/ "./src/app/showvideos/showvideos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/showvideos/showvideos.component.ts ***!
  \****************************************************/
/*! exports provided: ShowvideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowvideosComponent", function() { return ShowvideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowvideosComponent = /** @class */ (function () {
    function ShowvideosComponent(_chatService) {
        this._chatService = _chatService;
        var myMediaSource = new MediaSource();
        this.video = document.querySelector('video');
        this.video.src = URL.createObjectURL(myMediaSource);
        var videoSourceBuffer = myMediaSource
            .addSourceBuffer('video/mp4; codecs="avc1.64001e"');
        //
        // this._chatService.recieveData()
        //   .subscribe((data) => {
        //     console.log(data);
        //
        //
        //     // const videoData = data.arrayBuffer();
        //     // videoSourceBuffer.appendBuffer(videoData);
        //     // videoSourceBuffer.appendBuffer(data);
        //   });
    }
    ShowvideosComponent.prototype.ngOnInit = function () {
    };
    ShowvideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showvideos',
            template: __webpack_require__(/*! ./showvideos.component.html */ "./src/app/showvideos/showvideos.component.html"),
            styles: [__webpack_require__(/*! ./showvideos.component.css */ "./src/app/showvideos/showvideos.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ShowvideosComponent);
    return ShowvideosComponent;
}());



/***/ }),

/***/ "./src/app/videochat/videochat.component.css":
/*!***************************************************!*\
  !*** ./src/app/videochat/videochat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\n  background: black;\n  /*border: 1px solid gray;*/\n}\n\n.call-page {\n  position: relative;\n  display: block;\n  /*margin: 0 auto;*/\n  width: 100%;\n  height: 100%;\n}\n\n#vid1 {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n\n#vid2 {\n  width: 100%;\n  height: 100%;\n}\n\n/*#vid1 {*/\n\n/*height : 600px;*/\n\n/*width: 600px;*/\n\n/*display: inline-block;*/\n\n/*border: 1px red solid;*/\n\n/*}*/\n\n/*#vid2{*/\n\n/*height: 300px;*/\n\n/*width: 300px;*/\n\n/*display: inline-block;*/\n\n/*border: 1px blue solid;*/\n\n/*}*/\n"

/***/ }),

/***/ "./src/app/videochat/videochat.component.html":
/*!****************************************************!*\
  !*** ./src/app/videochat/videochat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"callPage\" class = \"call-page\">\n  <video id = \"vid1\" autoplay muted=\"muted\"></video>\n  <video id = \"vid2\" autoplay></video>\n</div>\n\n\n\n<!--<button (click)=\"btnGetAudioTracks()\">getAudioTracks()</button>-->\n<!--<button (click)=\"btnGetTrackById()\">getTrackById()</button>-->\n<!--<button (click)=\"btnGetTracks()\">getTracks()</button>-->\n<!--<button (click)=\"btnGetVideoTracks()\">getVideoTracks()</button>-->\n<!--<button (click)=\"btnRemoveAudioTrack()\">removeTrack() - audio</button>-->\n<!--<button (click)=\"btnRemoveVideoTrack()\">removeTrack() - video</button>-->\n"

/***/ }),

/***/ "./src/app/videochat/videochat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/videochat/videochat.component.ts ***!
  \**************************************************/
/*! exports provided: VideochatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideochatComponent", function() { return VideochatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");
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




/** CONFIG **/
var USE_AUDIO = {
    sampleRate: 48000,
    channelCount: 2,
    volume: 0,
    echoCancellation: true
};
var USE_VIDEO = true;
var DEFAULT_CHANNEL = 'some-global-channel-name';
var MUTE_AUDIO_BY_DEFAULT = false;
var local_media_stream = null; /* our own microphone / webcam */
var peers = {}; /* keep track of our peer connections, indexed by peer_id (aka socket.io id) */
var peer_media_elements = {}; /* keep track of our <video>/<audio> tags, indexed by peer_id */
/** You should probably use a different stun server doing commercial stuff **/
var ICE_SERVERS = [
    { url: 'stun:stun.l.google.com:19302' }
];
var VideochatComponent = /** @class */ (function () {
    function VideochatComponent(_chatService, _route) {
        var _this = this;
        this._chatService = _chatService;
        this._route = _route;
        // console.log('Signaling server said to add peer:', config);
        this._chatService.recievingAddPeer()
            .subscribe(function (config1) {
            // console.log('reaching');
            // console.log('Signaling server said to add peer:', config);
            var peerId = config1.peerId;
            if (peerId in peers) {
                /* This could happen if the user joins multiple channels where the other peer is also in. */
                // console.log("Already connected to peer ", peer_id);
                return;
            }
            var peer_connection = new RTCPeerConnection({ 'iceServers': ICE_SERVERS }, { 'optional': [{ 'DtlsSrtpKeyAgreement': true }] } /* this will no longer be needed by chrome
                                                             * eventually (supposedly), but is necessary
                                                             * for now to get firefox to talk to chrome */);
            peers[peerId] = peer_connection;
            var i = 0;
            peer_connection.onicecandidate = function (event) {
                // console.log('event => ', event);
                i++;
                if (event.candidate) {
                    // console.log(i);
                    // console.log('phuch gya');
                    _this._chatService.relayIceCandidate({
                        'peerId': peerId,
                        'iceCandidate': {
                            'sdpMLineIndex': event.candidate.sdpMLineIndex,
                            'candidate': event.candidate.candidate
                        }
                    });
                }
            };
            peer_connection.onaddstream = function (event) {
                // console.log('I am getting media stream');
                // (<HTMLVideoElement>document.getElementById('vid2')).src = window.URL.createObjectURL(local_media_stream);
                var video = document.querySelector('#vid2');
                // // inserting our stream to the video tag
                // video.src = window.URL.createObjectURL(event.stream);
                video.srcObject = event.stream;
            };
            /* Add our local stream */
            peer_connection.addStream(local_media_stream);
            /* Only one side of the peer connection should create the
             * offer, the signaling server picks one to be the offerer.
             * The other user will get a 'sessionDescription' event and will
             * create an offer, then send back an answer 'sessionDescription' to us
             */
            if (config1.should_create_offer) {
                // console.log('reaches');
                peer_connection.createOffer(function (local_description) {
                    // console.log("Local offer description is: ", local_description);
                    peer_connection.setLocalDescription(local_description, function () {
                        // console.log('peerIDIzd => ', peerId);
                        // console.log('2');
                        _this._chatService.relaySessionDescription({ 'peerId': peerId, 'sessionDescription': local_description });
                    }, function () {
                        console.log('Offer setLocalDescription failed!');
                        alert('Offer setLocalDescription failed!');
                    });
                }, function (error) {
                    console.log('Error sending offer: ', error);
                });
            }
        });
        this._chatService.recievingSessionDescription()
            .subscribe(function (config2) {
            var peerId = config2.peerId;
            var peer = peers[peerId];
            var remoteDescription = config2.sessionDescription;
            // console.log('config => ', config);
            var desc = new RTCSessionDescription(remoteDescription);
            var stuff = peer.setRemoteDescription(desc, function () {
                // console.log('reaches2');
                // console.log('setRemoteDescription succeeded');
                if (remoteDescription.type === 'offer') {
                    // console.log('reaches3');
                    // console.log('Creating Answer');
                    peer.createAnswer(function (localDescription) {
                        // console.log('reaches4');
                        // console.log('Answer description is: ', localDescription);
                        peer.setLocalDescription(localDescription, function () {
                            // console.log('1');
                            // console.log('peerId');
                            _this._chatService.relaySessionDescription({ 'peerId': peerId, 'sessionDescription': localDescription });
                            // console.log('Answer setLocalDescription succeeded');
                        }, function () {
                            alert('Answer setLocalDescription failed!');
                        });
                    }, function (error) {
                        console.log('Error creating answer: ', error);
                        console.log(peer);
                    });
                }
            }, function (error) {
                console.log('setRemoteDescription error: ', error);
            });
        });
        this._chatService.recievingIceCandidate()
            .subscribe(function (config3) {
            var peer = peers[config3.peerId];
            var iceCandidate = config3.iceCandidate;
            peer.addIceCandidate(new RTCIceCandidate(iceCandidate));
        });
        this._chatService.removePeer()
            .subscribe(function (config4) {
            var peerId = config4.peerId;
            if (peerId in peer_media_elements) {
                peer_media_elements[peerId].remove();
            }
            if (peerId in peers) {
                peers[peerId].close();
            }
            delete peers[peerId];
            delete peer_media_elements[config4.peerId];
        });
    }
    VideochatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _navigator = navigator;
        var constraints = { audio: USE_AUDIO, video: USE_VIDEO };
        // Set_up Th e local media
        setup_local_media(function () {
            /* once the user has given us access to their
             * microphone/camcorder, join the channel and start peering up */
            _this._route.params.subscribe(function (params) {
                DEFAULT_CHANNEL = params['channel'];
                _this._chatService.sendData({ 'channel': DEFAULT_CHANNEL, 'userdata': { 'whatever-you-want-here': 'stuff' } });
            });
        }, function (error) {
            alert('Camera can not be access');
        });
        function setup_local_media(callback, errorback) {
            if (local_media_stream != null) {
                if (callback) {
                    callback();
                    return;
                }
            }
            function hasUserMedia() {
                // check if the browser supports the WebRTC
                return !!(_navigator.getUserMedia
                    || _navigator.webkitGetUserMedia ||
                    _navigator.mozGetUserMedia || _navigator.msGetUserMedia);
            }
            if (hasUserMedia()) {
                _navigator.getUserMedia = (_navigator.getUserMedia || _navigator.webkitGetUserMedia
                    || _navigator.mozGetUserMedia || _navigator.msGetUserMedia);
                _navigator.mediaDevices.getUserMedia(constraints)
                    .then(function (stream) {
                    var video = document.querySelector('#vid1');
                    // inserting our stream to the video tag
                    // video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream;
                    // video.onloadedmetadata = function(e) {
                    //   video.play();
                    // };
                    // (<HTMLVideoElement>document.getElementById('vid1')).src = window.URL.createObjectURL(stream);
                    // asign stream to local_media
                    local_media_stream = stream;
                    if (callback) {
                        callback();
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                    alert(error);
                });
            }
            else {
                alert('WebRTC is not supported');
                if (errorback) {
                    errorback();
                }
            }
        }
    };
    VideochatComponent.prototype.ngOnDestroy = function () {
        for (var peer_id in peer_media_elements) {
            if (peer_media_elements.hasOwnProperty(peer_id)) {
                peer_media_elements[peer_id].remove();
            }
        }
        for (var peer_id in peers) {
            if (peers.hasOwnProperty((peer_id))) {
                peers[peer_id].close();
            }
        }
        peers = {};
        peer_media_elements = {};
        this.ngOnInit();
        this._chatService.disconnets();
        location.reload();
    };
    VideochatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videochat',
            template: __webpack_require__(/*! ./videochat.component.html */ "./src/app/videochat/videochat.component.html"),
            styles: [__webpack_require__(/*! ./videochat.component.css */ "./src/app/videochat/videochat.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], VideochatComponent);
    return VideochatComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shido/Desktop/GoLiveView/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map