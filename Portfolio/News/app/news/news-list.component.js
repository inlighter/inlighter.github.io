"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("../shared/news.service");
var news_storage_service_1 = require("../shared/news-storage.service");
var router_1 = require("@angular/router");
var NewsListComponent = (function () {
    function NewsListComponent(newsStorageService, newsService, route) {
        this.newsStorageService = newsStorageService;
        this.newsService = newsService;
        this.route = route;
        this.articleSource = 'The Next Web';
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
    core_1.Component({
        template: "\n    <div class=\"container\">\n    \n    <button class=\"btn btn-default\" [class.active]=\"articleSource === 'The Next Web News'\"  \n    (click)=\"getArticles('the-next-web')\">The Next Web</button>\n    <button class=\"btn btn-default\" [class.active]=\"articleSource === 'Tech Radar News'\" \n    (click)=\"getArticles('techradar')\" >Tech Radar</button>\n    <button class=\"btn btn-default\" [class.active]=\"articleSource === 'Tech Crunch News'\" \n    (click)=\"getArticles('techcrunch')\">Tech Crunch</button>    \n        \n        <h1>{{articleSource | uppercase}}</h1>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6\" *ngFor=\"let article of articles\">                \n                <news-nextweb *ngIf=\"article.source === 'the-next-web'\"  [news]=\"article\"></news-nextweb>\n                <news-techradar *ngIf=\"article.source === 'techradar'\"  [news]=\"article\" ></news-techradar>\n                <news-techcrunch *ngIf=\"article.source === 'techcrunch'\"  [news]=\"article\"></news-techcrunch>\n                \n            </div>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService, news_service_1.NewsService, router_1.ActivatedRoute])
], NewsListComponent);
exports.NewsListComponent = NewsListComponent;
//# sourceMappingURL=news-list.component.js.map