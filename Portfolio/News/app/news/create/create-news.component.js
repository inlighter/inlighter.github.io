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
var news_storage_service_1 = require("../../shared/news-storage.service");
var router_1 = require("@angular/router");
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
    core_1.Component({
        selector: 'create-news',
        templateUrl: 'app/news/create/create-news.component.html',
        styles: ["\n    textarea {\n        height: 450px;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService, router_1.Router])
], CreateNewsComponent);
exports.CreateNewsComponent = CreateNewsComponent;
//# sourceMappingURL=create-news.component.js.map