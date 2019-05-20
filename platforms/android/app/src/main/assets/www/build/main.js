webpackJsonp([0],{

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser_ngx__ = __webpack_require__(255);
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
    function HomePage(navCtrl, http, inAppBrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.inAppBrowser = inAppBrowser;
        this.gifs = [];
        this.settings = ['hot', 'new', 'controversial', 'top', 'rising'];
        this.subredditControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormControl */]();
        this.http
            .get('https://www.reddit.com/r/motorcycles/hot/.json?limit=100')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.posts = data.data.children;
            for (var i = 0; i <= _this.posts.length - 1; i++) {
                console.log('url: ', data.data.children[i].data.url);
                var obj = data.data.children[i].data;
                _this.foo = obj['post_hint'];
                var fooVid = obj['url'];
                if (obj['post_hint'] == 'image') {
                    console.log('valid post: ' + JSON.stringify(obj));
                    _this.gifs.push(obj);
                }
                console.log('this.gifs: ' + _this.gifs);
            }
        }, function (err) {
            console.log('Oops!');
        });
    }
    HomePage.prototype.showComments = function (post) {
        // let browser: InAppBrowser = new InAppBrowser('http://reddit.com' + post.data.permalink, '_system');
        var browser = this.inAppBrowser.create('http://reddit.com' + post.data.permalink, '_system');
    };
    HomePage.prototype.openSettings = function () {
        var settingsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], {
            perPage: this.redditService.perPage,
            sort: this.redditService.sort,
            subreddit: this.redditService.subreddit
        });
        settingsModal.onDidDismiss(function (settings) {
            if (settings) {
                // this.redditService.perPage = settings.perPage;
                // this.redditService.sort = settings.sort;
                // this.redditService.subreddit = settings.subreddit;
                // this.dataService.save(settings);
                // this.changeSubreddit();
            }
        });
        settingsModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/devinvail/Documents/Learning/Ionic/reddit clone/reddit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n\n    <ion-title>\n      <ion-searchbar color="primary" placeholder="enter subreddit name..." [(ngModel)]="subredditValue"\n        [formControl]="subredditControl" value=""></ion-searchbar>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSettings()">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor="let post of posts">\n    <ion-item>\n      <img [src]="post.data.url" />\n      <!-- <div>{{post.url}}</div> -->\n    </ion-item>\n    <ion-list-header (click)="showComments(post)" style="text-align: left;">\n      {{post[\'data\'][\'title\']}}\n    </ion-list-header>\n  </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/devinvail/Documents/Learning/Ionic/reddit clone/reddit/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(view, navParams) {
        this.view = view;
        this.navParams = navParams;
        this.perPage = this.navParams.get('perPage');
        this.sort = this.navParams.get('sort');
        this.subreddit = this.navParams.get('subreddit');
    }
    SettingsPage.prototype.save = function () {
        var settings = {
            perPage: this.perPage,
            sort: this.sort,
            subreddit: this.subreddit
        };
        this.view.dismiss(settings);
    };
    SettingsPage.prototype.close = function () {
        this.view.dismiss();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/devinvail/Documents/Learning/Ionic/reddit clone/reddit/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>Settings</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-card>\n	  <ion-card-header>\n	    About\n	  </ion-card-header>\n	  <ion-card-content>\n	    <p><strong>Giflist</strong> is a client for <strong>reddit</strong> that will endlessly <strong>stream GIFs</strong> from <strong>any subreddit that predominantly contains gifs</strong>. By default it uses the popular <strong>gifs</strong> subreddit, but you can change this to whatever you like, e.g: perfectloops, me_irl, chemicalreactiongifs.</p>\n	    <br />\n	    <p>To play a GIF, just tap it. To view the original submission for any GIF, just tap the title section and it will open in reddit. You can configure some settings for the application below. Enjoy!</p>\n	  </ion-card-content>\n	</ion-card>\n\n	<h3>Subreddit</h3>\n\n	<ion-input type="text" placeholder="enter subreddit name..." [(ngModel)]="subreddit"></ion-input>\n\n	<h3>Sort</h3>\n\n	<ion-segment color="secondary" [(ngModel)]="sort">\n		<ion-segment-button value="hot">\n		  Hot\n		</ion-segment-button>\n		<ion-segment-button value="top">\n		  Top\n		</ion-segment-button>\n		<ion-segment-button value="new">\n		  New\n		</ion-segment-button>\n	</ion-segment>\n\n	<h3>Per Page</h3>\n\n	<ion-segment color="secondary" [(ngModel)]="perPage">\n		<ion-segment-button value="5">\n		  5\n		</ion-segment-button>\n		<ion-segment-button value="10">\n		  10\n		</ion-segment-button>\n		<ion-segment-button value="15">\n		  15\n		</ion-segment-button>\n	</ion-segment>\n\n	<button ion-button full (click)="save()" color="secondary" style="margin: 20px 0px;">Save Settings</button> \n  \n</ion-content>'/*ion-inline-end:"/Users/devinvail/Documents/Learning/Ionic/reddit clone/reddit/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_reddit__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser_ngx__ = __webpack_require__(255);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]],
            providers: [
                Storage,
                __WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* Data */],
                __WEBPACK_IMPORTED_MODULE_9__providers_reddit__["a" /* Reddit */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(250);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/devinvail/Documents/Learning/Ionic/reddit clone/reddit/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/devinvail/Documents/Learning/Ionic/reddit clone/reddit/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(676);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = /** @class */ (function () {
    function Data(storage) {
        this.storage = storage;
    }
    Data.prototype.getData = function () {
        return this.storage.get('settings');
    };
    Data.prototype.save = function (data) {
        var newData = JSON.stringify(data);
        this.storage.set('settings', newData);
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reddit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Reddit = /** @class */ (function () {
    function Reddit(http) {
        this.http = http;
        this.loading = false;
        this.posts = [];
        this.subreddit = 'gifs';
        this.page = 1;
        this.perPage = 15;
        this.sort = 'hot';
        this.moreCount = 0;
    }
    Reddit.prototype.fetchData = function () {
        var _this = this;
        //Build the URL that will be used to access the API based on the users current preferences
        var url = 'https://www.reddit.com/r/' + this.subreddit + '/' + this.sort + '/.json?limit=' + this.perPage;
        //If we aren't on the first page, we need to add the after parameter so that we only get new results
        //this parameter basically says "give me the posts that come AFTER this post"
        if (this.after) {
            url += '&after=' + this.after;
        }
        //We are now currently fetching data, so set the loading variable to true
        this.loading = true;
        //Make a Http request to the URL and subscribe to the response
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            var stopIndex = _this.posts.length;
            _this.posts = _this.posts.concat(data.data.children);
            //Loop through all NEW posts that have been added. We are looping through
            //in reverse since we are removing some items.
            for (var i = _this.posts.length - 1; i >= stopIndex; i--) {
                var post = _this.posts[i];
                //Add a new property that will later be used to toggle a loading animation
                //for individual posts
                post.showLoader = false;
                post.alreadyLoaded = false;
                //Add a NSFW thumbnail to NSFW posts
                if (post.data.thumbnail == 'nsfw') {
                    _this.posts[i].data.thumbnail = 'images/nsfw.png';
                }
                /*
                * Remove all posts that are not in the .gifv or .webm format and convert the ones that
                * are to .mp4 files.
                */
                if (post.data.url.indexOf('.gifv') > -1 || post.data.url.indexOf('.webm') > -1) {
                    _this.posts[i].data.url = post.data.url.replace('.gifv', '.mp4');
                    _this.posts[i].data.url = post.data.url.replace('.webm', '.mp4');
                    //If a preview image is available, assign it to the post as 'snapshot'
                    if (typeof (post.data.preview) != "undefined") {
                        _this.posts[i].data.snapshot = post.data.preview.images[0].source.url.replace(/&amp;/g, '&');
                        //If the snapshot is undefined, change it to be blank so it doesnt use a broken image
                        if (_this.posts[i].data.snapshot == "undefined") {
                            _this.posts[i].data.snapshot = "";
                        }
                    }
                    else {
                        _this.posts[i].data.snapshot = "";
                    }
                }
                else {
                    _this.posts.splice(i, 1);
                }
            }
            //Keep fetching more GIFs if we didn't retrieve enough to fill a page
            //But give up after 20 tries if we still don't have enough
            if (data.data.children.length === 0 || _this.moreCount > 20) {
                _this.moreCount = 0;
                _this.loading = false;
            }
            else {
                _this.after = data.data.children[data.data.children.length - 1].data.name;
                if (_this.posts.length < _this.perPage * _this.page) {
                    _this.fetchData();
                    _this.moreCount++;
                }
                else {
                    _this.loading = false;
                    _this.moreCount = 0;
                }
            }
        }, function (err) {
            //Fail silently, in this case the loading spinner will just continue to display
            console.log("subreddit doesn't exist!");
        });
    };
    Reddit.prototype.nextPage = function () {
        this.page++;
        this.fetchData();
    };
    Reddit.prototype.resetPosts = function () {
        this.page = 1;
        this.posts = [];
        this.after = null;
        this.fetchData();
    };
    Reddit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Reddit);
    return Reddit;
}());

//# sourceMappingURL=reddit.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map