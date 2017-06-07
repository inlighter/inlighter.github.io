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
var router_2 = require("@angular/router");
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
    core_1.Component({
        templateUrl: '/app/news/news-details/custom-details.component.html',
        styles: [
            "\n         .article-content {\n            font-size: 1.25em;\n            line-height: 1.5em;\n            margin-top: 1em;\n        }\n        .info {\n            color: darkgray;\n        }\n        .thumbnail {\n            padding: 30px;\n            cursor: auto;\n        }\n        \n        "
        ]
    }),
    __metadata("design:paramtypes", [news_storage_service_1.NewsStorageService, router_1.ActivatedRoute,
        router_2.Router])
], CustomDetailsComponent);
exports.CustomDetailsComponent = CustomDetailsComponent;
//# sourceMappingURL=custom-details.component.js.map