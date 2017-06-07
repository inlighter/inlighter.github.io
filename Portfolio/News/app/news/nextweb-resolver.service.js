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
var core_1 = require('@angular/core');
var news_service_1 = require('../shared/news.service');
var router_1 = require('@angular/router');
var NextWebResolver = (function () {
    function NextWebResolver(newsService, route) {
        this.newsService = newsService;
        this.route = route;
    }
    NextWebResolver.prototype.resolve = function () {
        return this.newsService.getNews(this.route.snapshot.params['the-next-web']).then(function (news) { return news; });
    };
    NextWebResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [news_service_1.NewsService, router_1.ActivatedRoute])
    ], NextWebResolver);
    return NextWebResolver;
}());
exports.NextWebResolver = NextWebResolver;
//# sourceMappingURL=nextweb-resolver.service.js.map