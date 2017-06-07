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
var NewsCustomComponent = (function () {
    function NewsCustomComponent(newsStorageService) {
        this.newsStorageService = newsStorageService;
        this.eventClick = new core_1.EventEmitter();
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
    core_1.Input(),
    __metadata("design:type", Object)
], NewsCustomComponent.prototype, "news", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NewsCustomComponent.prototype, "isSaved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewsCustomComponent.prototype, "eventClick", void 0);
NewsCustomComponent = __decorate([
    core_1.Component({
        selector: 'news-custom',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail story\" >        \n        <div class=\"custom-title\">\n        <a [routerLink]=\"['/detailed/custom', news.title]\"><h4>{{ news?.title }}</h4></a> \n        </div>       \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary story-btn\" (click)=\"save(news) \" \n        [disabled]=\"isInStorage(news)\">{{ isInStorage(news) ? 'Saved' : 'Read later' }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary story-btn\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styleUrls: ['app/news/custom/news-custom-thumbnail.component.css']
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService])
], NewsCustomComponent);
exports.NewsCustomComponent = NewsCustomComponent;
//# sourceMappingURL=news-custom.component.js.map