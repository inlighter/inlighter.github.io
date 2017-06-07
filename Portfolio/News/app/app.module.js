"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var index_1 = require("./news/index");
var navbar_component_1 = require("./nav/navbar.component");
var read_later_list_component_1 = require("./news/saved/read-later-list.component");
var create_news_component_1 = require("./news/create/create-news.component");
var news_service_1 = require("./shared/news.service");
var news_storage_service_1 = require("./shared/news-storage.service");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.NewsListComponent,
            index_1.NewsNextWebComponent,
            index_1.NewsTechRadarComponent,
            index_1.NewsTechCrunchComponent,
            navbar_component_1.NavBarComponent,
            index_1.TheNextWebDetailsComponent,
            index_1.TechRadarDetailsComponent,
            index_1.TechCrunchDetailsComponent,
            read_later_list_component_1.ReadLaterListComponent,
            index_1.NewsCustomComponent,
            create_news_component_1.CreateNewsComponent,
            index_1.NewsCustomListComponent,
            index_1.CustomDetailsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            news_service_1.NewsService,
            news_storage_service_1.NewsStorageService,
            index_1.TheNextWebResolver,
            index_1.TechRadarResolver,
            index_1.TechCrunchResolver
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map