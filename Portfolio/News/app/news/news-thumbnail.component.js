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
var NewsThumbnailComponent = (function () {
    function NewsThumbnailComponent() {
    }
    return NewsThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NewsThumbnailComponent.prototype, "news", void 0);
NewsThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'news-thumbnail',
        template: "\n    <div *ngIf=\"news?.title\" class=\"well hoverwell thumbnail\">\n        <img *ngIf=\"news?.urlToImage\" [src]=\"news?.urlToImage\">\n        <a [href]=\"news?.url\" target=\"_blank\"><h3>Title: {{ news?.title }}</h3></a>\n        <div *ngIf=\"news?.author\">Author: {{ news?.author }}</div>\n        <br>\n        <p *ngIf=\"news?.description\">Description: {{ news?.description }}</p>\n    </div>\n    ",
        styles: ["\n    .well div {\n        color: #bbb;\n        \n    }\n    .thumbnail {\n        height: 320px;\n    }\n    img {\n        width: 250px;\n        float: left;\n        padding: 20px;\n    }\n    "]
    })
], NewsThumbnailComponent);
exports.NewsThumbnailComponent = NewsThumbnailComponent;
//# sourceMappingURL=news-thumbnail.component.js.map