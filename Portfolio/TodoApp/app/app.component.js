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
var task_service_1 = require("./task.service");
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.isEnable = false;
        this.btnLabel = 'Share';
    }
    AppComponent.prototype.shareMyList = function () {
        this.sharedLink = this.taskService.encodeTaskList();
        this.isEnable = !this.isEnable;
        this.btnLabel = this.btnLabel === 'Share' ? 'Hide' : 'Share';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'todo-app',
        template: "\n  <section class=\"todoapp\">\n  <router-outlet></router-outlet>\n</section>\n<form>\n  <button class=\"btn-1\" type=\"button\" (click)=\"shareMyList()\">{{btnLabel}}</button>\n  <textarea *ngIf=\"isEnable\" placeholder=\"Shared link!\">{{sharedLink}}</textarea>\n</form>\n"
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map