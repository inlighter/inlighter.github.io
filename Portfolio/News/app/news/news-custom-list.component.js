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
var NewsCustomListComponent = (function () {
    function NewsCustomListComponent(newsStorageService) {
        this.newsStorageService = newsStorageService;
    }
    NewsCustomListComponent.prototype.ngOnInit = function () {
        this.customArticles = this.newsStorageService.getCustomNews();
    };
    return NewsCustomListComponent;
}());
NewsCustomListComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"container\">    \n        \n        <h1>Custom News</h1>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-md-6\" *ngFor=\"let article of customArticles\">               \n                \n                <news-custom [news]=\"article\"></news-custom>\n            </div>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService])
], NewsCustomListComponent);
exports.NewsCustomListComponent = NewsCustomListComponent;
//# sourceMappingURL=news-custom-list.component.js.map