"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NewsDetailsComponent = (function () {
    function NewsDetailsComponent() {
    }
    return NewsDetailsComponent;
}());
NewsDetailsComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"container\">\n        <h1>Hello there</h1>\n    </div>\n    ",
        styles: [
            "\n        .container {\n            padding: 20px;\n        }\n        img {\n            padding: 20px;\n        }\n        "
        ]
    })
], NewsDetailsComponent);
exports.NewsDetailsComponent = NewsDetailsComponent;
//# sourceMappingURL=news-details.component.js.map