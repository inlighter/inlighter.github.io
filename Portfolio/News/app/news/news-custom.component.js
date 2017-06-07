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
var core_1 = require("@angular/core");
var news_storage_service_1 = require("../shared/news-storage.service");
var NewsCustomComponent = (function () {
    function NewsCustomComponent(newsStorage) {
        this.newsStorage = newsStorage;
        this.readLater = 'Read later';
        this.eventClick = new core_1.EventEmitter();
    }
    NewsCustomComponent.prototype.save = function (article) {
        this.readLater = 'Saved';
        this.newsStorage.saveArticle(article);
    };
    NewsCustomComponent.prototype.removeOnClick = function (article) {
        this.remove(article);
        this.eventClick.emit();
    };
    NewsCustomComponent.prototype.remove = function (article) {
        this.newsStorage.removeArticle(article);
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
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail\" >\n        <img *ngIf=\"news?.urlToImage\" [src]=\"news?.urlToImage\">\n        <a [routerLink]=\"['/detailed/techcrunch', news.title]\"><h3>Title: {{ news?.title }}</h3></a>\n        \n        <br>\n        \n        <button *ngIf=\"!isSaved\" class=\"btn btn-primary\" (click)=\"save(news) \" [disabled]=\"readLater === 'Saved'\">{{ readLater }}</button>\n        <button *ngIf=\"isSaved\" class=\"btn btn-primary\" (click)=\"removeOnClick(news)\" >Remove</button>\n    </div>\n    ",
        styles: ["\n    .well div {\n        color: #bbb;\n        \n    }\n    .thumbnail {\n        height: 450px;\n        overflow: hidden;\n    }\n    img {\n        height: 250px;\n        \n        padding: 20px;\n    }\n    a {\n        text-decoration: none;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService])
], NewsCustomComponent);
exports.NewsCustomComponent = NewsCustomComponent;
//# sourceMappingURL=news-custom.component.js.map