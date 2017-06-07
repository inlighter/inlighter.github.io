import { Component, OnInit } from '@angular/core';
import { NewsStorageService } from '../../shared/news-storage.service';
import { Article } from '../article.model';

@Component({
    
    templateUrl: './news-custom-list.component.html',
    styles: [`
        .clear-btn {
            margin-top: 30px;
        }
    `]
})

export class NewsCustomListComponent implements OnInit {
    customArticles: Article[];
    constructor(private newsStorageService: NewsStorageService) {

    }

    ngOnInit() {
        this.customArticles = this.newsStorageService.getCustomNews();
    }

    removeAll(): void {
        const readLaterArticles = this.newsStorageService.getArticles();
        const readLaterArticlesEdited = readLaterArticles.filter(news => news.source !== 'custom');
        this.newsStorageService.saveListArticles(readLaterArticlesEdited);
        this.newsStorageService.clearCustomStorage();
    }


}