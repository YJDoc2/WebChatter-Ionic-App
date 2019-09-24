webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialEntryTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InitialEntryTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InitialEntryTabsPage = /** @class */ (function () {
    function InitialEntryTabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.loginRoot = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.signupRoot = __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */];
        this.infoRoot = __WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */];
    }
    InitialEntryTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-initial-entry-tabs',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/initial-entry-tabs/initial-entry-tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="loginRoot" tabTitle="Login" tabIcon="log-in"></ion-tab>\n  <ion-tab [root]="signupRoot" tabTitle="Signup" tabIcon="person-add"></ion-tab>\n  <ion-tab\n    [root]="infoRoot"\n    tabTitle="Info"\n    tabIcon="information-circle"\n  ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/initial-entry-tabs/initial-entry-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], InitialEntryTabsPage);
    return InitialEntryTabsPage;
}());

//# sourceMappingURL=initial-entry-tabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChatSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewChatSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewChatSearchPage = /** @class */ (function () {
    //check: Post[];
    function NewChatSearchPage(navCtrl, navParams, api, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.app = app;
    }
    NewChatSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewChatSearchPage');
    };
    NewChatSearchPage.prototype.search = function () {
        var _this = this;
        if (this.searchid != '') {
            this.api.searchUsers(this.searchid).subscribe(function (data) {
                _this.searchRes = data;
            });
        }
        else if (this.searchid === '') {
            this.searchRes = [];
        }
    };
    NewChatSearchPage.prototype.openChat = function (name, uuid) {
        this.searchRes = [];
        this.searchid = '';
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], { chatName: name, uuid: uuid });
    };
    NewChatSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-chat-search',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/new-chat-search/new-chat-search.html"*/'<!--\n  Generated template for the NewChatSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="search" align-start></ion-icon> Find Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item-divider sticky="true" class="inputDivider">\n    <ion-input\n      (keyup)="search()"\n      [(ngModel)]="searchid"\n      name="searchid"\n      placeholder="Enter User Name"\n      class="iin"\n    >\n    </ion-input>\n  </ion-item-divider>\n  <!--Add New Chat Page Chat Page-->\n\n  <ion-list *ngFor="let user of searchRes" style="margin-top: 1rem;">\n    <ion-item\n      (click)="openChat(user.userName, user.uuid)"\n      class="searchListItem"\n    >\n      <ion-avatar item-start>\n        <ion-icon name="person" class="pesronIcon"></ion-icon>\n      </ion-avatar>\n      <h2>{{ user.userName }}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/new-chat-search/new-chat-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__["a" /* BackendApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], NewChatSearchPage);
    return NewChatSearchPage;
}());

//# sourceMappingURL=new-chat-search.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		288,
		2
	],
	"../pages/initial-entry-tabs/initial-entry-tabs.module": [
		289,
		1
	],
	"../pages/new-chat-search/new-chat-search.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, api, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.events = events;
        this.isConnected = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.username || !this.password) {
            this.err = 'Please Fill All Fields';
            setTimeout(function () {
                _this.err = '';
            }, 1500);
            return;
        }
        this.api.login(this.username, this.password).subscribe(function (data) {
            if (data.success === true) {
                _this.events.publish('Login:success');
            }
            else if (data.err) {
                _this.err = data.err;
                setTimeout(function () {
                    _this.err = '';
                }, 1500);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-avatar item-start>\n    <ion-icon name="person" class="loginIcon"></ion-icon>\n  </ion-avatar>\n  <ion-list class="alignC">\n    <ion-item class="alignC">\n      <ion-label class="label">Username</ion-label>\n      <ion-input\n        placeholder="Enter Username"\n        [(ngModel)]="username"\n        name="username"\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item class="alignC">\n      <ion-label class="label">Password</ion-label>\n      <ion-input\n        placeholder="Enter Password"\n        type="Password"\n        [(ngModel)]="password"\n        name="password"\n      >\n      </ion-input>\n    </ion-item>\n  </ion-list>\n  <button\n    (click)="login()"\n    ion-button\n    round\n    outline\n    color="light"\n    class="loginButton"\n  >\n    Login\n  </button>\n\n  <div *ngIf="err" class="loginError">\n    {{ err }}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__["a" /* BackendApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__["a" /* BackendApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, api, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.events = events;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (!this.name ||
            !this.email ||
            !this.username ||
            !this.password ||
            !this.password2) {
            this.err = 'Please Fill All Fields';
            setTimeout(function () {
                _this.err = '';
            }, 1500);
            return;
        }
        else if (this.password != this.password2) {
            this.err = 'Password Do Not Match';
            setTimeout(function () {
                _this.err = '';
            }, 1500);
            return;
        }
        else {
            this.api
                .signup(this.name, this.email, this.username, this.password, this.password2)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.err = data.err;
                    setTimeout(function () {
                        _this.err = '';
                    }, 1500);
                }
                else {
                    _this.api.login(_this.username, _this.password).subscribe(function (data) {
                        if (data.success === true) {
                            _this.events.publish('Login:success');
                        }
                        else if (data.err) {
                            _this.err = data.err;
                            setTimeout(function () {
                                _this.err = '';
                            }, 1500);
                        }
                    });
                }
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-avatar item-start>\n    <ion-icon name="person" class="loginIcon"></ion-icon>\n  </ion-avatar>\n  <ion-list class="alignC">\n    <ion-item class="alignC">\n      <ion-label class="label">Name</ion-label>\n      <ion-input placeholder="Enter Name" [(ngModel)]="name" name="name">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="alignC">\n      <ion-label class="label">Email</ion-label>\n      <ion-input placeholder="Enter Email" [(ngModel)]="email" name="email">\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="alignC">\n      <ion-label class="label">Username</ion-label>\n      <ion-input\n        placeholder="Enter Username"\n        [(ngModel)]="username"\n        name="username"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item class="alignC">\n      <ion-label class="label">Password</ion-label>\n      <ion-input\n        placeholder="Enter Password"\n        type="Password"\n        [(ngModel)]="password"\n        name="password"\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item class="alignC">\n      <ion-label class="label">Verify Password</ion-label>\n      <ion-input\n        placeholder="Enter Password"\n        type="Password"\n        [(ngModel)]="password2"\n        name="password2"\n      >\n      </ion-input>\n    </ion-item>\n  </ion-list>\n  <button\n    (click)="signup()"\n    ion-button\n    round\n    outline\n    color="light"\n    class="signupButton"\n  >\n    SignUp\n  </button>\n\n  <div *ngIf="err" class="loginError">\n    {{ err }}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__["a" /* BackendApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_chat_search_new_chat_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__new_chat_search_new_chat_search__["a" /* NewChatSearchPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="1">\n  <ion-tab [root]="tab1Root" tabTitle="New Chat" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab\n    [root]="tab3Root"\n    tabTitle="Info"\n    tabIcon="information-circle"\n  ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, api, app, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.api = api;
        this.app = app;
        this.events = events;
        this.events.subscribe('Chat:added', function (chat) {
            _this.chats.push(chat);
        });
        api.getAllChats().subscribe(function (data) {
            _this.chats = data.chats;
            _this.user = data.user;
        });
        setInterval(function () {
            api.getAllChats().subscribe(function (data) {
                _this.chats = data.chats;
                _this.user = data.user;
            });
        }, 500);
    }
    HomePage.prototype.openChat = function (uuid) {
        var _this = this;
        this.api.getChat(uuid).subscribe(function (data) {
            _this.app
                .getRootNav()
                .push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], { chat: data.chat, chatName: data.chatName });
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.api.logout().subscribe(function (data) {
            if (data.success) {
                _this.events.publish('Logout:success');
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-8>\n        <ion-title>Home</ion-title>\n      </ion-col>\n      <ion-col col-2>\n        <button\n          right\n          ion-button\n          round\n          outline\n          item-end\n          (click)="logout()"\n          color="light"\n          class="loginBtn"\n        >\n          Log Out\n          <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let chat of chats">\n    <ion-item (click)="openChat(chat.uuid)">\n      <ion-avatar item-start>\n        <ion-icon name="person" class="pesronIcon"></ion-icon>\n      </ion-avatar>\n      <h2 style="display: inline;">\n        {{\n          chat.usersUName[0] == user ? chat.usersUName[1] : chat.usersUName[0]\n        }}\n      </h2>\n\n      <ion-badge\n        color="primary"\n        *ngIf="chat.lastSender != user && chat.unreadMsg != 0"\n        >{{ chat.unreadMsg }}</ion-badge\n      >\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__["a" /* BackendApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_info_info__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_new_chat_search_new_chat_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_initial_entry_tabs_initial_entry_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_backend_api_backend_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_new_chat_search_new_chat_search__["a" /* NewChatSearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_initial_entry_tabs_initial_entry_tabs__["a" /* InitialEntryTabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial-entry-tabs/initial-entry-tabs.module#InitialEntryTabsPageModule', name: 'InitialEntryTabsPage', segment: 'initial-entry-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-chat-search/new-chat-search.module#NewChatSearchPageModule', name: 'NewChatSearchPage', segment: 'new-chat-search', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_new_chat_search_new_chat_search__["a" /* NewChatSearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_initial_entry_tabs_initial_entry_tabs__["a" /* InitialEntryTabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_backend_api_backend_api__["a" /* BackendApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_initial_entry_tabs_initial_entry_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.events = events;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.isLoggedIn()) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_initial_entry_tabs_initial_entry_tabs__["a" /* InitialEntryTabsPage */];
            }
            events.subscribe('Login:success', function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            });
            events.subscribe('Logout:success', function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_initial_entry_tabs_initial_entry_tabs__["a" /* InitialEntryTabsPage */];
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.isLoggedIn = function () {
        return false;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BackendApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackendApiProvider = /** @class */ (function () {
    function BackendApiProvider(http) {
        this.http = http;
        console.log('Hello BackendApiProvider Provider');
    }
    BackendApiProvider.prototype.login = function (username, password) {
        return this.http.post('https://web-chatter-app-api.herokuapp.com/users/login', {
            username: username,
            password: password
        }, {
            withCredentials: true
        });
    };
    BackendApiProvider.prototype.signup = function (name, email, username, password, password2) {
        return this.http.post('https://web-chatter-app-api.herokuapp.com/users/register', {
            name: name,
            email: email,
            username: username,
            password: password,
            password2: password2
        }, {
            withCredentials: true
        });
    };
    BackendApiProvider.prototype.logout = function () {
        return this.http.get('https://web-chatter-app-api.herokuapp.com/users/logout', {
            withCredentials: true
        });
    };
    BackendApiProvider.prototype.searchUsers = function (regex) {
        return this.http.get('https://web-chatter-app-api.herokuapp.com/api/search/' + regex, {
            withCredentials: true
        });
    };
    BackendApiProvider.prototype.getAllChats = function () {
        return this.http.get('https://web-chatter-app-api.herokuapp.com/api/refreshHomeChats', { withCredentials: true });
    };
    BackendApiProvider.prototype.getChat = function (uuid) {
        return this.http.get('https://web-chatter-app-api.herokuapp.com/api/getChat/' + uuid, { withCredentials: true });
    };
    BackendApiProvider.prototype.sendMsg = function (uuid, msg) {
        return this.http.post('https://web-chatter-app-api.herokuapp.com/api/chatAddMsg', {
            id: uuid,
            msg: msg
        }, {
            withCredentials: true
        });
    };
    BackendApiProvider.prototype.newChat = function (otherUser, uuid, msg) {
        return this.http.post('https://web-chatter-app-api.herokuapp.com/api/newChat', {
            otherUuid: uuid,
            otherUserName: otherUser,
            msg: msg
        }, { withCredentials: true });
    };
    BackendApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], BackendApiProvider);
    return BackendApiProvider;
    var _a;
}());

//# sourceMappingURL=backend-api.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, api, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.events = events;
        this.isNewChat = false;
        if (navParams.data.chat != null) {
            this.chat = navParams.data.chat;
        }
        else {
            this.isNewChat = true;
        }
        this.chatName = navParams.data.chatName;
        if (!this.isNewChat) {
            setInterval(function () {
                _this.api.getChat(_this.chat.uuid).subscribe(function (data) {
                    _this.chat = data.chat;
                    try {
                        setTimeout(function () {
                            if (_this.content._scroll)
                                _this.content.scrollToBottom(300);
                        }, 10);
                    }
                    catch (err) { }
                });
            }, 500);
        }
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChatPage');
        if (!this.isNewChat) {
            try {
                setTimeout(function () {
                    if (_this.content._scroll)
                        _this.content.scrollToBottom(300);
                }, 100);
            }
            catch (err) { }
        }
    };
    ChatPage.prototype.sendMsg = function () {
        var _this = this;
        if (this.msg != '') {
            if (this.chat == null) {
                var otherUser = this.navParams.data.chatName;
                var uuid = this.navParams.data.uuid;
                this.api.newChat(otherUser, uuid, this.msg).subscribe(function (data) {
                    if (data.success) {
                        _this.chat = data.chat;
                        _this.isNewChat = false;
                        _this.msg = '';
                        _this.events.publish('Chat:added', _this.chat);
                        setInterval(function () {
                            _this.api.getChat(_this.chat.uuid).subscribe(function (data) {
                                _this.chat = data.chat;
                                try {
                                    setTimeout(function () {
                                        if (_this.content._scroll)
                                            _this.content.scrollToBottom(300);
                                    }, 10);
                                }
                                catch (err) { }
                            });
                        }, 500);
                    }
                });
            }
            else {
                this.api.sendMsg(this.chat.uuid, this.msg).subscribe(function (data) {
                    if (data.success == true) {
                        _this.msg = '';
                    }
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chatScroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ chatName }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #chatScroll padding>\n  <div *ngIf="!isNewChat" id="chatScroll">\n    <div *ngFor="let msg of chat.msgs" class="textBox">\n      <span *ngIf="msg.sender == chatName" class="speech-bubble-other">{{\n        msg.text\n      }}</span>\n      <span *ngIf="!(msg.sender == chatName)" class="speech-bubble-self">{{\n        msg.text\n      }}</span>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-item-divider item-start sticky="true" class="msgInput">\n    <ion-input [(ngModel)]="msg" name="msg" placeholder="Enter message...">\n    </ion-input>\n    <button\n      ion-button\n      round\n      outline\n      item-end\n      (click)="sendMsg()"\n      color="light"\n      class="sendBtn"\n    >\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </ion-item-divider>\n</ion-footer>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_backend_api_backend_api__["a" /* BackendApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/home/yashodhan/WebDev/WebChatterApp/src/pages/info/info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Info\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style="margin:2rem 2rem">\n    <ion-item>\n      Made with @ionicframework\n      <ion-icon name="ionic"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="person"></ion-icon>\n      Author : YJ\n    </ion-item>\n    <ion-item>\n      <ion-icon name="cog"></ion-icon>\n      Version : 1.0.0\n    </ion-item>\n    <ion-item>\n      Thank You For Using !!!\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/yashodhan/WebDev/WebChatterApp/src/pages/info/info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map