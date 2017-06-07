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
var news_storage_service_1 = require("../shared/news-storage.service");
var NewsNextWebComponent = (function () {
    function NewsNextWebComponent(newsStorage) {
        this.newsStorage = newsStorage;
        this.eventClick = new core_1.EventEmitter();
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
    core_1.Input(),
    __metadata("design:type", Object)
], NewsNextWebComponent.prototype, "news", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NewsNextWebComponent.prototype, "isSaved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewsNextWebComponent.prototype, "eventClick", void 0);
NewsNextWebComponent = __decorate([
    core_1.Component({
        selector: 'news-nextweb',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail story\" >\n        \n        <a *ngIf=\"news?.urlToImage\" [routerLink]=\"['/detailed/the-next-web', news.title]\" \n        class=\"story-image\" [ngStyle]=\"{'background-image': 'url(' + news.urlToImage+')'}\"></a>\n        <a [routerLink]=\"['/detailed/the-next-web', news.title]\"><h4>{{ news?.title }}</h4></a>        \n                \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary story-btn\" (click)=\"save(news) \" \n        [disabled]=\"readLater === 'Saved'\">{{ readLater }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary story-btn\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styleUrls: ['app/news/news-thumbnail.component.css']
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService])
], NewsNextWebComponent);
exports.NewsNextWebComponent = NewsNextWebComponent;
//# sourceMappingURL=news-nextweb.component.js.map