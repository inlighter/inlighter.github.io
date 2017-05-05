"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var tasks_component_1 = require("./tasks.component");
var focus_me_directive_1 = require("./focus-me.directive");
var task_service_1 = require("./task.service");
var router_1 = require("@angular/router");
var footer_component_1 = require("./footer.component");
var url_resolver_1 = require("./url-resolver");
var routes = [
    { path: '', component: tasks_component_1.TasksComponent, pathMatch: 'full' },
    { path: 'share',
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: ':tasks', component: tasks_component_1.TasksComponent, resolve: {
                    tasks: url_resolver_1.UrlResolver
                }
            }
        ] },
    { path: ':status', component: tasks_component_1.TasksComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes, { useHash: true })],
        declarations: [app_component_1.AppComponent, focus_me_directive_1.FocusDirective, tasks_component_1.TasksComponent, footer_component_1.FooterComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            task_service_1.TaskService,
            url_resolver_1.UrlResolver
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map