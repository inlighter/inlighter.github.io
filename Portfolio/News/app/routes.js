"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./news/index");
var read_later_list_component_1 = require("./news/saved/read-later-list.component");
var create_news_component_1 = require("./news/create/create-news.component");
exports.appRoutes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: index_1.NewsListComponent, resolve: { articles: index_1.TheNextWebResolver } },
    { path: 'news/:id', component: index_1.NewsCustomListComponent },
    { path: 'saved', component: read_later_list_component_1.ReadLaterListComponent },
    { path: 'create', component: create_news_component_1.CreateNewsComponent },
    { path: 'custom', component: index_1.NewsCustomListComponent },
    { path: 'detailed/techradar/:title', component: index_1.TechRadarDetailsComponent, resolve: { articles: index_1.TechRadarResolver } },
    { path: 'detailed/techcrunch/:title', component: index_1.TechCrunchDetailsComponent, resolve: { articles: index_1.TechCrunchResolver } },
    { path: 'detailed/the-next-web/:title', component: index_1.TheNextWebDetailsComponent, resolve: { articles: index_1.TheNextWebResolver } },
    { path: 'detailed/custom/:title', component: index_1.CustomDetailsComponent }
];
//# sourceMappingURL=routes.js.map