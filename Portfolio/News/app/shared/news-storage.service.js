"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
    core_1.Injectable()
], NewsStorageService);
exports.NewsStorageService = NewsStorageService;
//# sourceMappingURL=news-storage.service.js.map