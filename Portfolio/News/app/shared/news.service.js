"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewsService = (function () {
    function NewsService() {
    }
    NewsService.prototype.get = function (url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.response);
                }
                else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(Error('Network Error'));
            };
            req.send();
        });
    };
    NewsService.prototype.getJSON = function (url) {
        return this.get(url).then(JSON.parse).catch(function (error) {
            console.log('getJSON failed for', url, error);
            throw error;
        });
    };
    NewsService.prototype.getNews = function (source) {
        var url = 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=latest&apiKey=ea4831f1563048af8bfa3fd779ea332f';
        return this.getJSON(url).then(function (news) { return news.articles; });
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable()
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map