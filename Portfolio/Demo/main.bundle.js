webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'my-app',
        template: "\n  <nav-bar></nav-bar>\n  <router-outlet></router-outlet>",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_index__ = __webpack_require__("./src/app/news/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_navbar_component__ = __webpack_require__("./src/app/nav/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_saved_read_later_list_component__ = __webpack_require__("./src/app/news/saved/read-later-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_create_create_news_component__ = __webpack_require__("./src/app/news/create/create-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_news_service__ = __webpack_require__("./src/app/shared/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["NewsListComponent"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["NewsNextWebComponent"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["NewsTechRadarComponent"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["NewsTechCrunchComponent"],
            __WEBPACK_IMPORTED_MODULE_6__nav_navbar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["TheNextWebDetailsComponent"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["TechRadarDetailsComponent"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["TechCrunchDetailsComponent"],
            __WEBPACK_IMPORTED_MODULE_7__news_saved_read_later_list_component__["a" /* ReadLaterListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["NewsCustomComponent"],
            __WEBPACK_IMPORTED_MODULE_8__news_create_create_news_component__["a" /* CreateNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["NewsCustomListComponent"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["CustomDetailsComponent"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__shared_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_news_storage_service__["a" /* NewsStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["TheNextWebResolver"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["TechRadarResolver"],
            __WEBPACK_IMPORTED_MODULE_5__news_index__["TechCrunchResolver"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/nav/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\">ngNews</a>\r\n    </div>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a [routerLink]=\"['/news']\" routerLinkActive=\"active\">News</a>\r\n        </li>\r\n        <li><a [routerLink]=\"['/create']\" routerLinkActive=\"active\">Create News</a></li>\r\n        <li><a [routerLink]=\"['/saved']\" routerLinkActive=\"active\">Saved News</a></li>\r\n        <li><a [routerLink]=\"['/custom']\" routerLinkActive=\"active\">Custom News</a></li>\r\n      </ul>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/nav/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'nav-bar',
        template: __webpack_require__("./src/app/nav/navbar.component.html"),
        styles: ["\n    .nav.navbar-nav {\n        font-size: 15px;\n        }   \n    li > a.active {\n        color: #F97924;\n    }\n    "]
    })
], NavBarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/news/article.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=article.model.js.map

/***/ }),

/***/ "./src/app/news/create/create-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>CREATE NEW ARTICLE</h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n      <form #createArticleForm=\"ngForm\" (ngSubmit)=\"add(createArticleForm.value)\" autocomplete=\"off\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Title:</label>\r\n          <input id=\"title\" (ngModel)=\"customArticle.title\" type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"Title..\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"article\">News content:</label>\r\n          <textarea id=\"article\" (ngModel)=\"article\" type=\"text\" class=\"form-control\" name=\"article\" placeholder=\"Text..\"></textarea>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Add</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/create/create-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateNewsComponent = (function () {
    function CreateNewsComponent(newsStorageService, router) {
        this.newsStorageService = newsStorageService;
        this.router = router;
        this.customArticle = {
            author: 'Administrator',
            title: '',
            url: '',
            text: '',
            source: 'custom',
            publishedAt: new Date()
        };
    }
    CreateNewsComponent.prototype.add = function (data) {
        var title = data.title.trim();
        var article = data.article.trim();
        if (title && article) {
            this.customArticle.title = title;
            this.customArticle.text = article;
            this.customArticle.publishedAt = new Date();
            this.customArticle.url = window.location.hostname + '/detailed/custom/' + title;
            this.newsStorageService.addCustomNews(this.customArticle);
            this.router.navigate(['/custom']);
        }
    };
    CreateNewsComponent.prototype.cancel = function () {
        this.router.navigate(['/news']);
    };
    return CreateNewsComponent;
}());
CreateNewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'create-news',
        template: __webpack_require__("./src/app/news/create/create-news.component.html"),
        styles: ["\n    textarea {\n        height: 450px;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CreateNewsComponent);

var _a, _b;
//# sourceMappingURL=create-news.component.js.map

/***/ }),

/***/ "./src/app/news/custom/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_custom_list_component__ = __webpack_require__("./src/app/news/custom/news-custom-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__news_custom_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_custom_component__ = __webpack_require__("./src/app/news/custom/news-custom.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__news_custom_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/news/custom/news-custom-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <h1>CUSTOM NEWS</h1>\r\n    </div>\r\n    <div class=\"col-sm-2 col-sm-offset-2\">\r\n      <button *ngIf=\"customArticles.length\" class=\"btn btn-primary clear-btn\" (click)=\"removeAll()\">Remove All</button>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let article of customArticles\">\r\n      <news-custom [news]=\"article\"></news-custom>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/custom/news-custom-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCustomListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsCustomListComponent = (function () {
    function NewsCustomListComponent(newsStorageService) {
        this.newsStorageService = newsStorageService;
    }
    NewsCustomListComponent.prototype.ngOnInit = function () {
        this.customArticles = this.newsStorageService.getCustomNews();
    };
    NewsCustomListComponent.prototype.removeAll = function () {
        var readLaterArticles = this.newsStorageService.getArticles();
        var readLaterArticlesEdited = readLaterArticles.filter(function (news) { return news.source !== 'custom'; });
        this.newsStorageService.saveListArticles(readLaterArticlesEdited);
        this.newsStorageService.clearCustomStorage();
    };
    return NewsCustomListComponent;
}());
NewsCustomListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/news/custom/news-custom-list.component.html"),
        styles: ["\n        .clear-btn {\n            margin-top: 30px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _a || Object])
], NewsCustomListComponent);

var _a;
//# sourceMappingURL=news-custom-list.component.js.map

/***/ }),

/***/ "./src/app/news/custom/news-custom-thumbnail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well div {\r\n    color: #bbb;\r\n    \r\n}\r\n.hoverwell {\r\n    cursor: auto ;\r\n}\r\n.story {\r\n    height: 160px;\r\n    overflow: hidden;\r\n}\r\n\r\n.custom-title {\r\n    height: 70px;\r\n    overflow: hidden;\r\n\r\n}\r\n.story-image {\r\n    display: block;\r\n    width: 100%;\r\n    height: 130px;\r\n    padding: 20px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n}\r\n\r\n.story-btn {\r\n    position: absolute;\r\n    top: 104px;\r\n}\r\n\r\nimg {\r\n    \r\n    width: 100%;\r\n    \r\n    \r\n}\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    \r\n}\r\na h4 {\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/news/custom/news-custom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model__ = __webpack_require__("./src/app/news/article.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__article_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCustomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsCustomComponent = (function () {
    function NewsCustomComponent(newsStorageService) {
        this.newsStorageService = newsStorageService;
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    NewsCustomComponent.prototype.ngOnInit = function () {
        this.savedArticles = this.newsStorageService.getArticles();
    };
    NewsCustomComponent.prototype.isInStorage = function (article) {
        return !!this.savedArticles.find(function (val) { return val.title === article.title; });
    };
    NewsCustomComponent.prototype.save = function (article) {
        this.newsStorageService.saveArticle(article);
        this.savedArticles = this.newsStorageService.getArticles();
    };
    NewsCustomComponent.prototype.removeOnClick = function (article) {
        this.remove(article);
        this.eventClick.emit();
    };
    NewsCustomComponent.prototype.remove = function (article) {
        this.newsStorageService.removeArticle(article);
    };
    return NewsCustomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"]) === "function" && _a || Object)
], NewsCustomComponent.prototype, "news", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Boolean)
], NewsCustomComponent.prototype, "isSaved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], NewsCustomComponent.prototype, "eventClick", void 0);
NewsCustomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'news-custom',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail story\" >        \n        <div class=\"custom-title\">\n        <a [routerLink]=\"['/detailed/custom', news.title]\"><h4>{{ news?.title }}</h4></a> \n        </div>       \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary story-btn\" (click)=\"save(news) \" \n        [disabled]=\"isInStorage(news)\">{{ isInStorage(news) ? 'Saved' : 'Read later' }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary story-btn\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styles: [__webpack_require__("./src/app/news/custom/news-custom-thumbnail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _b || Object])
], NewsCustomComponent);

var _a, _b;
//# sourceMappingURL=news-custom.component.js.map

/***/ }),

/***/ "./src/app/news/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__the_next_web_resolver_service__ = __webpack_require__("./src/app/news/the-next-web-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TheNextWebResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__the_next_web_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__techradar_resolver_service__ = __webpack_require__("./src/app/news/techradar-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TechRadarResolver", function() { return __WEBPACK_IMPORTED_MODULE_1__techradar_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__techcrunch_resolver_service__ = __webpack_require__("./src/app/news/techcrunch-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TechCrunchResolver", function() { return __WEBPACK_IMPORTED_MODULE_2__techcrunch_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_nextweb_component__ = __webpack_require__("./src/app/news/news-nextweb.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewsNextWebComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__news_nextweb_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_techradar_component__ = __webpack_require__("./src/app/news/news-techradar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewsTechRadarComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__news_techradar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_techcrunch_component__ = __webpack_require__("./src/app/news/news-techcrunch.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewsTechCrunchComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__news_techcrunch_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_list_component__ = __webpack_require__("./src/app/news/news-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__news_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__article_model__ = __webpack_require__("./src/app/news/article.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__article_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__article_model__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__article_model__, "TheNextWebDetailsComponent")) __webpack_require__.d(__webpack_exports__, "TheNextWebDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__article_model__["TheNextWebDetailsComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__article_model__, "TechRadarDetailsComponent")) __webpack_require__.d(__webpack_exports__, "TechRadarDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__article_model__["TechRadarDetailsComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__article_model__, "TechCrunchDetailsComponent")) __webpack_require__.d(__webpack_exports__, "TechCrunchDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__article_model__["TechCrunchDetailsComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__article_model__, "NewsCustomComponent")) __webpack_require__.d(__webpack_exports__, "NewsCustomComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__article_model__["NewsCustomComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__article_model__, "NewsCustomListComponent")) __webpack_require__.d(__webpack_exports__, "NewsCustomListComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__article_model__["NewsCustomListComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__article_model__, "CustomDetailsComponent")) __webpack_require__.d(__webpack_exports__, "CustomDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__article_model__["CustomDetailsComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_details_index__ = __webpack_require__("./src/app/news/news-details/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TheNextWebDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__news_details_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TechRadarDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__news_details_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "TechCrunchDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__news_details_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "CustomDetailsComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__news_details_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_index__ = __webpack_require__("./src/app/news/custom/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewsCustomComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "NewsCustomListComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__custom_index__["b"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/news/news-details/custom-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"article?.title\" class=\"well hoverwell thumbnail\">\r\n      <h1>{{ article?.title }}</h1>                \r\n        <div class=\"info\" *ngIf=\"article?.publishedAt || article?.author\">{{ article?.publishedAt  | date  }} by {{ article?.author }}</div>        \r\n        <p class=\"article-content\" *ngIf=\"article?.text\">{{ article?.text }}</p>\r\n        <button class=\"btn btn-primary\" (click)=\"delete()\">Delete</button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/news/news-details/custom-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomDetailsComponent = (function () {
    function CustomDetailsComponent(newsStorageService, route, router) {
        this.newsStorageService = newsStorageService;
        this.route = route;
        this.router = router;
    }
    CustomDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.params['title'];
        this.article = this.newsStorageService.getCustomNews().find(function (news) { return news.title === _this.title; });
    };
    CustomDetailsComponent.prototype.delete = function () {
        this.newsStorageService.removeCustomArticle(this.article);
        this.newsStorageService.removeArticle(this.article);
        this.router.navigate(['/custom']);
    };
    return CustomDetailsComponent;
}());
CustomDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/news/news-details/custom-details.component.html"),
        styles: [
            "\n         .article-content {\n            font-size: 1.25em;\n            line-height: 1.5em;\n            margin-top: 1em;\n        }\n        .info {\n            color: darkgray;\n        }\n        .thumbnail {\n            padding: 30px;\n            cursor: auto;\n        }\n        \n        "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CustomDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=custom-details.component.js.map

/***/ }),

/***/ "./src/app/news/news-details/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__the_next_web_details_component__ = __webpack_require__("./src/app/news/news-details/the-next-web-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__the_next_web_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__techradar_details_component__ = __webpack_require__("./src/app/news/news-details/techradar-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__techradar_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__techcrunch_details_component__ = __webpack_require__("./src/app/news/news-details/techcrunch-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__techcrunch_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_details_component__ = __webpack_require__("./src/app/news/news-details/custom-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__custom_details_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/news/news-details/techcrunch-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"article?.title\" class=\"well hoverwell thumbnail\">\r\n      <h1>{{ article?.title }}</h1>\r\n        <img *ngIf=\"article?.urlToImage\" [src]=\"article?.urlToImage\">\r\n                \r\n        <div class=\"info\" *ngIf=\"article?.publishedAt || article?.author\">{{ article?.publishedAt  | date  }} by {{ article?.author }}</div>\r\n        <br>\r\n        <p class=\"article-content\" *ngIf=\"article?.description\">{{ article?.description }} <span><a target=\"_blank\" [href]=\"article.url\">Read more</a></span></p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/news-details/techcrunch-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechCrunchDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechCrunchDetailsComponent = (function () {
    function TechCrunchDetailsComponent(route) {
        this.route = route;
    }
    TechCrunchDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.params['title'];
        this.article = this.route.snapshot.data['articles'].find(function (news) { return news.title === _this.title; });
    };
    return TechCrunchDetailsComponent;
}());
TechCrunchDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/news/news-details/techcrunch-details.component.html"),
        styles: [
            "\n        .article-content {\n            font-size: 1.25em;\n            line-height: 1.5em;\n            margin-top: 1em;\n        }\n        .info {\n            color: darkgray;\n        }\n        .thumbnail {\n            padding: 30px;\n            cursor: auto;\n        }\n        img {\n            padding-bottom: 20px;\n        }\n        a {\n            text-decoration: none;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], TechCrunchDetailsComponent);

var _a;
//# sourceMappingURL=techcrunch-details.component.js.map

/***/ }),

/***/ "./src/app/news/news-details/techradar-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"article?.title\" class=\"well hoverwell thumbnail\">\r\n      <h1>{{ article?.title }}</h1>\r\n        <img *ngIf=\"article?.urlToImage\" [src]=\"article?.urlToImage\">\r\n                \r\n        <div class=\"info\" *ngIf=\"article?.publishedAt || article?.author\">{{ article?.publishedAt  | date  }} by {{ article?.author }}</div>\r\n        <br>\r\n        <p class=\"article-content\" *ngIf=\"article?.description\">{{ article?.description }} <span><a target=\"_blank\" [href]=\"article.url\">Read more</a></span></p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/news-details/techradar-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechRadarDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechRadarDetailsComponent = (function () {
    function TechRadarDetailsComponent(route) {
        this.route = route;
    }
    TechRadarDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.params['title'];
        this.article = this.route.snapshot.data['articles'].find(function (news) { return news.title === _this.title; });
    };
    return TechRadarDetailsComponent;
}());
TechRadarDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/news/news-details/techradar-details.component.html"),
        styles: [
            "\n        .article-content {\n            font-size: 1.25em;\n            line-height: 1.5em;\n            margin-top: 1em;\n        }\n        .info {\n            color: darkgray;\n        }\n        .thumbnail {\n            padding: 30px;\n            cursor: auto;\n        }\n        img {\n            padding-bottom: 20px;\n        }\n        a {\n            text-decoration: none;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], TechRadarDetailsComponent);

var _a;
//# sourceMappingURL=techradar-details.component.js.map

/***/ }),

/***/ "./src/app/news/news-details/the-next-web-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"article?.title\" class=\"well hoverwell thumbnail\">\r\n      <h1>{{ article?.title }}</h1>\r\n        <img *ngIf=\"article?.urlToImage\" [src]=\"article?.urlToImage\">\r\n                \r\n        <div class=\"info\" *ngIf=\"article?.publishedAt || article?.author\">{{ article?.publishedAt  | date  }} by {{ article?.author }}</div>\r\n        <br>\r\n        <p class=\"article-content\" *ngIf=\"article?.description\">{{ article?.description }} <span><a [href]=\"article.url\" target=\"_blank\">Read more</a></span></p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/news-details/the-next-web-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheNextWebDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TheNextWebDetailsComponent = (function () {
    function TheNextWebDetailsComponent(route) {
        this.route = route;
    }
    TheNextWebDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.params['title'];
        this.article = this.route.snapshot.data['articles'].find(function (news) { return news.title === _this.title; });
    };
    return TheNextWebDetailsComponent;
}());
TheNextWebDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/news/news-details/the-next-web-details.component.html"),
        styles: [
            "\n        .article-content {\n            font-size: 1.25em;\n            line-height: 1.5em;\n            margin-top: 1em;\n        }\n        .info {\n            color: darkgray;\n        }\n        .thumbnail {\n            padding: 30px;\n            cursor: auto;\n        }\n        img {\n            padding-bottom: 20px;\n        }\n        a {\n            text-decoration: none;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], TheNextWebDetailsComponent);

var _a;
//# sourceMappingURL=the-next-web-details.component.js.map

/***/ }),

/***/ "./src/app/news/news-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/shared/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsListComponent = (function () {
    function NewsListComponent(newsStorageService, newsService, route) {
        this.newsStorageService = newsStorageService;
        this.newsService = newsService;
        this.route = route;
    }
    NewsListComponent.prototype.ngOnInit = function () {
        this.getSavedArticles();
        var tempArticles = this.route.snapshot.data['articles'];
        tempArticles = this.updateArticlesSource('the-next-web', tempArticles);
        this.filterArticles(tempArticles);
    };
    NewsListComponent.prototype.updateArticlesSource = function (source, articles) {
        if (source === 'the-next-web') {
            this.articleSource = 'The Next Web News';
        }
        else if (source === 'techradar') {
            this.articleSource = 'Tech Radar News';
        }
        else if (source === 'techcrunch') {
            this.articleSource = 'Tech Crunch News';
        }
        articles.forEach(function (val) { return val.source = source; });
        return articles;
    };
    NewsListComponent.prototype.getSavedArticles = function () {
        this.savedArticles = this.newsStorageService.getArticles();
    };
    NewsListComponent.prototype.filterArticles = function (temp) {
        var _this = this;
        var _loop_1 = function (i) {
            temp = temp.filter(function (news) { return news.title !== _this.savedArticles[i].title; });
        };
        for (var i = 0; i < this.savedArticles.length; i++) {
            _loop_1(i);
        }
        this.articles = temp;
    };
    NewsListComponent.prototype.getArticles = function (source) {
        var _this = this;
        this.getSavedArticles();
        this.newsService.getNews(source).then(function (news) {
            var tempArticles = _this.updateArticlesSource(source, news);
            _this.filterArticles(tempArticles);
        });
    };
    return NewsListComponent;
}());
NewsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: "\n    <div class=\"container\">\n    \n    <button class=\"btn btn-default\" [class.active]=\"articleSource === 'The Next Web News'\"  \n    (click)=\"getArticles('the-next-web')\">The Next Web</button>\n    <button class=\"btn btn-default\" [class.active]=\"articleSource === 'Tech Radar News'\" \n    (click)=\"getArticles('techradar')\" >Tech Radar</button>\n    <button class=\"btn btn-default\" [class.active]=\"articleSource === 'Tech Crunch News'\" \n    (click)=\"getArticles('techcrunch')\">Tech Crunch</button>    \n        \n        <h1>{{articleSource | uppercase}}</h1>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6\" *ngFor=\"let article of articles\">                \n                <news-nextweb *ngIf=\"article.source === 'the-next-web'\"  [news]=\"article\"></news-nextweb>\n                <news-techradar *ngIf=\"article.source === 'techradar'\"  [news]=\"article\" ></news-techradar>\n                <news-techcrunch *ngIf=\"article.source === 'techcrunch'\"  [news]=\"article\"></news-techcrunch>\n                \n            </div>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], NewsListComponent);

var _a, _b, _c;
//# sourceMappingURL=news-list.component.js.map

/***/ }),

/***/ "./src/app/news/news-nextweb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model__ = __webpack_require__("./src/app/news/article.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__article_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsNextWebComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsNextWebComponent = (function () {
    function NewsNextWebComponent(newsStorage) {
        this.newsStorage = newsStorage;
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.readLater = 'Read later';
    }
    NewsNextWebComponent.prototype.save = function (article) {
        this.readLater = 'Saved';
        this.newsStorage.saveArticle(article);
    };
    NewsNextWebComponent.prototype.removeOnClick = function (article) {
        this.remove(article);
        this.eventClick.emit();
    };
    NewsNextWebComponent.prototype.remove = function (article) {
        this.newsStorage.removeArticle(article);
    };
    return NewsNextWebComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"]) === "function" && _a || Object)
], NewsNextWebComponent.prototype, "news", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Boolean)
], NewsNextWebComponent.prototype, "isSaved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], NewsNextWebComponent.prototype, "eventClick", void 0);
NewsNextWebComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'news-nextweb',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail story\" >\n        \n        <a *ngIf=\"news?.urlToImage\" [routerLink]=\"['/detailed/the-next-web', news.title]\" \n        class=\"story-image\" [ngStyle]=\"{'background-image': 'url(' + news.urlToImage+')'}\"></a>\n        <a [routerLink]=\"['/detailed/the-next-web', news.title]\"><h4>{{ news?.title }}</h4></a>        \n                \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary story-btn\" (click)=\"save(news) \" \n        [disabled]=\"readLater === 'Saved'\">{{ readLater }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary story-btn\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styles: [__webpack_require__("./src/app/news/news-thumbnail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _b || Object])
], NewsNextWebComponent);

var _a, _b;
//# sourceMappingURL=news-nextweb.component.js.map

/***/ }),

/***/ "./src/app/news/news-techcrunch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model__ = __webpack_require__("./src/app/news/article.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__article_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsTechCrunchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsTechCrunchComponent = (function () {
    function NewsTechCrunchComponent(newsStorage) {
        this.newsStorage = newsStorage;
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.readLater = 'Read later';
    }
    NewsTechCrunchComponent.prototype.save = function (article) {
        this.readLater = 'Saved';
        this.newsStorage.saveArticle(article);
    };
    NewsTechCrunchComponent.prototype.removeOnClick = function (article) {
        this.remove(article);
        this.eventClick.emit();
    };
    NewsTechCrunchComponent.prototype.remove = function (article) {
        this.newsStorage.removeArticle(article);
    };
    return NewsTechCrunchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"]) === "function" && _a || Object)
], NewsTechCrunchComponent.prototype, "news", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Boolean)
], NewsTechCrunchComponent.prototype, "isSaved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], NewsTechCrunchComponent.prototype, "eventClick", void 0);
NewsTechCrunchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'news-techcrunch',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail story\" >\n                \n        <a *ngIf=\"news?.urlToImage\" [routerLink]=\"['/detailed/techcrunch', news.title]\" \n        class=\"story-image\" [ngStyle]=\"{'background-image': 'url(' + news.urlToImage+')'}\"></a>\n        <a [routerLink]=\"['/detailed/techcrunch', news.title]\"><h4>{{ news?.title }}</h4></a>\n        \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary story-btn\" (click)=\"save(news) \" \n        [disabled]=\"readLater === 'Saved'\">{{ readLater }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary story-btn\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styles: [__webpack_require__("./src/app/news/news-thumbnail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _b || Object])
], NewsTechCrunchComponent);

var _a, _b;
//# sourceMappingURL=news-techcrunch.component.js.map

/***/ }),

/***/ "./src/app/news/news-techradar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model__ = __webpack_require__("./src/app/news/article.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__article_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsTechRadarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsTechRadarComponent = (function () {
    function NewsTechRadarComponent(newsStorage) {
        this.newsStorage = newsStorage;
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.readLater = 'Read later';
    }
    NewsTechRadarComponent.prototype.save = function (article) {
        this.readLater = 'Saved';
        this.newsStorage.saveArticle(article);
    };
    NewsTechRadarComponent.prototype.removeOnClick = function (article) {
        this.remove(article);
        this.eventClick.emit();
    };
    NewsTechRadarComponent.prototype.remove = function (article) {
        this.newsStorage.removeArticle(article);
    };
    return NewsTechRadarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_model__["Article"]) === "function" && _a || Object)
], NewsTechRadarComponent.prototype, "news", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", Boolean)
], NewsTechRadarComponent.prototype, "isSaved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], NewsTechRadarComponent.prototype, "eventClick", void 0);
NewsTechRadarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'news-techradar',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail story\" >\n        \n        <a *ngIf=\"news?.urlToImage\" [routerLink]=\"['/detailed/techradar', news.title]\" \n        class=\"story-image\" [ngStyle]=\"{'background-image': 'url(' + news.urlToImage+')'}\"></a>\n        <a [routerLink]=\"['/detailed/techradar', news.title]\"><h4>{{ news?.title }}</h4></a>\n        \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary story-btn\" (click)=\"save(news)\" \n        [disabled]=\"readLater === 'Saved'\">{{ readLater }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary story-btn\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styles: [__webpack_require__("./src/app/news/news-thumbnail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _b || Object])
], NewsTechRadarComponent);

var _a, _b;
//# sourceMappingURL=news-techradar.component.js.map

/***/ }),

/***/ "./src/app/news/news-thumbnail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well div {\r\n    color: #bbb;\r\n    \r\n}\r\n.hoverwell {\r\n    cursor: auto ;\r\n}\r\n.story {\r\n    height: 278px;\r\n    overflow: hidden;\r\n}\r\n.story-image {\r\n    display: block;\r\n    width: 100%;\r\n    height: 130px;\r\n    padding: 20px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    \r\n}\r\n\r\n.story-btn {\r\n    position: absolute;\r\n    top: 222px;\r\n}\r\n\r\nimg {\r\n    \r\n    width: 100%;\r\n    \r\n    \r\n}\r\na {\r\n    text-decoration: none;\r\n    color: white;\r\n    \r\n}\r\na h4 {\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/news/saved/read-later-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-8\">\r\n      <h1>SAVED NEWS</h1>\r\n    </div>\r\n    <div class=\"col-sm-2 col-sm-offset-2\">\r\n      <button *ngIf=\"articles.length\" class=\"btn btn-primary clear-btn\" (click)=\"clear()\">Clear Storage</button>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let article of articles\">\r\n      <news-nextweb (eventClick)=\"updateSavedArticles()\" [isSaved]=\"true\" *ngIf=\"article.source === 'the-next-web'\" [news]=\"article\"></news-nextweb>\r\n      <news-techradar (eventClick)=\"updateSavedArticles()\" [isSaved]=\"true\" *ngIf=\"article.source === 'techradar'\" [news]=\"article\"></news-techradar>\r\n      <news-techcrunch (eventClick)=\"updateSavedArticles()\" [isSaved]=\"true\" *ngIf=\"article.source === 'techcrunch'\" [news]=\"article\"></news-techcrunch>\r\n      <news-custom (eventClick)=\"updateSavedArticles()\" [isSaved]=\"true\" *ngIf=\"article.source === 'custom'\" [news]=\"article\"></news-custom>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/saved/read-later-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__ = __webpack_require__("./src/app/shared/news-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadLaterListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadLaterListComponent = (function () {
    function ReadLaterListComponent(newsStorageService) {
        this.newsStorageService = newsStorageService;
    }
    ReadLaterListComponent.prototype.ngOnInit = function () {
        this.updateSavedArticles();
    };
    ReadLaterListComponent.prototype.updateSavedArticles = function () {
        this.articles = this.newsStorageService.getArticles();
    };
    ReadLaterListComponent.prototype.clear = function () {
        this.articles = this.newsStorageService.clearStorage();
    };
    return ReadLaterListComponent;
}());
ReadLaterListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__("./src/app/news/saved/read-later-list.component.html"),
        styles: ["\n        .clear-btn {\n            margin-top: 30px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_storage_service__["a" /* NewsStorageService */]) === "function" && _a || Object])
], ReadLaterListComponent);

var _a;
//# sourceMappingURL=read-later-list.component.js.map

/***/ }),

/***/ "./src/app/news/techcrunch-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/shared/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechCrunchResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechCrunchResolver = (function () {
    function TechCrunchResolver(newsService) {
        this.newsService = newsService;
    }
    TechCrunchResolver.prototype.resolve = function () {
        return this.newsService.getNews('techcrunch').then(function (news) { return news; });
    };
    return TechCrunchResolver;
}());
TechCrunchResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */]) === "function" && _a || Object])
], TechCrunchResolver);

var _a;
//# sourceMappingURL=techcrunch-resolver.service.js.map

/***/ }),

/***/ "./src/app/news/techradar-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/shared/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechRadarResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechRadarResolver = (function () {
    function TechRadarResolver(newsService) {
        this.newsService = newsService;
    }
    TechRadarResolver.prototype.resolve = function () {
        return this.newsService.getNews('techradar').then(function (news) { return news; });
    };
    return TechRadarResolver;
}());
TechRadarResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */]) === "function" && _a || Object])
], TechRadarResolver);

var _a;
//# sourceMappingURL=techradar-resolver.service.js.map

/***/ }),

/***/ "./src/app/news/the-next-web-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_news_service__ = __webpack_require__("./src/app/shared/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheNextWebResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TheNextWebResolver = (function () {
    function TheNextWebResolver(newsService) {
        this.newsService = newsService;
    }
    TheNextWebResolver.prototype.resolve = function () {
        return this.newsService.getNews('the-next-web').then(function (news) { return news; });
    };
    return TheNextWebResolver;
}());
TheNextWebResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_news_service__["a" /* NewsService */]) === "function" && _a || Object])
], TheNextWebResolver);

var _a;
//# sourceMappingURL=the-next-web-resolver.service.js.map

/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_index__ = __webpack_require__("./src/app/news/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_saved_read_later_list_component__ = __webpack_require__("./src/app/news/saved/read-later-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_create_create_news_component__ = __webpack_require__("./src/app/news/create/create-news.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });



var appRoutes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["NewsListComponent"], resolve: { articles: __WEBPACK_IMPORTED_MODULE_0__news_index__["TheNextWebResolver"] } },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["NewsCustomListComponent"] },
    { path: 'saved', component: __WEBPACK_IMPORTED_MODULE_1__news_saved_read_later_list_component__["a" /* ReadLaterListComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_2__news_create_create_news_component__["a" /* CreateNewsComponent */] },
    { path: 'custom', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["NewsCustomListComponent"] },
    { path: 'detailed/techradar/:title', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["TechRadarDetailsComponent"], resolve: { articles: __WEBPACK_IMPORTED_MODULE_0__news_index__["TechRadarResolver"] } },
    { path: 'detailed/techcrunch/:title', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["TechCrunchDetailsComponent"], resolve: { articles: __WEBPACK_IMPORTED_MODULE_0__news_index__["TechCrunchResolver"] } },
    { path: 'detailed/the-next-web/:title', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["TheNextWebDetailsComponent"], resolve: { articles: __WEBPACK_IMPORTED_MODULE_0__news_index__["TheNextWebResolver"] } },
    { path: 'detailed/custom/:title', component: __WEBPACK_IMPORTED_MODULE_0__news_index__["CustomDetailsComponent"] }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "./src/app/shared/news-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsStorageService = (function () {
    function NewsStorageService() {
        this.savedArticles = [];
        this.customNews = [];
    }
    NewsStorageService.prototype.saveArticle = function (article) {
        this.savedArticles.push(article);
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
    };
    NewsStorageService.prototype.saveListArticles = function (articles) {
        this.savedArticles = articles;
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
    };
    NewsStorageService.prototype.getArticles = function () {
        return this.savedArticles = JSON.parse(localStorage.getItem('Read later')) || [];
    };
    NewsStorageService.prototype.removeArticle = function (article) {
        this.getArticles();
        this.savedArticles = this.savedArticles.filter(function (news) { return news.title !== article.title; });
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
    };
    NewsStorageService.prototype.clearStorage = function () {
        this.savedArticles.length = 0;
        localStorage.removeItem('Read later');
        return this.savedArticles;
    };
    NewsStorageService.prototype.addCustomNews = function (article) {
        this.customNews.push(article);
        this.updateCustomStorage();
    };
    NewsStorageService.prototype.getCustomNews = function () {
        return this.customNews = JSON.parse(localStorage.getItem('Custom News')) || [];
    };
    NewsStorageService.prototype.removeCustomArticle = function (article) {
        this.getCustomNews();
        this.customNews = this.customNews.filter(function (news) { return news.title !== article.title; });
        this.updateCustomStorage();
    };
    NewsStorageService.prototype.updateCustomStorage = function () {
        localStorage.setItem('Custom News', JSON.stringify(this.customNews));
    };
    NewsStorageService.prototype.clearCustomStorage = function () {
        this.customNews.length = 0;
        localStorage.removeItem('Custom News');
        return this.customNews;
    };
    return NewsStorageService;
}());
NewsStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], NewsStorageService);

//# sourceMappingURL=news-storage.service.js.map

/***/ }),

/***/ "./src/app/shared/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsService = (function () {
    function NewsService() {
    }
    NewsService.prototype.get = function (url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.response);
                }
                else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(Error('Network Error'));
            };
            req.send();
        });
    };
    NewsService.prototype.getJSON = function (url) {
        return this.get(url).then(JSON.parse).catch(function (error) {
            console.log('getJSON failed for', url, error);
            throw error;
        });
    };
    NewsService.prototype.getNews = function (source) {
        var url = 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=latest&apiKey=ea4831f1563048af8bfa3fd779ea332f';
        return this.getJSON(url).then(function (news) { return news.articles; });
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], NewsService);

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./src/app/app.module.ts");


// enableProdMode();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map