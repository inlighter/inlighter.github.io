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
    core_1.Component({
        templateUrl: 'app/news/saved/read-later-list.component.html',
        styles: ["\n        .clear-btn {\n            margin-top: 30px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService])
], ReadLaterListComponent);
exports.ReadLaterListComponent = ReadLaterListComponent;
//# sourceMappingURL=read-later-list.component.js.map